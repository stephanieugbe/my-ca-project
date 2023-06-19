import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { ClinicalRecordService } from './clinical-record.service';

@Controller('clinical-record')
export class ClinicalRecordController {
  constructor(private readonly clinicalRecordService: ClinicalRecordService) {}

  @Post()
  async create(@Body() clinicalRecord: ClinicalRecord): Promise<ClinicalRecord> {
    return this.clinicalRecordService.create(clinicalRecord);
  }

  @Get()
  async findAll(): Promise<ClinicalRecord[]> {
    return this.clinicalRecordService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<ClinicalRecord> {
    return this.clinicalRecordService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() clinicalRecord: ClinicalRecord): Promise<ClinicalRecord> {
    return this.clinicalRecordService.update(id, clinicalRecord);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.clinicalRecordService.delete(id);
  }
}
