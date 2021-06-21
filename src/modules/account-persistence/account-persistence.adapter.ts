import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountOrmEntity } from './account.orm-entity';
import { ActivityOrmEntity } from './activity.orm-entity';
import { AccountMapper } from './account.mapper';
import { UpdateAccountStatePort } from './../../domain/ports/out/update-account-state.port';
import { LoadAccountPort } from './../../domain/ports/out/load-account.port';
import {
  AccountId,
  AccountEntity,
} from './../../domain/entities/account.entity';

@Injectable()
export class AccountPersistenceAdapter
  implements LoadAccountPort, UpdateAccountStatePort
{
  constructor(
    @InjectRepository(AccountOrmEntity)
    private readonly _accountRepository: Repository<AccountOrmEntity>,
    @InjectRepository(ActivityOrmEntity)
    private readonly _activityRepository: Repository<ActivityOrmEntity>,
  ) {}

  async loadAccount(accountId: AccountId): Promise<AccountEntity> {
    const account: AccountOrmEntity = await this._accountRepository.findOne({
      userId: accountId,
    });
    if (account === undefined) {
      throw new Error('Account not found');
    }
    const activities: ActivityOrmEntity[] = await this._activityRepository.find(
      {
        ownerAccountId: accountId,
      },
    );
    return AccountMapper.mapToDomain(account, activities);
  }

  updateActivities(account: AccountEntity): void {
    account.activityWindow.activities.forEach((activity) => {
      if (activity.id === null) {
        this._activityRepository.save(
          AccountMapper.mapToActivityOrmEntity(activity),
        );
      }
    });
  }
}
