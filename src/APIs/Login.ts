import BASE_URL from 'config';
import { UserInfoType } from 'Pages/Login/type';

const checkUserAccount = async (userInfo: UserInfoType) => {
  const result = await fetch(`${BASE_URL}/admin/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(res => {
      if (res.message === 'LOGIN_SUCCESS') {
        localStorage.setItem('access_token', res.accessToken);
        localStorage.setItem('name', res.name);
        localStorage.setItem('id', res.id);
        return true;
      } else {
        alert('아이디 또는 비밀번호를 확인해주세요.');
        return false;
      }
    });

  return result;
};

export { checkUserAccount };
