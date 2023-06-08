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
}

export class CreateUserRes {
  memberId?: Nullable<string>;
}

export abstract class IMutation {
  abstract createUser(
    input?: Nullable<CreateUserInput>,
  ): Nullable<CreateUserRes> | Promise<Nullable<CreateUserRes>>;
}

type Nullable<T> = T | null;
