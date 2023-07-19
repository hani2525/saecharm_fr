import React, { useEffect, useState } from 'react';
import BASE_URL from 'config';
import { TeamDataType } from '../type';
import css from './AssignModal.module.scss';

interface Props {
  fourth_class?: string;
  name: string;
  gender: string;
  birth_date: string;
  switchModal: () => void;
}

const AssignModal = ({
  fourth_class,
  name,
  gender,
  birth_date,
  switchModal,
}: Props) => {
  const [teamData, setTeamData] = useState<TeamDataType[]>();

  useEffect(() => {
    fetch(`${BASE_URL}/members/teams`)
      .then(res => res.json())
      .then(data => setTeamData(data.data));
  }, []);

  const handleAssignBtn = (id: number, team_name: string) => {
    if (!fourth_class) {
      alert('아직 4주차 교육을 마무리 하지 못했네요!');
      return;
    }

    if (window.confirm(`${team_name}으로 배정하시겠습니까?`)) {
      const birth_year = Number(birth_date.substring(0, 4));

      fetch(`${BASE_URL}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          team_id: id,
          name,
          gender,
          birth_year,
          position: 3,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    }
  };

  return (
    <div className={css.modalBackground}>
      <div className={css.assignModal}>
        {teamData &&
          teamData.map(team => (
            <>
              <div
                className={css.teamBtn}
                onClick={() => handleAssignBtn(team.team_id, team.team_name)}
              >
                {team.team_name}
              </div>
            </>
          ))}
        <div className={css.exitBtn} onClick={switchModal}>
          X
        </div>
      </div>
    </div>
  );
};

export default AssignModal;
