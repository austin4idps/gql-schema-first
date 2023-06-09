import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserInput,
  CreateUserRes,
  Member,
  UserPostRes,
} from 'src/graphql/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query()
  async getUser(@Args('id') id: string): Promise<Member> {
    return await this.memberService.getUser(id);
  }

  @Query()
  async getUserWithQueryBuilder(@Args('id') id: string): Promise<Member> {
    return await this.memberService.getUserWithQueryBuilder(id);
  }

  @Query()
  async getUserPosts(@Args('id') id: string): Promise<UserPostRes> {
    return await this.memberService.getUserPosts(id);
  }

  @Mutation()
  async createUser(
    @Args('input') input: CreateUserInput,
  ): Promise<CreateUserRes> {
    return await this.memberService.createUser(input);
  }
}
