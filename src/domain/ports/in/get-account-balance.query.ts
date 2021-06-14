import { AccountId } from 'src/domain/entities/account.entity';

export interface GetAccountBalanceQuery {
  getAccountBalance(accountId: AccountId);
}
