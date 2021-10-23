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

export const checkValidation = (type, value) => {
  const regexp = {
    'kr-name': /^[가-힣]/,
    'en-name': /^[A-Za-z]/,
    age: /^\d+$/,
    email:
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}/,
    phone: /^\d{3}-\d{3,4}-\d{4}$/,
    birthday: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    'resident-registration-Number':
      /(\d{6}[ ,-]-?[1-4]\d{6})|(\d{6}[ ,-]?[1-4])/,
    site: /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi,
  };
  return regexp.type.test(value);
};
