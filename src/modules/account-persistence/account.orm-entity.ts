import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('Account', {})
export class AccountOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: string;
}
