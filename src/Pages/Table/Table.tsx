import React from 'react';
import { useQuery } from '@tanstack/react-query';
import GNB from 'Components/GNB';
import { getMembersByVillage } from 'APIs/Team';
import { TableDataType } from './type';
import Village from './Village';
import css from './Table.module.scss';

const Table = () => {
  const { data: villageData } = useQuery<TableDataType[]>(
    ['villageData'],
    getMembersByVillage,
  );

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>💒 목장 편성표</div>
        <div className={css.boardWrapper}>
          {villageData &&
            villageData.map(village => (
              <Village
                key={village.village_id}
                villageNumber={village.village_id}
                villageData={village.village_data}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Table;
