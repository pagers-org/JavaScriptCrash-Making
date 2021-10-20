/*
 * 타입 정의
            "kr-name"
            "en-name"
            "age"
            "email"
            "password"
            "phone"
            "birthday"
            "resident-registration-number"
            "site"
*/
function checkKR(value) {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  return regExp.test(value);
}

function checkEN(value) {
  const regExp = /[a-zA-Z]/g;
  return regExp.test(value);
}

function checkAge(value) {
  const regExp = /[0-9]/g;
  return regExp.test(value);
}

function checkEmail(value) {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
}

function checkPW(value) {
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  return regExp.test(value);
}

function checkPhone(value) {
  const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return regExp.test(value);
}

function checkBirth(value) {
  const regExp =
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return regExp.test(value);
}

function checkRegistrationNum(value) {
  const regExp =
    /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
  return regExp.test(value);
}

function checkURL(value) {
  const regExp = /https:\/\/github.com[:/](.*)/;
  return regExp.test(value);
}
const array = {
  'kr-name': checkKR,
  'en-name': checkEN,
  age: checkAge,
  email: checkEmail,
  password: checkPW,
  phone: checkPhone,
  birthday: checkBirth,
  'resident-registration-number': checkRegistrationNum,
  site: checkURL,
};

export const checkValidation = (type, value) => {
  console.log(type);
  console.log(array[type](value));
  return array[type](value);
};
