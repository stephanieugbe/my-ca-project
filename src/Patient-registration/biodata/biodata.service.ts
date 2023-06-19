import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodata } from './entities/biodata.entity';

@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Biodata)
    private readonly biodataRepository: Repository<Biodata>,
  ) {}

  async create(biodata: Biodata): Promise<Biodata> {
    return this.biodataRepository.save(biodata);
  }

  async findAll(): Promise<Biodata[]> {
    return this.biodataRepository.find();
  }

  async findById(id: number): Promise<Biodata> {
    return this.biodataRepository.findOne(id);
  }

  async update(id: number, biodata: Biodata): Promise<Biodata> {
    await this.biodataRepository.update(id, biodata);
    return this.biodataRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.biodataRepository.delete(id);
  }
}
