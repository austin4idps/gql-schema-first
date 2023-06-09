import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entity/member.entity';
import { Profile } from 'src/entity/profile.entity';
import { CreateUserInput } from 'src/graphql/graphql';
import { Repository } from 'typeorm';
@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepo: Repository<Member>,
    @InjectRepository(Profile)
    private memberProfileRepo: Repository<Profile>,
  ) {}

  async getUser(id: string) {
    const existMember = await this.memberRepo.findOne({
      where: { id },
      relations: ['profile'],
    });

    return existMember;
  }

  async getUserPosts(id: string) {
    const existMember = await this.memberRepo.findOne({
      where: { id },
      relations: ['profile', 'posts', 'posts.author'],
    });
    console.log(existMember);

    return existMember;
  }

  async getUserWithQueryBuilder(id: string) {
    const existMember = await this.memberRepo
      .createQueryBuilder('m')
      .where('m.id = :id', { id })
      .leftJoinAndSelect('m.profile', 'mp')
      .getOne();

    console.log(existMember);
    return existMember;
  }

  async createUser(input: CreateUserInput) {
    const newMember = new Member();
    newMember.displayName = input.displayName;
    newMember.memberType = input.memberType;

    const existProfile = await this.memberProfileRepo.save(input.profile);

    newMember.profile = existProfile;

    const existUser = await this.memberRepo.save(newMember);
    return { memberId: existUser.id };
  }
}
