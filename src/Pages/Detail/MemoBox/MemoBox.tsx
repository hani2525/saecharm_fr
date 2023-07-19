import React, { useEffect, useRef, useState } from 'react';
import BASE_URL from 'config';
import { MemoDataType } from './type';
import css from './MemoBox.module.scss';

interface Props {
  newbieId: number;
}

const MemoBox = ({ newbieId }: Props) => {
  const memoInput = useRef<HTMLInputElement>(null);
  const [memoData, setMemoData] = useState<MemoDataType[]>();

  useEffect(() => {
    fetch(`${BASE_URL}/memos/${newbieId}`)
      .then(res => res.json())
      .then(data => setMemoData(data.data));
  }, []);

  const handleMemoBtn = () => {
    const memoValue = memoInput.current?.value;
    fetch(`${BASE_URL}/memos/new-memo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        writer_id: localStorage.getItem('id'),
        target_id: newbieId,
        content: memoValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATE_MEMO_SUCCESS') {
          memoInput.current!.value = '';
        }
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
        {memoData &&
          memoData.map(memo => {
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
        {/* TODO: component로 쪼개기 */}
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
