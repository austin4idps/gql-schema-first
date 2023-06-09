import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreatePostInput,
  CreatePostRes,
  DeletePostInput,
  DeletePostRes,
  Member,
  Post,
  UpdatePostInput,
  UpdatePostRes,
} from 'src/graphql/graphql';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Mutation(() => CreatePostRes)
  createPost(@Args('input') input: CreatePostInput): Promise<CreatePostRes> {
    return this.postService.create(input);
  }

  @Query(() => Post)
  async findPoster(@Args('id') id: string): Promise<Member> {
    return this.postService.findPoster(id);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id') id: string,
    @Args('input') input: UpdatePostInput,
  ): Promise<UpdatePostRes> {
    return this.postService.update(id, input);
  }

  @Mutation(() => Post)
  async deletePost(
    @Args('input') input: DeletePostInput,
  ): Promise<DeletePostRes> {
    return this.postService.remove(input);
  }
}
