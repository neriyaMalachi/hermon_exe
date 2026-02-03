import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Shift } from '../shifts/shift.model';

@Table({ tableName: 'assignments' })
export class Assignment extends Model<Assignment> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId!: number;

  @ForeignKey(() => Shift)
  @Column({ type: DataType.INTEGER, allowNull: false })
  shiftId!: number;

  @BelongsTo(() => User)
  user?: User;

  @BelongsTo(() => Shift)
  shift?: Shift;
}
