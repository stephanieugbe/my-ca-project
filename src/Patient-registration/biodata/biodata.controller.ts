import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Biodata } from './entities/biodata.entity';
import { BiodataService } from './biodata.service';

@Controller('biodata')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}

  @Post()
  async create(@Body() biodata: Biodata): Promise<Biodata> {
    return this.biodataService.create(biodata);
  }

  @Get()
  async findAll(): Promise<Biodata[]> {
    return this.biodataService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Biodata> {
    return this.biodataService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() biodata: Biodata): Promise<Biodata> {
    return this.biodataService.update(id, biodata);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.biodataService.delete(id);
  }
}
