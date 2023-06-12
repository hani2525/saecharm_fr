import GNB from "Components/GNB";
import React, { useState } from "react";
import css from "./Add.module.scss";
import { cn } from "utils";
import DatePick from "Components/DatePick";
import { useNavigate } from "react-router-dom";
import BASE_URL from "config";

const Add = () => {
  const navigate = useNavigate();

  //TODO: 추후에 Type 만들어서 관리
  const [newbieInfo, setNewbieInfo] = useState({
    admin_id: 1,
    profile_image: "",
    name: "",
    first_visit: "",
    birth_date: "",
    is_baptized: false,
    address: "",
    phone_number: "",
    guide: "",
    job: "",
    description: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewbieInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDate = (name: string, date: Date) => {
    setNewbieInfo((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const admin_id = Number(e.target.value);
    setNewbieInfo((prev) => ({
      ...prev,
      admin_id: admin_id,
    }));
  };

  const handleAddBtn = () => {
    //TODO: 내용 중에 빈칸이 있으면 알림 뜨기
    fetch(`${BASE_URL}/newbies/detail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbieInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "CREATE_NEWBIE_SUCCESS") {
          alert("성공적으로 새가족 등록 완성!");
          navigate("/list/main");
        }
      });
  };

  //TODO: 추후에 input type도 관리하기 (컴포넌트로 관리해서 한 번에 알아보기)
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
                <input
                  type="text"
                  className={cn(css.name, css.input)}
                  name="name"
                  onChange={handleChange}
                />
              </label>
              <label className={css.label}>
                <span className={css.labelName}>주소</span>
                <input
                  type="text"
                  className={cn(css.address, css.input)}
                  name="address"
                  onChange={handleChange}
                />
              </label>
              <label className={css.label}>
                <span className={css.labelName}>연락처</span>

                <input
                  type="text"
                  className={cn(css.phoneNumber, css.input)}
                  name="phone_number"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className={css.dateInfo}>
            <label className={cn(css.label, css.dateLabel)}>
              <span className={css.labelName}>등록일</span>
              <DatePick onHandleDate={handleDate} name={"first_visit"} />
            </label>
            <label className={cn(css.label, css.dateLabel)}>
              <span className={css.labelName}>생년월일</span>
              <DatePick onHandleDate={handleDate} name={"birth_date"} />
            </label>
            <fieldset className={css.radioInfo}>
              <span>세례 유무</span>
              <div className={css.radioBox}>
                <label>
                  <span className={css.labelName}>받음</span>
                  <input
                    type="radio"
                    name="is_baptized"
                    id="baptism"
                    value={1}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <span className={css.labelName}>안받음</span>
                  <input
                    type="radio"
                    name="is_baptized"
                    id="baptism"
                    value={0}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </fieldset>
            <fieldset className={css.radioInfo}>
              <span>성별</span>
              <div className={css.radioBox}>
                <label>
                  <span className={css.labelName}>남성</span>
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value="male"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <span className={css.labelName}>여성</span>
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value="female"
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
                className={cn(css.guide, css.input)}
                name="guide"
                onChange={handleChange}
              />
            </label>
            <label className={css.label}>
              직업
              <input
                type="text"
                className={cn(css.job, css.input)}
                name="job"
                onChange={handleChange}
              />
            </label>
            <label className={cn(css.label, css.selectLabel)}>
              담당 목자
              <select
                name="responsibility"
                id="responsibility"
                className={css.select}
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
                className={cn(css.note, css.input)}
                name="description"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={css.saveBtn} onClick={handleAddBtn}>
            등록
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
