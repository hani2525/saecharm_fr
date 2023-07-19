import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GNB from 'Components/GNB';
import { useSwitchModal } from 'Components/Modal/Modal.hook';
import BASE_URL from 'config';
import { cn } from 'utils';
import AssignModal from './AssignModal';
import AttendanceTable from './AttendanceTable';
import InfoBox from './InfoBox';
import MemoBox from './MemoBox';
import { NewbieDataType } from './type';
import css from './Detail.module.scss';

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const newbieId = Number(params.id);
  const { isOpenModal, switchModal } = useSwitchModal();
  const [newbieData, setNewbieData] = useState<NewbieDataType>();

  useEffect(() => {
    fetch(`${BASE_URL}/newbies/detail/${newbieId}`)
      .then(res => res.json())
      .then(data => setNewbieData(data.data[0]));
  }, []);

  const goToEdit = () => {
    navigate('/edit', {
      state: {
        data: newbieData,
        id: newbieId,
      },
    });
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
                src="/sae_charm_logo.png"
                alt="defaultImg"
                className={css.defaultImg}
              />
              <div className={css.personalInfo}>
                <InfoBox valueName="이름" value={newbieData.name} />
                <InfoBox valueName="연락처" value={newbieData.phone_number} />
                <InfoBox valueName="주소" value={newbieData.address} />
              </div>
            </div>
            <div className={css.dateInfo}>
              <InfoBox
                valueName="등록일"
                value={newbieData.first_visit.substr(0, 10)}
              />
              <InfoBox
                valueName="생년월일"
                value={newbieData.birth_date.substr(0, 10)}
              />
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
              <InfoBox valueName="인도" value={newbieData.guide} />
              <InfoBox valueName="직업" value={newbieData.job} />
              <InfoBox valueName="담당목자" value={newbieData.responsibility} />
            </div>
            <div className={css.noteBox}>
              <InfoBox valueName="특이사항" value={newbieData.description} />
            </div>
            <AttendanceTable newbieId={newbieId} />
            <MemoBox newbieId={newbieId} />
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
            <AssignModal
              fourth_class={newbieData.fourth_class}
              name={newbieData.name}
              gender={newbieData.gender}
              birth_date={newbieData.birth_date}
              switchModal={switchModal}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
