import { MemberTypeEnum } from 'src/enum/member-type.enum';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({ name: 'member', database: 'Auth' })
export class Member {
  @PrimaryColumn('varchar')
  @Generated('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'enum', enum: MemberTypeEnum })
  memberType: MemberTypeEnum;
}
