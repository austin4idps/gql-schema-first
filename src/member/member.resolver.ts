import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemberResolver {
  @Query(()=> String)
  doHealthCheck(){
    return 'Hello World'
  }
}
