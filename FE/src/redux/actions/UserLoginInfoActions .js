import * as types from "../constants";

export function setUserLoginInfo(ten,chucVu,id,status,token) {
  return {
    type: types.USER_LOGIN_INFO,
    payload: {
      "ten" : ten,
      "chucVu": chucVu,
      "id": id,
      "token": token,
      "status":status
    }
  };
}

export function setTokenInfo(token) {
  return {
    type: types.TOKEN_INFO,
    payload: token
  };
}
