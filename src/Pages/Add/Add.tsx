import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import GNB from 'Components/GNB';
import { addNewbie } from 'APIs/Add';
import { editNewbie } from 'APIs/Edit';
import Button from './Button';
import DateInput from './DateInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
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

  const addMutation = useMutation(addNewbie, {
    onError: () => {
      alert('다시 시도해주세요.');
      return;
    },
    onSuccess: () => {
      alert('성공적으로 등록되었습니다.');
      navigate('/list/main');
    },
  });

  const editMutaion = useMutation(editNewbie, {
    onError: () => {
      alert('다시 시도해주세요.');
      return;
    },
    onSuccess: () => {
      alert('성공적으로 변경되었습니다.');
      navigate('/list/main');
    },
  });

  const handleEditBtn = () => {
    newbieData.id = state.id;
    editMutaion.mutate(newbieData);
  };

  const handleAddBtn = () => {
    if (
      !newbieData.name ||
      !newbieData.first_visit ||
      !newbieData.birth_date ||
      !newbieData.phone_number ||
      !newbieData.gender ||
      !newbieData.admin_id
    ) {
      alert('필수 사항을 꼭 기입해주세요.');
      return;
    }
    newbieData.is_guest = Number(localStorage.getItem('id')) === 11;
    addMutation.mutate(newbieData);
  };

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
              <TextInput
                labelName="* 이름"
                name="name"
                onChange={handleChange}
                value={isEditPage ? newbieData.name : ''}
              />
              <TextInput
                labelName="* 연락처"
                name="phone_number"
                onChange={handleChange}
                value={isEditPage ? newbieData.phone_number : ''}
              />
              <TextInput
                labelName="주소"
                name="address"
                onChange={handleChange}
                value={isEditPage ? newbieData.address : ''}
              />
            </div>
          </div>
          <div className={css.dateInfo}>
            <DateInput
              labelName="등록일"
              name="first_visit"
              onHandleDate={handleDate}
              selectedDate={isEditPage ? newbieData.first_visit : ''}
            />
            <DateInput
              labelName="생년월일"
              name="birth_date"
              onHandleDate={handleDate}
              selectedDate={isEditPage ? newbieData.first_visit : ''}
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
                  checkedValue={isEditPage && newbieData.is_baptized}
                />
                <RadioInput
                  labelName="안받음"
                  name="is_baptized"
                  id="baptism"
                  value={0}
                  onChange={handleChange}
                  checkedValue={isEditPage && newbieData.is_baptized}
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
                  checkedValue={isEditPage && newbieData.gender}
                />
                <RadioInput
                  labelName="여성"
                  name="gender"
                  id="gender"
                  value="female"
                  onChange={handleChange}
                  checkedValue={isEditPage && newbieData.gender}
                />
              </div>
            </fieldset>
          </div>
          <div className={css.additionalInfo}>
            <TextInput
              labelName="인도"
              name="guide"
              onChange={handleChange}
              value={isEditPage ? newbieData.guide : ''}
            />
            <TextInput
              labelName="직업"
              name="job"
              onChange={handleChange}
              value={isEditPage ? newbieData.job : ''}
            />
            <SelectInput onChange={handleSelect} />
          </div>
          <div className={css.noteBox}>
            <TextInput
              labelName="특이사항"
              name="description"
              onChange={handleChange}
              value={isEditPage ? newbieData.description : ''}
            />
          </div>
          <Button
            id={isEditPage ? state.id : null}
            isEditPage={isEditPage}
            onClick={isEditPage ? handleEditBtn : handleAddBtn}
          />
        </div>
      </div>
    </>
  );
};

export default Add;
