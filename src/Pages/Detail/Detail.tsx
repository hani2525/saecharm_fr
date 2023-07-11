import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwitchModal } from 'utils/hooks/Modal.hook';
import GNB from 'Components/GNB';
import BASE_URL from 'config';
import { cn } from 'utils';
import AttendanceTable from './AttendanceTable';
import css from './Detail.module.scss';

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const newbieId = Number(params.id);
  const memoInput = useRef<HTMLInputElement>(null);
  const { isOpenModal, switchModal } = useSwitchModal();

  //TODO: any 하지말고 타입 지정하기
  const [newbieData, setNewbieData] = useState<any>();
  const [memoData, setMemoData] = useState<any[]>();
  const [teamData, setTeamData] = useState<any[]>();

  console.log(newbieData);
  useEffect(() => {
    fetch(`${BASE_URL}/newbies/detail/${newbieId}`)
      .then(res => res.json())
      .then(data => setNewbieData(data.data[0]));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/memos/${newbieId}`)
      .then(res => res.json())
      .then(data => setMemoData(data.data));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/members/teams`)
      .then(res => res.json())
      .then(data => setTeamData(data.data));
  }, []);

  //TODO: 날짜 정제
  const goToEdit = () => {
    navigate('/edit', {
      state: {
        data: newbieData,
        id: newbieId,
      },
    });
  };

  const handleClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleMemoBtn();
    }
  };

  const handleMemoBtn = () => {
    const memoValue = memoInput.current!.value;

    fetch(`${BASE_URL}/memos/new-memo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        writer_id: localStorage.getItem('id'),
        target_id: newbieId,
        content: memoValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATE_MEMO_SUCCESS') {
          memoInput.current!.value = '';
          //TODO: react query로 관리
          setMemoData([]);
        }
      });
  };

  const handleAssignBtn = (id: number, team_name: string) => {
    //modal
    if (!newbieData.fourth_class) {
      alert('아직 4주차 교육을 마무리 하지 못했네요!');
      return;
    }

    if (window.confirm(`${team_name}으로 배정하시겠습니까?`)) {
      const name = newbieData.name;
      const gender = newbieData.gender;
      const birth_year = Number(newbieData.birth_date.substring(0, 4));

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
    <>
      <GNB />
      {newbieData && (
        <div className={css.container}>
          <span className={css.title}>🐏 새가족 정보</span>
          <div className={css.detailInfo}>
            <div className={css.mainInfo}>
              <img
                src="/new_charm_logo.png"
                alt="defaultImg"
                className={css.defaultImg}
              />
              <div className={css.personalInfo}>
                <div className={css.infoBox}>
                  <span className={css.valueName}>이름</span>
                  <div className={cn(css.name, css.value)}>
                    {newbieData.name}
                  </div>
                </div>
                <div className={css.infoBox}>
                  <span className={css.valueName}>연락처</span>
                  <div className={cn(css.phoneNumber, css.value)}>
                    {newbieData.phone_number}
                  </div>
                </div>
                <div className={css.infoBox}>
                  <span className={css.valueName}>주소</span>
                  <div className={cn(css.address, css.value)}>
                    {newbieData.address}
                  </div>
                </div>
              </div>
            </div>
            <div className={css.dateInfo}>
              <div className={css.infoBox}>
                <span className={css.valueName}>등록일</span>
                <div className={cn(css.firstDate, css.value)}>
                  {newbieData.first_visit.substr(0, 10)}
                </div>
              </div>
              <div className={css.infoBox}>
                <span className={css.valueName}>생년월일</span>
                <div className={cn(css.birthDate, css.value)}>
                  {newbieData.first_visit.substr(0, 10)}
                </div>
              </div>
              <fieldset className={css.radioInfo}>
                <span className={css.radioName}>세례 유무</span>
                <div className={css.radioBox}>
                  <label>
                    <span className={css.labelName}>받음</span>
                    <input
                      type="radio"
                      name="baptism"
                      id="baptism"
                      value="true"
                      checked={newbieData.is_baptized}
                      disabled
                    />
                  </label>
                  <label>
                    <span className={css.labelName}>안받음</span>
                    <input
                      type="radio"
                      name="baptism"
                      id="baptism"
                      value="false"
                      checked={!newbieData.is_baptized}
                      disabled
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className={css.radioInfo}>
                <span className={css.radioName}>성별</span>
                <div className={css.radioBox}>
                  <label>
                    <span className={css.labelName}>남성</span>
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value="true"
                      checked={newbieData.gender === 'male'}
                      disabled
                    />
                  </label>
                  <label>
                    <span className={css.labelName}>여성</span>
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value="false"
                      checked={newbieData.gender === 'female'}
                      disabled
                    />
                  </label>
                </div>
              </fieldset>
            </div>
            <div className={css.additionalInfo}>
              <div className={css.infoBox}>
                <span className={css.valueName}>인도</span>
                <div className={cn(css.guide, css.value)}>
                  {newbieData.guide}
                </div>
              </div>
              <div className={css.infoBox}>
                <span className={css.valueName}>직업</span>
                <div className={cn(css.job, css.value)}>{newbieData.job}</div>
              </div>
              <div className={css.infoBox}>
                <div className={css.valueName}>담당목자</div>
                <div className={cn(css.responsibility, css.value)}>
                  {newbieData.responsibility}
                </div>
              </div>
            </div>
            <div className={css.noteBox}>
              <span className={css.valueName}>특이사항</span>
              <div className={cn(css.note, css.value)}>
                {newbieData.description}
              </div>
            </div>
            <AttendanceTable newbieId={newbieId} />
            <div className={css.memoBox}>
              <span className={css.valueName}>메모</span>
              <div className={css.memoBoard}>
                {memoData &&
                  memoData.map(memo => {
                    return (
                      <div className={css.memoCard} key={memo.content}>
                        <div className={css.writerInfo}>
                          <span className={css.writer}>
                            {memo.responsibility}
                          </span>
                          <span className={css.timestamp}>
                            {memo.timeStamp.substr(0, 10)}
                          </span>
                        </div>
                        <span className={css.content}>{memo.content}</span>
                      </div>
                    );
                  })}
                {/* TODO: component로 쪼개기 */}
              </div>
              <div className={css.memoInput}>
                <input
                  type="text"
                  className={css.input}
                  ref={memoInput}
                  placeholder="새가족 관련 정보를 적어주시면 메모로 저장됩니다."
                  onKeyDown={e => handleClick(e)}
                />
                <div className={css.saveBtn} onClick={handleMemoBtn}>
                  등록
                </div>
              </div>
            </div>
            <div className={css.btnWrapper}>
              <div className={cn(css.editBtn, css.btn)} onClick={goToEdit}>
                수정
              </div>
              <div className={cn(css.assignBtn, css.btn)} onClick={switchModal}>
                목장 배정
              </div>
            </div>
          </div>
          {isOpenModal && (
            <div className={css.modalBackground}>
              <div className={css.assignModal}>
                {teamData &&
                  teamData.map((team: any) => (
                    <>
                      <div
                        className={css.teamBtn}
                        onClick={() =>
                          handleAssignBtn(team.team_id, team.team_name)
                        }
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
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
