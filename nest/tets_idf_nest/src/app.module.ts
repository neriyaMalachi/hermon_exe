import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [ItemsModule, BudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
