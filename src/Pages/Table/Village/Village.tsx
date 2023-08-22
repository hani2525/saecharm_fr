import React from 'react';
import Team from '../Team';
import { MemberTypeObj } from '../type';
import css from './Village.module.scss';
interface Props {
  teams: MemberTypeObj['memberTypeObj'];
}
const Village = ({ teams }: Props) => {
  // const villageNumber = Number(teams.);
  // const teamArr = Object.entries(teams.member);

  /*
  {
    village_id:1,
    village_elder:"",
    village_data:[{
      team_id:1,
      team_data:[{...}]
    }, {
      team_id:2,
      team_data:[{...}]
    }]
  }
  */

  // console.log('teamArr', teamArr);

  return (
    <>
      <div className={css.container}>
        <div className={css.info}>
          {/* <span className={css.viilageNumber}>{villageNumber}마을</span> */}
          {/* <span className={css.elder}> </span> */}
        </div>
        <div className={css.pastureWrapper}>
          <Team key={teams.teamNum} team={teams?.member} />
        </div>
      </div>
    </>
  );
};

export default Village;
