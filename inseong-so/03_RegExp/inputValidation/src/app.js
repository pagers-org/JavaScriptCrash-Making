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
    'kr-name': /^[가-힣]+$/,
    'en-name': /^[a-zA-Z]+$/,
    age: /^[0-9]+$/,
    email: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/,
    phone: /(\d{3}).*(\d{3}).*(\d{4})/,
    // 880101, 18880101, 1888-01-01, 88-01-01
    birthday: /^(\d{2,4})[-]*(0[0-9]|1[0-2])[-]*(0[1-9]|[1-2][0-9]|3[0-1])$/gi,
    'resident-registration-number':
      // 적어도 소문자 하나, 대문자 하나, 숫자 하나가 포함되어 있는 8글자 이상 15글자 이하 문자열 검증하기
      /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/,
    site: /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/,
  };
  return regexp[type].test(value);
};
