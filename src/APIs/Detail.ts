import BASE_URL from 'config';

const getNewbieDetailData = async (newbieId: number) => {
  const data = await fetch(`${BASE_URL}/newbies/detail/${newbieId}}`).then(
    res => res.json(),
  );
  return data.data[0];
};

export { getNewbieDetailData };
