import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query()
  async getUser(@Args('id') id: string) {
    return await this.memberService.getUser(id);
  }

  @Mutation()
  async createUser(@Args('input') input: CreateUserInput) {
    return await this.memberService.createUser(input);
  }
}
