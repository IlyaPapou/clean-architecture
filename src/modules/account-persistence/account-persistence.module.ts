import { ActivityOrmEntity } from './activity.orm-entity';
import { AccountOrmEntity } from './account.orm-entity';
import { AccountPersistenceAdapter } from './account-persistence.adapter';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])],
  providers: [AccountPersistenceAdapter],
  exports: [AccountPersistenceAdapter],
})
export class AccountPersistenceModule {}
