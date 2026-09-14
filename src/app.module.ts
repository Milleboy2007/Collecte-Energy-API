import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { BuildingsModule } from './buildings/buildings.module';
import { RoomsModule } from './rooms/rooms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import databaseConfig from 'config/database.config';

@Module({

  imports: [HealthModule, BuildingsModule, RoomsModule,
        // 1. Gestion des configurations avec validation stricte
        ConfigModule.forRoot({
          isGlobal: true,
          load: [databaseConfig], // Charge notre fichier de config
          validationSchema: Joi.object({
            // Si MONGO_URI est absent, NestJS plantera immédiatement avec un message clair
            MONGO_URI: Joi.string().required(),
            PORT: Joi.number().default(3000),
          }),
        }),

        // 2. Connexion asynchrone et sécurisée à MongoDB
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            // Récupération typée et sécurisée
            uri: configService.get<string>('database.uri'),
            // Options de production recommandées
            autoIndex: process.env.NODE_ENV !== 'production', // Désactive l'auto-indexation en prod pour les performances
          }),
        })
  ]
})
export class AppModule {}
