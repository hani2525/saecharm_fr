export type MemberType = {
  team_id: number;
  team_name: string;
  name: string;
  gender: string;
  birth_year: number;
  position: number;
  village_id: number;
  villlage_name: string;
  elder: string;
};

export type MemberTypeObj = {
  villageNum: string;
  memberTypeObj: { teamNum: string; member: MemberType[] };
};

export type MemberTypeArr = MemberTypeObj[];

//['1', [{}, {}, {}]]

export type tmpTypeArr = [string, MemberType];

export type NewbieToMemberDataType = {
  team_id: number;
  name: string;
  gender: string;
  birth_year: number;
  position: number;
};
