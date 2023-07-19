import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from 'utils';
import css from './Button.module.scss';

interface Props {
  isEditPage: boolean;
  id?: number;
  onClick: () => void;
}

const Button = ({ isEditPage, onClick, id }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {isEditPage ? (
        <div className={css.buttonBox}>
          <div className={cn(css.saveButton, css.button)} onClick={onClick}>
            수정
          </div>
          <div
            className={cn(css.cancelButton, css.button)}
            onClick={() => navigate(`/detail/${id}`)}
          >
            취소
          </div>
        </div>
      ) : (
        <div className={css.saveBtn} onClick={onClick}>
          등록
        </div>
      )}
    </>
  );
};

export default Button;
