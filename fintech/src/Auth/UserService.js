import Cookies from 'js-cookie';

const userCookie = 'userCookie';

export const loginUser = (userInfo) => {
  // console.log("cookie created: ",userInfo)
  Cookies.set(userCookie, userInfo, { expires: 7 });
  // let r = Cookies.get('userCookie');
  // console.log("i got rrrr", r);
};

export const logoutUser = () => {
  Cookies.remove(userCookie);
};

export const getUserInfo = () => {
  return Cookies.getJSON(userCookie);
};
