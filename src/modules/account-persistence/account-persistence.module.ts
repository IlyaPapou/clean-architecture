import { ActivityOrmEntity } from './activity.orm-entity';
import { AccountOrmEntity } from './account.orm-entity';
import { AccountPersistenceAdapter } from './account-persistence.adapter';
import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendMoneyUseCaseSymbol } from '../../domain/ports/in/send-money.use-case';
import { SendMoneyService } from '../../domain/services/send-money.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])],
  providers: [
    AccountPersistenceAdapter,
    {
      provide: SendMoneyUseCaseSymbol,
      useFactory: (accountPersistenceAdapter): SendMoneyService => {
        return new SendMoneyService(
          accountPersistenceAdapter,
          accountPersistenceAdapter,
        );
      },
      inject: [AccountPersistenceAdapter],
    },
  ],
  exports: [SendMoneyUseCaseSymbol],
})
export class AccountPersistenceModule {}
