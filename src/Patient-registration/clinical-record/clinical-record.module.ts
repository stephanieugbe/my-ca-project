import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { ClinicalRecordController } from './clinical-record.controller';
import { ClinicalRecordService } from './clinical-record.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClinicalRecord])],
    controllers: [ClinicalRecordController],
    providers: [ClinicalRecordService],
  })
  export class ClinicalRecordModule {}
  