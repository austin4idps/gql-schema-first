import { MemberTypeEnum } from 'src/graphql/graphql';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
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
  profile: Profile;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
