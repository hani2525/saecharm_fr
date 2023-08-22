import React from 'react';
import { cn } from 'utils';
import { MemberType } from '../type';
import css from './Team.module.scss';

interface Props {
  team: MemberType[];
}

const Team = ({ team }: Props) => {
  //TODO:송이님이랑 한것
  // 1. react-query 캐싱 처리 : queryClient 로 캐싱처리 -> refetch 할 필요 없음
  // 2. 리액트 쿼리에서 useQuery 받아올 때 데이터 타입 지정해주기
  // 3. Tuple 사용해서 타입 지정
  const teamName = team?.[0]?.team_name;

  return (
    <>
      <div className={css.container}>
        <div className={css.teamName}>{teamName}</div>
        <div className={css.sheepList}>
          {team &&
            team.map((member: MemberType) => {
              return (
                <span
                  className={cn(
                    member.position === 3 ? css.sheep : css.leader,
                    css[member.gender],
                    css.member,
                  )}
                  key={member.name}
                >
                  {member.name} ({member.birth_year})
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Team;
