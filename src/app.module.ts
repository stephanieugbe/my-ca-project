import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicalRecord } from './Patient-registration/clinical-record/entities/clinical-record.entity';
import { Biodata } from './Patient-registration/biodata/entities/biodata.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ClinicalRecord, Biodata]), // Include both entities here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

