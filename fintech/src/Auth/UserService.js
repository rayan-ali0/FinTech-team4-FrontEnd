import Cookies from 'js-cookie';

const userCookie = 'user';

export const loginUser = (userInfo) => {
  Cookies.set(userCookie, userInfo, { expires: 7 });
};

export const logoutUser = () => {
  Cookies.remove(userCookie);
};

export const getUserInfo = () => {
  return Cookies.getJSON(userCookie);
};
