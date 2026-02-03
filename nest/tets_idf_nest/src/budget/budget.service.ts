import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BudgetService implements OnModuleInit {
  private readonly logger = new Logger(BudgetService.name);
  private currentBudget = 0;

  onModuleInit() {
    const filePath = path.join(process.cwd(), 'budget.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);

    this.currentBudget = Number(data.currentBudget || 0);
    this.logger.log(`[Budget] Loaded: ${this.currentBudget}`);
  }

  getBudget() {
    return this.currentBudget;
  }

  setBudget(newBudget: number) {
    this.currentBudget = newBudget;
  }
}
