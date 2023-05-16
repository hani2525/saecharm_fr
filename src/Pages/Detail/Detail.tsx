import GNB from "Components/GNB";
import React from "react";
import css from "./Detail.module.scss";
import { cn } from "utils";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/edit");
  };

  return (
    <>
      <GNB />
      <div className={css.container}>
        <span className={css.title}>🐏 새가족 정보</span>
        <div className={css.detailInfo}>
          <div className={css.mainInfo}>
            <img src="/new_charm_logo.png" alt="logo" className={css.logo} />
            <div className={css.personalInfo}>
              <div className={css.infoBox}>
                <span className={css.valueName}>이름</span>
                <div className={cn(css.name, css.value)}>김유진</div>
              </div>
              <div className={css.infoBox}>
                <span className={css.valueName}>주소</span>
                <div className={cn(css.address, css.value)}>
                  인천시 미추홀구 주안동 283-32
                </div>
              </div>
              <div className={css.infoBox}>
                <span className={css.valueName}>연락처</span>
                <div className={cn(css.phoneNumber, css.value)}>
                  010-1234-5679
                </div>
              </div>
            </div>
          </div>
          <div className={css.dateInfo}>
            <div className={css.infoBox}>
              <span className={css.valueName}>등록일</span>
              <div className={cn(css.firstDate, css.value)}>
                2023년 4월 30일
              </div>
            </div>
            <div className={css.infoBox}>
              <span className={css.valueName}>생년월일</span>
              <div className={cn(css.birthDate, css.value)}>
                1987년 4월 30일
              </div>
            </div>
            <fieldset className={css.radioInfo}>
              <span>세례 유무</span>
              <div className={css.radioBox}>
                <label>
                  <span className={css.labelName}>받음</span>
                  <input
                    type="radio"
                    name="baptism"
                    id="baptism"
                    value="true"
                    checked={true}
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
                    checked={false}
                    disabled
                  />
                </label>
              </div>
            </fieldset>
          </div>
          <div className={css.additionalInfo}>
            <div className={css.infoBox}>
              <span className={css.valueName}>인도</span>
              <div className={cn(css.guide, css.value)}>자진</div>
            </div>
            <div className={css.infoBox}>
              <span className={css.valueName}>직업</span>
              <div className={cn(css.job, css.value)}>반도체 개발 연구원</div>
            </div>
            <div className={css.infoBox}>
              <div className={css.valueName}>담당목자</div>
              <div className={cn(css.responsibility, css.value)}>지원석</div>
            </div>
          </div>
          <div className={css.noteBox}>
            <span className={css.valueName}>특이사항</span>
            <div className={cn(css.note, css.value)}>장기 결석자, 모태신앙</div>
          </div>
          <div className={css.memoBox}>
            <span className={css.valueName}>메모</span>
            <div className={css.memoBoard}>
              <div className={css.memoCard}>
                <div className={css.writerInfo}>
                  <span className={css.writer}>지원석</span>
                  <span className={css.timestamp}>2023.05.07</span>
                </div>
                <span className={css.content}>
                  주말마다 인천에 올라오시고 평일에는 이천에서 지내십니다.
                </span>
              </div>
              <div className={css.memoCard}>
                <div className={css.writerInfo}>
                  <span className={css.writer}>임채은</span>
                  <span className={css.timestamp}>2023.05.07</span>
                </div>
                <span className={css.content}>짝사랑하고 있습니다. </span>
              </div>
            </div>
            <div className={css.memoInput}>
              <input
                type="text"
                className={css.input}
                placeholder="새가족 관련 정보를 적어주시면 메모로 저장됩니다."
              />
              <div className={css.saveBtn}>등록</div>
            </div>
          </div>
          <div className={css.editBtn} onClick={goToEdit}>
            수정
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
