import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entitiy/member.entity';
import { Profile } from 'src/entitiy/profile.entity';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Profile])],
  providers: [MemberResolver, MemberService],
})
export class MemberModule {}
