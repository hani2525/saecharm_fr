import React from 'react';
import { cn } from 'utils';
import css from './Team.module.scss';

const Team = ({ team }: any) => {
  const members = team[1];
  const teamName = members[0].team_name;
  return (
    <>
      <div className={css.container}>
        <div className={css.teamName}>{teamName}</div>
        <div className={css.sheepList}>
          {members &&
            members.map((member: any) => {
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
