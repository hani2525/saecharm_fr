import React from 'react';
import { cn } from 'utils';
import { MemberDataType } from '../type';
import css from './Member.module.scss';

interface Props {
  memberData: MemberDataType;
}

const Member = ({ memberData }: Props) => {
  return (
    <span
      className={cn(
        memberData.position === 3 ? css.sheep : css.leader,
        css[memberData.gender],
        css.member,
      )}
    >
      {memberData.name} ({memberData.birth_year})
    </span>
  );
};

export default Member;
