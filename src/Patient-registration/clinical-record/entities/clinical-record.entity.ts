import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Biodata } from '../../biodata/entities/biodata.entity';

@Entity()
export class ClinicalRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clinicDate: Date;

  @Column()
  natureOfAilment: string;

  // Define other properties

  @ManyToOne(() => Biodata, (biodata) => biodata.clinicalRecords)
  biodata: Biodata;
}
