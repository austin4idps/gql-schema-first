import { MemberTypeEnum } from 'src/graphql/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'member' })
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  displayName: string;

  @Column({ type: 'enum', enum: MemberTypeEnum })
  memberType: MemberTypeEnum;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
