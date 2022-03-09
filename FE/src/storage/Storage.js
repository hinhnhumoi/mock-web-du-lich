const setRememberMe = (isRememberMe) => {
  localStorage.setItem("isRememberMe", isRememberMe);
};

const isRememberMe = () => {
  if (
    localStorage.getItem("isRememberMe") === null ||
    localStorage.getItem("isRememberMe") === undefined
  ) {
    return true;
  }
  //Convert string to boolean
  return JSON.parse(localStorage.getItem("isRememberMe"));
};

const setItem = (key, value) => {
  if (isRememberMe()) {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

const getItem = (key) => {
  if (isRememberMe()) {
    return localStorage.getItem(key);
  } else {
    return sessionStorage.getItem(key);
  }
};

const setToken = (token) => {
  setItem("token", token);
};

const getToken = () => {
  return getItem("token");
};

const setUserInfo = (userInfo) => {
  const { ten, chucVu, id, token, email, status } = userInfo;
  setItem("ten", ten);
  setItem("chucVu", chucVu);
  setItem("id", id);
  setItem("email", email);
  setItem("status", status);
};

const getUserInfo = () => {
  return {
    ten: getItem("ten"),
    chucVu: getItem("chucVu"),
    id: getItem("id"),
    status: getItem("status"),
    token: getToken,
  };
};

// export
const storage = {
  setToken,
  getToken,
  setItem,
  getItem,
  setUserInfo,
  getUserInfo,
  setRememberMe,
  isRememberMe,
};
export default storage;
