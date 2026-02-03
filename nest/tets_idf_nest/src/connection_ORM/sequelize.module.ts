import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 3306),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '123456789',
      database: process.env.DB_NAME || 'data',

      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
  ],
})
export class SequelizeConfigModule {}
