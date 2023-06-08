import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity({ name: 'memberProfile' })
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  lastName: string;

  @OneToOne(() => Member, (m: Member) => m.profile)
  member: Member;
}
