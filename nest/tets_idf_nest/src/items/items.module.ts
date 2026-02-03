import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'src/models/item';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemsService],
})
export class ItemsModule {}
