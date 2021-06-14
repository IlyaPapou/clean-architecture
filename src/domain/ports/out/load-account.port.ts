import { AccountEntity, AccountId } from 'src/domain/entities/account.entity';

export interface LoadAccountPort {
  loadAccount(accountId: AccountId): Promise<AccountEntity>;
}
