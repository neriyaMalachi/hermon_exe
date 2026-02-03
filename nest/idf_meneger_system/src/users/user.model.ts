import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Assignment } from '../assignments/assignment.model';
import type { Role } from '../common/decorators/roles.decorator';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  passwordHash!: string;

  @Column({ type: DataType.ENUM('soldier', 'commander'), allowNull: false })
  role!: Role;

  @HasMany(() => Assignment)
  assignments?: Assignment[];
}
