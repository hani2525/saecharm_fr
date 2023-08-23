export type VillageDataType = {
  team_id: number;
  team_data: MemberDataType[];
};

export type TableDataType = {
  village_id: number;
  village_data: VillageDataType[];
};

export type MemberDataType = {
  team_id: number;
  team_name: string;
  village_id: number;
  village_name: string;
  name: string;
  position: number;
  birth_year: number;
  elder: string;
  gender: string;
};

export type NewbieToMemberDataType = {
  team_id: number;
  name: string;
  gender: string;
  birth_year: number;
  position: number;
};
