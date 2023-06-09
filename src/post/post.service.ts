import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Member } from 'src/entity/member.entity';
import { Post } from 'src/entity/post.entity';
import {
  CreatePostInput,
  CreatePostRes,
  DeletePostInput,
  Member as MemberRes,
  UpdatePostInput,
  UpdatePostRes,
} from 'src/graphql/graphql';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async findAllWithQueryBuilder(): Promise<Post[]> {
    const posts = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .getMany();
    console.log(posts);
    return posts;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.find({
      relations: ['author'],
    });
    return posts;
  }

  async create(input: CreatePostInput): Promise<CreatePostRes> {
    const existMember = await this.memberRepository.findOne({
      where: { id: input.authorId },
    });
    console.log(existMember);
    const inputWithAuthor = { ...input, author: existMember };
    const newPost = this.postRepository.create(inputWithAuthor);
    const existPost = await this.postRepository.save(newPost);

    return { postId: existPost.id };
  }

  findOne(id: string) {
    return this.postRepository.findOne({
      where: { id },
    });
  }

  async findPoster(id: string): Promise<MemberRes> {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author', 'author.profile'],
    });

    return post.author;
  }

  async update(id: string, input: UpdatePostInput): Promise<UpdatePostRes> {
    await this.postRepository.update({ id }, input);
    return { postId: id };
  }

  async remove(input: DeletePostInput) {
    await this.postRepository.delete({ id: input.postId });
    return { postId: input.postId };
  }
}
