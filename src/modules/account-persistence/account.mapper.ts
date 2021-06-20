import { ActivityWindowEntity } from './../../domain/entities/activity-window.entity';
import { ActivityEntity } from './../../domain/entities/activity.entity';
import { AccountEntity } from './../../domain/entities/account.entity';
import { AccountOrmEntity } from './account.orm-entity';
import { ActivityOrmEntity } from './activity.orm-entity';
import { MoneyEntity } from './../../domain/entities/money.entity';

export class AccountMapper {
  static mapToDomain(
    account: AccountOrmEntity,
    activities: ActivityOrmEntity[],
  ): AccountEntity {
    const activityWindow: ActivityWindowEntity =
      this.mapTotActivityWindow(activities);
    const balance: MoneyEntity = activityWindow.calculateBalance(
      account.userId,
    );
    return new AccountEntity(account.userId, balance, activityWindow);
  }

  static mapTotActivityWindow(
    activities: ActivityOrmEntity[],
  ): ActivityWindowEntity {
    const activityWindowEntity: ActivityWindowEntity =
      new ActivityWindowEntity();
    activities.forEach((activity: ActivityOrmEntity) => {
      const activityEntity: ActivityEntity = new ActivityEntity(
        activity.ownerAccountId,
        activity.sourceAccountId,
        activity.targetAccountId,
        new Date(activity.timestamp),
        MoneyEntity.of(activity.amount),
        activity.id,
      );
      activityWindowEntity.addActivity(activityEntity);
    });
    return activityWindowEntity;
  }
}
