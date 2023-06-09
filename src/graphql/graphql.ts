/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum MemberTypeEnum {
  Admin = 'Admin',
  User = 'User',
  Vip = 'Vip',
}

export class ProfileInput {
  email?: Nullable<string>;
  firstName?: Nullable<string>;
  lastName?: Nullable<string>;
}

export class CreateUserInput {
  displayName: string;
  memberType: MemberTypeEnum;
  profile?: Nullable<ProfileInput>;
}

export class CreatePostInput {
  title: string;
  content: string;
  authorId: string;
}

export class UpdatePostInput {
  title?: Nullable<string>;
  content?: Nullable<string>;
}

export class DeletePostInput {
  postId: string;
}

export class MemberProfile {
  id: string;
  email?: Nullable<string>;
  firstName?: Nullable<string>;
  lastName?: Nullable<string>;
}

export class Member {
  id: string;
  displayName?: Nullable<string>;
  memberType?: Nullable<MemberTypeEnum>;
  profile?: Nullable<MemberProfile>;
}

export abstract class IQuery {
  abstract getUser(id: string): Nullable<Member> | Promise<Nullable<Member>>;

  abstract getUserWithQueryBuilder(
    id: string,
  ): Nullable<Member> | Promise<Nullable<Member>>;

  abstract getUserPosts(
    id: string,
  ): Nullable<UserPostRes> | Promise<Nullable<UserPostRes>>;

  abstract getPostById(id: string): Nullable<Post> | Promise<Nullable<Post>>;

  abstract posts():
    | Nullable<Nullable<Post>[]>
    | Promise<Nullable<Nullable<Post>[]>>;

  abstract findPoster(id: string): Nullable<Member> | Promise<Nullable<Member>>;
}

export class PostWithoutAuthor {
  id: string;
  title: string;
  content: string;
}

export class UserPostRes {
  id: string;
  displayName?: Nullable<string>;
  memberType?: Nullable<MemberTypeEnum>;
  profile?: Nullable<MemberProfile>;
  posts?: Nullable<Nullable<Post>[]>;
}

export class CreateUserRes {
  memberId?: Nullable<string>;
}

export abstract class IMutation {
  abstract createUser(
    input?: Nullable<CreateUserInput>,
  ): Nullable<CreateUserRes> | Promise<Nullable<CreateUserRes>>;

  abstract createPost(
    input?: Nullable<CreatePostInput>,
  ): Nullable<CreatePostRes> | Promise<Nullable<CreatePostRes>>;

  abstract updatePost(
    id: string,
    input?: Nullable<UpdatePostInput>,
  ): Nullable<UpdatePostRes> | Promise<Nullable<UpdatePostRes>>;

  abstract deletePost(
    input?: Nullable<DeletePostInput>,
  ): Nullable<DeletePostRes> | Promise<Nullable<DeletePostRes>>;
}

export class Post {
  id: string;
  title: string;
  content: string;
  author: Member;
}

export class CreatePostRes {
  postId: string;
}

export class UpdatePostRes {
  postId: string;
}

export class DeletePostRes {
  postId: string;
}

type Nullable<T> = T | null;
