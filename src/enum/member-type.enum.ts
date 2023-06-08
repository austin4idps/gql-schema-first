import { registerEnumType } from '@nestjs/graphql';

export enum MemberTypeEnum {
  Admin = 'Admin',
  User = 'User',
  Vip = 'Vip',
}

registerEnumType(MemberTypeEnum, {
  name: 'MemberTypeEnum',
});
