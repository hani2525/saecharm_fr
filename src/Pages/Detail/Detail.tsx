import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import GNB from 'Components/GNB';
import { useSwitchModal } from 'Components/Modal/Modal.hook';
import { cn } from 'utils';
import { getNewbieDetailData } from 'APIs/Detail';
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

  const { data: newbieDetailData } = useQuery<NewbieDataType>(
    ['newbieDetailData'],
    () => getNewbieDetailData(newbieId),
  );

  const goToEdit = () => {
    navigate('/edit', {
      state: {
        data: newbieDetailData,
        id: newbieId,
      },
    });
  };

  return (
    <>
      <GNB />
      {newbieDetailData && (
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
                <InfoBox valueName="이름" value={newbieDetailData.name} />
                <InfoBox
                  valueName="연락처"
                  value={newbieDetailData.phone_number}
                />
                <InfoBox valueName="주소" value={newbieDetailData.address} />
              </div>
            </div>
            <div className={css.dateInfo}>
              <InfoBox
                valueName="등록일"
                value={newbieDetailData.first_visit.substr(0, 10)}
              />
              <InfoBox
                valueName="생년월일"
                value={newbieDetailData.birth_date.substr(0, 10)}
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
                      checked={newbieDetailData.is_baptized}
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
                      checked={!newbieDetailData.is_baptized}
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
                      checked={newbieDetailData.gender === 'male'}
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
                      checked={newbieDetailData.gender === 'female'}
                      disabled
                    />
                  </label>
                </div>
              </fieldset>
            </div>
            <div className={css.additionalInfo}>
              <InfoBox valueName="인도" value={newbieDetailData.guide} />
              <InfoBox valueName="직업" value={newbieDetailData.job} />
              <InfoBox
                valueName="담당목자"
                value={newbieDetailData.responsibility}
              />
            </div>
            <div className={css.noteBox}>
              <InfoBox
                valueName="특이사항"
                value={newbieDetailData.description}
              />
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
              fourth_class={newbieDetailData.fourth_class}
              name={newbieDetailData.name}
              gender={newbieDetailData.gender}
              birth_date={newbieDetailData.birth_date}
              switchModal={switchModal}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
