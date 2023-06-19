import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodata } from './entities/biodata.entity';
import { BiodataController } from './biodata.controller';
import { BiodataService } from './biodata.service';

@Module({
    imports: [TypeOrmModule.forFeature([Biodata])],
    controllers: [BiodataController],
    providers: [BiodataService],
  })
  export class BiodataModule {}
  