import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entity/member.entity';
import { Post } from 'src/entity/post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Member])],
  providers: [PostResolver, PostService],
  exports: [PostService],
})
export class PostModule {}
