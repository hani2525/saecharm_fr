import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { assignTeam, getTeamsData } from 'APIs/Team';
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
  const { data } = useQuery(['teamsData'], getTeamsData);

  const assignMutation = useMutation(assignTeam, {
    onError: () => {
      alert('다시 시도해주세요.');
      return;
    },
    onSuccess: () => {
      alert('성공적으로 배정되었습니다.');
    },
  });

  const handleAssignBtn = (id: number, team_name: string) => {
    if (!fourth_class) {
      alert('아직 4주차 교육을 마무리 하지 못했네요!');
      return;
    }

    if (window.confirm(`${team_name}으로 배정하시겠습니까?`)) {
      const birth_year = Number(birth_date.substring(0, 4));

      assignMutation.mutate({
        team_id: id,
        name,
        gender,
        birth_year,
        position: 3,
      });
    }
  };

  return (
    <div className={css.modalBackground}>
      <div className={css.assignModal}>
        {data &&
          data.map((team: TeamDataType) => (
            <>
              <div
                className={css.teamBtn}
                onClick={() => handleAssignBtn(team.team_id, team.team_name)}
              >
                {team.team_name} | {team.name}
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
