import { AccountEntity } from 'src/domain/entities/account.entity';

export interface UpdateAccountStatePort {
  updateActivities(account: AccountEntity);
}
