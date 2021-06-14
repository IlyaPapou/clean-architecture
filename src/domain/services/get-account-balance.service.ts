import { AccountId } from '../entities/account.entity';
import { MoneyEntity } from '../entities/money.entity';
import { LoadAccountPort } from '../ports/out/load-account.port';
import { GetAccountBalanceQuery } from './../ports/in/get-account-balance.query';

export class GetAccountBalanceService implements GetAccountBalanceQuery {
  constructor(private readonly _loadAccountPort: LoadAccountPort) {}

  getAccountBalance(accountId: AccountId): MoneyEntity {
    return this._loadAccountPort.loadAccount(accountId).calculateBalance();
  }
}
