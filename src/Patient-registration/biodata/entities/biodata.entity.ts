import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ClinicalRecord } from '../../clinical-record/entities/clinical-record.entity';

@Entity()
export class Biodata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  surname: string;

  // Define other properties

  @OneToMany(() => ClinicalRecord, (clinicalRecord) => clinicalRecord.biodata)
  clinicalRecords: ClinicalRecord[];
}
