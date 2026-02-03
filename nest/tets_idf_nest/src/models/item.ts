import {
  Column,
  Table,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'Item' })
export class Item extends Model<Item> {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.NUMBER, allowNull: false, validate: { min: 0 } })
  quantity: number;

  @Column({ type: DataType.NUMBER, allowNull: false, validate: { min: 0 } })
  pricePeUnit: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  hasImage: boolean;
}
