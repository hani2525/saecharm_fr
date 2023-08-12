import React, { useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createMemo, getMemosData } from 'APIs/Memo';
import { MemoDataType } from './type';
import css from './MemoBox.module.scss';

interface Props {
  newbieId: number;
}

const MemoBox = ({ newbieId }: Props) => {
  const memoInput = useRef<HTMLInputElement>(null);

  const { data, refetch } = useQuery(['memosData'], () =>
    getMemosData(newbieId),
  );

  const createMemoMutation = useMutation(createMemo, {
    onError: () => {
      alert('다시 시도해주세요.');
      return;
    },
    onSuccess: () => {
      memoInput.current!.value = '';
    },
    onSettled: () => {
      refetch();
    },
  });

  const handleMemoBtn = () => {
    const memoValue = memoInput.current?.value;

    createMemoMutation.mutate({
      writer_id: Number(localStorage.getItem('id')),
      target_id: newbieId,
      content: memoValue,
    });
  };

  const handleClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleMemoBtn();
    }
  };

  return (
    <div className={css.memoBox}>
      <span className={css.valueName}>메모</span>
      <div className={css.memoBoard}>
        {data &&
          data.map((memo: MemoDataType) => {
            return (
              <div className={css.memoCard} key={memo.content}>
                <div className={css.writerInfo}>
                  <span className={css.writer}>{memo.responsibility}</span>
                  <span className={css.timestamp}>
                    {memo.timeStamp.substr(0, 10)}
                  </span>
                </div>
                <span className={css.content}>{memo.content}</span>
              </div>
            );
          })}
      </div>
      <div className={css.memoInput}>
        <input
          type="text"
          className={css.input}
          ref={memoInput}
          placeholder="새가족 관련 정보를 적어주시면 메모로 저장됩니다."
          onKeyDown={e => handleClick(e)}
        />
        <div className={css.saveBtn} onClick={handleMemoBtn}>
          등록
        </div>
      </div>
    </div>
  );
};

export default MemoBox;
