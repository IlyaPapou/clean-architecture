import { AccountId } from 'src/domain/entities/account.entity';
import { MoneyEntity } from 'src/domain/entities/money.entity';

export class SendMoneyCommand {
  constructor(
    private readonly _sourceAccountId: AccountId,
    private readonly _targetAccountId: AccountId,
    private readonly _money: MoneyEntity,
  ) {}

  get sourceAccountId(): AccountId {
    return this._sourceAccountId;
  }

  get targetAccountId(): AccountId {
    return this._targetAccountId;
  }

  get money(): MoneyEntity {
    return this._money;
  }
}
