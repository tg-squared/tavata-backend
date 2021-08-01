import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
