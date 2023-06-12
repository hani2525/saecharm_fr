import GNB from "Components/GNB";
import React, { useEffect, useState } from "react";
import css from "./Edit.module.scss";
import { cn } from "utils";
import DatePick from "Components/DatePick";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  //TODO: Detail 컴포넌트랑 같이 관리
  const { state } = useLocation();
  const navigate = useNavigate();

  const [newbieInfo, setNewbieInfo] = useState<any>(state.data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewbieInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDate = (name: string, date: Date) => {
    setNewbieInfo((prev: any) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const admin_id = Number(e.target.value);
    setNewbieInfo((prev: any) => ({
      ...prev,
      admin_id: admin_id,
    }));
  };

  const handleEditBtn = () => {
    console.log(newbieInfo);
    newbieInfo.id = state.id;
    newbieInfo.phone_number = newbieInfo.phoneNumber;
    fetch(`http://localhost:3306/newbies/additional-info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbieInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <GNB />
      {newbieInfo && (
        <div className={css.container}>
          <span className={css.title}>✏️ 새가족 등록</span>
          <div className={css.addBox}>
            <div className={css.personalInfo}>
              <img src="/new_charm_logo.png" alt="logo" className={css.logo} />
              <div className={css.inputBox}>
                <label className={css.label}>
                  <span className={css.labelName}>이름</span>

                  <input
                    type="text"
                    name="name"
                    className={cn(css.name, css.input)}
                    value={newbieInfo.name}
                    onChange={handleChange}
                  />
                </label>
                <label className={css.label}>
                  <span className={css.labelName}>주소</span>
                  <input
                    type="text"
                    name="address"
                    className={cn(css.address, css.input)}
                    value={newbieInfo.address}
                    onChange={handleChange}
                  />
                </label>
                <label className={css.label}>
                  <span className={css.labelName}>연락처</span>

                  <input
                    type="text"
                    name="phoneNumber"
                    className={cn(css.phoneNumber, css.input)}
                    value={newbieInfo.phoneNumber}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className={css.dateInfo}>
              <label className={cn(css.label, css.dateLabel)}>
                <span className={css.labelName}>등록일</span>
                <DatePick
                  onHandleDate={handleDate}
                  name={"first_visit"}
                  selectedDate={newbieInfo.firstVisit}
                />
              </label>
              <label className={cn(css.label, css.dateLabel)}>
                <span className={css.labelName}>생년월일</span>
                <DatePick
                  onHandleDate={handleDate}
                  name={"birth_date"}
                  selectedDate={newbieInfo.birthDate}
                />
              </label>
              <fieldset className={css.radioInfo}>
                <span>세례 유무</span>
                <div className={css.radioBox}>
                  <label>
                    <span className={css.labelName}>받음</span>
                    <input
                      type="radio"
                      name="isBaptized"
                      id="baptism"
                      value={1}
                      checked={newbieInfo.isBaptized}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <span className={css.labelName}>안받음</span>
                    <input
                      type="radio"
                      name="isBaptized"
                      id="baptism"
                      value={0}
                      checked={!newbieInfo.isBaptized}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </fieldset>
            </div>
            <div className={css.additionalInfo}>
              <label className={css.label}>
                인도
                <input
                  type="text"
                  name="guide"
                  className={cn(css.guide, css.input)}
                  value={newbieInfo.guide}
                  onChange={handleChange}
                />
              </label>
              <label className={css.label}>
                직업
                <input
                  type="text"
                  name="job"
                  className={cn(css.job, css.input)}
                  value={newbieInfo.job}
                  onChange={handleChange}
                />
              </label>
              <label className={cn(css.label, css.selectLabel)}>
                담당 목자
                <select
                  name="responsibility"
                  id="responsibility"
                  className={css.select}
                  defaultValue={newbieInfo.responsibility}
                  onChange={handleSelect}
                >
                  <option value="">담당 목자를 선택해주세요</option>
                  <option value={6}>지원석</option>
                  <option value={5}>전하은</option>
                  <option value={7}>임선우</option>
                  <option value={8}>황종우</option>
                </select>
              </label>
            </div>
            <div className={css.noteBox}>
              <label className={css.label}>
                특이사항
                <input
                  type="text"
                  name="description"
                  className={cn(css.note, css.input)}
                  value={newbieInfo.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={css.buttonBox}>
              <div
                className={cn(css.saveButton, css.button)}
                onClick={handleEditBtn}
              >
                수정
              </div>
              <div
                className={cn(css.cancelButton, css.button)}
                onClick={() => navigate(`/detail/${state.id}`)}
              >
                취소
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
