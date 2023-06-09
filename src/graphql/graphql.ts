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

export class CreateCategoryInput {
  name: string;
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

export class CreateProductInput {
  name: string;
  categoryIds?: Nullable<Nullable<string>[]>;
}

export class Category {
  id: string;
  name?: Nullable<string>;
  products?: Nullable<Nullable<Product>[]>;
}

export abstract class IQuery {
  abstract category(): Nullable<Category>[] | Promise<Nullable<Category>[]>;

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

  abstract product(): Nullable<Product>[] | Promise<Nullable<Product>[]>;
}

export abstract class IMutation {
  abstract createCategory(
    input: CreateCategoryInput,
  ): Category | Promise<Category>;

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

  abstract createProduct(
    createProductInput: CreateProductInput,
  ): Product | Promise<Product>;
}

export class MemberProfile {
  id: string;
  email?: Nullable<string>;
  firstName?: Nullable<string>;
  lastName?: Nullable<string>;
  member?: Nullable<Member>;
}

export class Member {
  id: string;
  displayName?: Nullable<string>;
  memberType?: Nullable<MemberTypeEnum>;
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

export class Product {
  id: string;
  name?: Nullable<string>;
  categories?: Nullable<Nullable<Category>[]>;
}

type Nullable<T> = T | null;
