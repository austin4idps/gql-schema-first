import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Member } from './member.entity';

@Entity()
export class Post {
  @PrimaryColumn('varchar')
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Member, (member) => member.posts)
  @JoinColumn()
  author: Member;
}
