import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Assignment } from '../assignments/assignment.model';

@Table({ tableName: 'shifts' })
export class Shift extends Model<Shift> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.DATE, allowNull: false })
  startTime!: Date;

  @Column({ type: DataType.DATE, allowNull: false })
  endTime!: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  location!: string;

  @HasMany(() => Assignment)
  assignments?: Assignment[];
}
