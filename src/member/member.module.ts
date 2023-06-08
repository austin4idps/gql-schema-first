import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entity/member.entity';
import { Profile } from 'src/entity/profile.entity';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Profile])],
  providers: [MemberResolver, MemberService],
})
export class MemberModule {}
