import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClinicalRecord } from './entities/clinical-record.entity';

@Injectable()
export class ClinicalRecordService {
  constructor(
    @InjectRepository(ClinicalRecord)
    private readonly clinicalRecordRepository: Repository<ClinicalRecord>,
  ) {}

  async create(clinicalRecord: ClinicalRecord): Promise<ClinicalRecord> {
    return this.clinicalRecordRepository.save(clinicalRecord);
  }

  async findAll(): Promise<ClinicalRecord[]> {
    return this.clinicalRecordRepository.find();
  }

  async findById(id: number): Promise<ClinicalRecord> {
    return this.clinicalRecordRepository.findOne(id);
  }

  async update(id: number, clinicalRecord: ClinicalRecord): Promise<ClinicalRecord> {
    await this.clinicalRecordRepository.update(id, clinicalRecord);
    return this.clinicalRecordRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.clinicalRecordRepository.delete(id);
  }
}
