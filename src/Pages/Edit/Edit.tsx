import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePick from 'Components/DatePick';
import GNB from 'Components/GNB';
import BASE_URL from 'config';
import { cn } from 'utils';
import css from './Edit.module.scss';

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
    newbieInfo.id = state.id;
    fetch(`${BASE_URL}/newbies/additional-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newbieInfo),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <>
      <GNB />
      {newbieInfo && (
        <div className={css.container}>
          <span className={css.title}>✏️ 새가족 등록</span>
          <div className={css.addBox}>
            <div className={css.personalInfo}>
              <img
                src="/new_charm_logo.png"
                alt="defaultImg"
                className={css.defaultImg}
              />
              <div className={css.inputBox}>
                <label className={css.label}>
                  <span className={css.labelName}>* 이름</span>

                  <input
                    type="text"
                    name="name"
                    className={cn(css.name, css.input)}
                    defaultValue={newbieInfo.name}
                    onChange={handleChange}
                  />
                </label>
                <label className={css.label}>
                  <span className={css.labelName}>* 연락처</span>
                  <input
                    type="text"
                    name="phoneNumber"
                    className={cn(css.phoneNumber, css.input)}
                    defaultValue={newbieInfo.phone_number}
                    onChange={handleChange}
                  />
                </label>
                <label className={css.label}>
                  <span className={css.labelName}>주소</span>
                  <input
                    type="text"
                    name="address"
                    className={cn(css.address, css.input)}
                    defaultValue={newbieInfo.address}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className={css.dateInfo}>
              <label className={cn(css.label, css.dateLabel)}>
                <span className={css.labelName}>* 등록일</span>
                <DatePick
                  onHandleDate={handleDate}
                  name={'first_visit'}
                  selectedDate={newbieInfo.firstVisit}
                />
              </label>
              <label className={cn(css.label, css.dateLabel)}>
                <span className={css.labelName}>* 생년월일</span>
                <DatePick
                  onHandleDate={handleDate}
                  name={'birth_date'}
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
                      defaultChecked={newbieInfo.is_baptized}
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
                      defaultChecked={!newbieInfo.is_baptized}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className={css.radioInfo}>
                <span>* 성별</span>
                <div className={css.radioBox}>
                  <label>
                    <span className={css.labelName}>남성</span>
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value="male"
                      defaultChecked={newbieInfo.gender === 'male'}
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
                      defaultChecked={newbieInfo.gender === 'female'}
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
                  defaultValue={newbieInfo.guide}
                  onChange={handleChange}
                />
              </label>
              <label className={css.label}>
                직업
                <input
                  type="text"
                  name="job"
                  className={cn(css.job, css.input)}
                  defaultValue={newbieInfo.job}
                  onChange={handleChange}
                />
              </label>
              <label className={cn(css.label, css.selectLabel)}>
                * 담당 목자
                <select
                  name="admin_id"
                  id="admin_id"
                  className={css.select}
                  defaultValue={newbieInfo.admin_id}
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
                  defaultValue={newbieInfo.description}
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
