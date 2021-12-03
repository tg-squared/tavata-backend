import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

import { AuthModule } from 'src/auth';
import { UsersModule } from 'src/users';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService): MongooseModuleOptions => ({
                uri: configService.get<string>('MONGODB_URL'),
                dbName: configService.get<string>('MONGODB_DATABASE'),
            }),
        }),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
