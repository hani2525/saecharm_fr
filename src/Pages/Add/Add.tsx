import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GNB from 'Components/GNB';
import BASE_URL from 'config';
import Button from './Button';
import DateInput from './DateInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import InfoInput from './TextInput';
import { NewbieDataType } from './type';
import css from './Add.module.scss';

const Add = () => {
  const { state } = useLocation();
  const isEditPage = state ? true : false;
  const navigate = useNavigate();
  const [newbieData, setnewbieData] = useState<NewbieDataType>(
    isEditPage ? state.data : null,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setnewbieData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDate = (name: string, date: Date) => {
    setnewbieData(prev => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const admin_id = Number(e.target.value);
    setnewbieData(prev => ({
      ...prev,
      admin_id: admin_id,
    }));
  };

  const handleEditBtn = () => {
    newbieData.id = state.id;
    fetch(`${BASE_URL}/newbies/additional-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newbieData),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const handleAddBtn = () => {
    if (
      !newbieData.name ||
      !newbieData.first_visit ||
      !newbieData.birth_date ||
      !newbieData.phone_number ||
      !newbieData.gender ||
      !newbieData.responsibility
    ) {
      alert('필수 사항을 꼭 기입해주세요.');
      return;
    }

    fetch(`${BASE_URL}/newbies/detail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newbieData),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATE_NEWBIE_SUCCESS') {
          alert('성공적으로 새가족 등록 완성!');
          navigate('/list/main');
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
            <img
              src="/sae_charm_logo.png"
              alt="defaultImg"
              className={css.defaultImg}
            />
            <div className={css.inputBox}>
              <InfoInput
                labelName="* 이름"
                name="name"
                onChange={handleChange}
              />
              <InfoInput
                labelName="* 연락처"
                name="phone_number"
                onChange={handleChange}
              />
              <InfoInput
                labelName="주소"
                name="address"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={css.dateInfo}>
            <DateInput
              labelName="등록일"
              name="first_visit"
              onHandleDate={handleDate}
            />
            <DateInput
              labelName="생년월일"
              name="birth_date"
              onHandleDate={handleDate}
            />
            <fieldset className={css.radioInfo}>
              <span>세례 유무</span>
              <div className={css.radioBox}>
                <RadioInput
                  labelName="받음"
                  name="is_baptized"
                  id="baptism"
                  value={1}
                  onChange={handleChange}
                />
                <RadioInput
                  labelName="안받음"
                  name="is_baptized"
                  id="baptism"
                  value={0}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
            <fieldset className={css.radioInfo}>
              <span>* 성별</span>
              <div className={css.radioBox}>
                <RadioInput
                  labelName="남성"
                  name="gender"
                  id="gender"
                  value="male"
                  onChange={handleChange}
                />
                <RadioInput
                  labelName="여성"
                  name="gender"
                  id="gender"
                  value="female"
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
          <div className={css.additionalInfo}>
            <InfoInput labelName="인도" name="guide" onChange={handleChange} />
            <InfoInput labelName="직업" name="job" onChange={handleChange} />
            <SelectInput onChange={handleSelect} />
          </div>
          <div className={css.noteBox}>
            <InfoInput
              labelName="특이사항"
              name="description"
              onChange={handleChange}
            />
          </div>
          <Button
            isEditPage={isEditPage}
            id={isEditPage ? state.id : null}
            onClick={isEditPage ? handleEditBtn : handleAddBtn}
          />
        </div>
      </div>
    </>
  );
};

export default Add;
