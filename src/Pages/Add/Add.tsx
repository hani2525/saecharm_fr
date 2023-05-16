import GNB from "Components/GNB";
import React from "react";
import css from "./Add.module.scss";
import { cn } from "utils";
import DatePick from "Components/DatePick";

const Add = () => {
  return (
    <>
      <GNB />
      <div className={css.container}>
        <span className={css.title}>✏️ 새가족 등록</span>
        <div className={css.addBox}>
          <div className={css.personalInfo}>
            <img src="/new_charm_logo.png" alt="logo" className={css.logo} />
            <div className={css.inputBox}>
              <label className={css.label}>
                <span className={css.labelName}>이름</span>

                <input type="text" className={cn(css.name, css.input)} />
              </label>
              <label className={css.label}>
                <span className={css.labelName}>주소</span>
                <input type="text" className={cn(css.address, css.input)} />
              </label>
              <label className={css.label}>
                <span className={css.labelName}>연락처</span>

                <input type="text" className={cn(css.phoneNumber, css.input)} />
              </label>
            </div>
          </div>
          <div className={css.dateInfo}>
            <label className={cn(css.label, css.dateLabel)}>
              <span className={css.labelName}>등록일</span>
              <DatePick />
            </label>
            <label className={cn(css.label, css.dateLabel)}>
              <span className={css.labelName}>생년월일</span>
              <DatePick />
            </label>
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
                  />
                </label>
                <label>
                  <span className={css.labelName}>안받음</span>
                  <input
                    type="radio"
                    name="baptism"
                    id="baptism"
                    value="false"
                  />
                </label>
              </div>
            </fieldset>
          </div>
          <div className={css.additionalInfo}>
            <label className={css.label}>
              인도
              <input type="text" className={cn(css.guide, css.input)} />
            </label>
            <label className={css.label}>
              직업
              <input type="text" className={cn(css.job, css.input)} />
            </label>
            <label className={cn(css.label, css.selectLabel)}>
              담당 목자
              <select
                name="responsibility"
                id="responsibility"
                className={css.select}
              >
                <option value="">담당 목자를 선택해주세요</option>
                <option value="지원석">지원석</option>
                <option value="전하은">전하은</option>
                <option value="임선우">임선우</option>
                <option value="황종우">황종우</option>
              </select>
            </label>
          </div>
          <div className={css.noteBox}>
            <label className={css.label}>
              특이사항
              <input type="text" className={cn(css.note, css.input)} />
            </label>
          </div>
          <div className={css.saveBtn}>등록</div>
        </div>
      </div>
    </>
  );
};

export default Add;
