import { MoneyEntity } from './money.entity';
import { AccountId } from './account.entity';

export class ActivityEntity {
  constructor(
    private readonly _sourceAccountId: AccountId,
    private readonly _targetAccountId: AccountId,
    private readonly _timestamp: Date,
    private readonly _money: MoneyEntity,
  ) {}

  get sourceAccount(): AccountId {
    return this._sourceAccountId;
  }

  get targetAccount(): AccountId {
    return this._targetAccountId;
  }

  get timestamp(): Date {
    return this._timestamp;
  }

  get money(): MoneyEntity {
    return this._money;
  }
}
