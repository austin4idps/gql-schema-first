import { MemberTypeEnum } from "src/enum/member-type.enum"
import { ProfileDto } from "./profile.dto"

export class MemberDto{
  displayName: string
  memberType: MemberTypeEnum
  profile?: ProfileDto
}