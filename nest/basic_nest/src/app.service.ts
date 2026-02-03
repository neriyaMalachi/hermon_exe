import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllUsers() {
    return { message: 'hello this is test route' };
  }
}
