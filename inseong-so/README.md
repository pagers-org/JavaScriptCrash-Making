
- 화살표 함수 사용하기 : function은 호이스팅이 필요할 때만
- var 키워드 사용하지 않기

| 구분        | constructor | prototype | super | arguments |
| ----------- | ----------- | --------- | ----- | --------- |
| 일반함수    | O           | O         | X     | O         |
| 메서드      | X           | X         | O     | O         |
| 화살표 함수 | X           | X         | X     | X         |

ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 HomeObject를 갖으므로 super 키워드를 사용할 수 있다.

- Array.of : 전달된 인수를 요소로 갖는 배열 생성, Array() 생성자 함수랑 다르게 **전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열 생성**
  ```js
  Array.of(1, 2, 3) // [1, 2, 3]
  ```

- Array.from : 유사 배열 객체/이터러블 객체를 인수로 전달받아 배열로 변환하여 반환
  - 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.
  - 콜백 함수의 반환값으로 구성된 배열 반환
  ```js
  Array.from({length:2, 0: 'a', 1:'b'}); // ['a','b']
  Array.from('hello'); // ['h','e','l','l','o']
  Array.from({length:2});  // [undefined, undefined]
  Array.from({length:2}, (item, index) => index); // [0, 1]
  ```

배열은 프로퍼티를 가질 수 있으며, 프로퍼티는 length에 영향을 주지 않는다.

배열에는 **원본 배열(배열 메서드를 호출한 배열인 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드**와 **원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드**가 있다.

- Array.isArray : 전달된 인수가 배열이면 true, 아니면 false

- Array.prototype
  > 원본 배열 변경

  - *.indexOf(item) : 존재하는지 확인(첫번째로 검색된 인덱스 반환, 없으면 -1)
    - 배열에 NaN이 포함되어 있는지 확인할 수 없다.
      ```js
      // true가 나와야 한다.
      [NaN].indexOf(NaN) !== -1; // false
      ```

  - *.includes(item, start) : 존재하는지 확인(booelan)
    - item 요소, start 검사를 시작할 위치(-1일 경우 역순으로. length + index 연산)
    - 배열에 NaN이 포함되어 있는지 확인할 수 없다.
      ```js
      [NaN].includes(NaN); // true
      ```

  - *.push(item) : **성능이 좋지 않음**, 마지막 요소로 추가하고 length 프로퍼티 값 반환
  - *.pop() : 마지막 요소를 제거하고 요소 반환
  - *.unshift(item) : 첫번째 요소로 추가하고 length 프로퍼티 값 반환
  - *.shift() : 첫번째 요소를 제거하고 요소 반환
  - *.splice(start, deleteCount, items) : 원본 배열을 직접 변경
    - start 시작위치, deleteCount 삭제할 개수, items 이를 대체할 요소 : start <= deleteCount
  - *.reverse() : 원본 배열의 순서를 반대로 뒤집는다.
  - *.fill(item, start, end) : 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
    - item 채울 요소, start 시작위치, end 종료할 인덱스

  > 원본 배열 변경 안됨
  - *.concat(item) : 원본 배열의 마지막 요소로 추가한 새로운 배열 반환, 인수로 전달한 값이 배열이라면 이를 해체하여 새로운 배열의 요소로 추가
    - *.concat 메서드는 스프레드 문법으로 대체 가능
  - *.slice(start, end) : 전달된 범위의 요소들을 복사하여 배열로 반환
    - start 시작위치, end 종료할 인덱스 : start <= end
  - *.join(separator) : 원본 배열의 모든 요소를 문자열로 반환하고 이를 구분자로 연결한다. 기본 구분자는 콤마(`,`)이다.
  - *.flat(depth) : 인수로 전달한 깊이만큼 배열을 평탄화
      ```js
      [1, [2, [3, [4]]]].flat(2); // [1, 2, 3, [4]]
      [1, [2, [3, [4]]]].flat().flat(); // [1, 2, 3, [4]]
      [1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]
      ```

  > 고차 함수 : 가변 데이터를 피하고 불변성을 지향하는 함수평 프로그래밍에 기반을 두고 있다. 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내의 조건문과 반복문을 제거하여 복잡성을 해결, 변수 사용을 억제하여 상태 변경을 피한다. 즉 순수 함수를 통해 부수 효과를 최대한 억제하여 프로그램 안정성을 높이기 위함이다.

  > 원본 배열 변경
  - *.sort() : 배열의 요소 정렬. 기본적으로 오름차순으로 요소 정렬하는데 유니코드의 코드 포인트 순서를 따른다. 숫자 요소를 정렬할 때는 **정렬 순서를 정의하는 비교 함수를 인수로 전달**해야 한다.
      ```js
      const todos = [
        { id: 4, content: 'JavaScript' },
        { id: 1, content: 'HTML' },
        { id: 2, content: 'CSS' }
      ];

      // 비교 함수. 매개변수 key는 프로퍼티 키다.
      function compare(key) {
        // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
        // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
        return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
      }

      // id를 기준으로 오름차순 정렬
      todos.sort(compare('id'));
      console.log(todos);
      /*
      [
        { id: 1, content: 'HTML' },
        { id: 2, content: 'CSS' },
        { id: 4, content: 'JavaScript' }
      ]
      */

      // content를 기준으로 오름차순 정렬
      todos.sort(compare('content'));
      console.log(todos);
      /*
      [
        { id: 2, content: 'CSS' },
        { id: 1, content: 'HTML' },
        { id: 4, content: 'JavaScript' }
      ]
      */
      ```
  - *.forEach() : 기본적으로 원본 배열을 변경하지 않으나 콜백 함수를 통해 원본 배열을 변경할 수 있다.
    - 해당 메서드의 반환값은 항상 undefined이다.
    - 화살표 함수로 사용하지 않는다면 두번째 인자로 this를 전달해도 된다.
    - 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외되며, 이는 map, filter, reduce에도 동일하다.
    - for문에 비해 성능이 좋진 않다. 그러나 가독성이 좋으므로 높은 성능이 필요하지 않다면 forEach 메서드를 권장한다.

  > 원본 배열 변경 안됨
  - *.map() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출하며 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
    - map 메서드로 생성한 length 값은 호출한 배열의 length 프로퍼티와 정확히 일치한다. 즉, 1:!로 매핑한다.
  - *.filter() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출하며 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열 반환
  - *.reducer() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출한다. 단, 콜백 함수의 반환 값을 다음 순회 시 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출해 하나의 결과값을 만들어 반환한다. 누적하여 반환하는 형태이다.
  - *.some() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출한다. 콜백 함수의 반환값이 단 한번이라도 참이라면 true, 모두 거짓이면 false를 반환한다.
  - *.every() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출한다. 콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false를 반환한다.
  - *.find() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출하며 반환값이 true인 첫 번째 요소를 반환한다. 존재하지 않으면 undefined이다.
  - *.findInder() : 자신을 호출한 배열의 모든 요소를 순회, 인수로 전달받은 콜백 함수를 반복 호출하며 반환 값이 true인 첫 번째 요소의 인덱스를 반환한다. 존재하지 않으면 -1을 반환한다.
  - *.flatMap() : map 메서드와 flat 메서드를 순차적으로 실행하는 효과가 있다.
    - 단, 1단계만 평탄화한다.
      ```js
      const arr = ['hello', 'world'];

      // flatMap은 1단계만 평탄화한다.
      arr.flatMap((str, index) => [index, [str, str.length]]);
      // -> [[0, ['hello', 5]], [1, ['world', 5]]] => [0, ['hello', 5], 1, ['world', 5]]

      // 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출한다.
      arr.map((str, index) => [index, [str, str.length]]).flat(2);
      // -> [[0, ['hello', 5]], [1, ['world', 5]]] => [0, 'hello', 5, 1, 'world', 5]
      ```

- Number

  > 프로퍼티
  - *.EPSILON : 부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용
      ```js
      function isEqual(a, b){
        // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
        return Math.abs(a - b) < Number.EPSILON;
      }

      isEqual(0.1 + 0.2, 0.3); // -> true
      ```
  - *.MAX_VALUE : 표현 가능한 가장 큰 양수 값. Infinity 이전 값
  - *.MIN_VALUE : 표현 가능한 가장 작은 양수 값. 0 다음 값
  - *.MAX_SAFE_INTEGER : 안전하게 표현 가능한 가장 큰 정수 값
  - *.MIN_SAFE_INTEGER : 안전하게 표현 가능한 가장 작은 정수 값
  - *.POSITIVE_INFINITY : 양의 무한대. Infinity와 동일
  - *.NEGATIVE_INFINITY : 음의 무한대. -Infinity와 동일
  - *.NaN : 숫자가 아님. globalThis.NaN과 동일

  > 메서드 : 대상을 암묵적 타입 변환하지 않는다.
  - *.isFinite(item) : 정상적인 유한수(Infinity)인지 검사하여 boolean 반환
    - globalThis의 isFinite와 다름.
  - *.isInteger(item) : 정수인지 검사하여 boolean 반환
  - *.isNaN(item) : NaN인지 검사하여 boolean 반환
  - *.isSafeInteger(item) : 안전한 정수인지 검사하여 boolean 반환
  - *.toExponential(x) : 지수 표기법으로 변환하여 문자열로 반환. 기본값은 주어진 값을 나타내는데 필요한 자릿수이다.
    - 지수 표기법 : 매우 크거나 작은 숫자를 표기할 때 주로 사용, `e(Exponent)` 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 나타낸다. 
      ```js
      (77.1234).toExponential();  // -> "7.71234e+1"
      (77.1234).toExponential(4); // -> "7.7123e+1"
      (77.1234).toExponential(2); // -> "7.71e+1"
      77.toExponential(); // -> SyntaxError: Invalid or unexpected token
      77.1234.toExponential(); // -> "7.71234e+1"
      77 .toExponential(); // -> "7.7e+1"
      ```
  - *.toFixed(x) : 숫자를 반올림하여 문자열로 반환. 소수점 이하의 매개변수만큼의 자릿수를 유효하게 판단하고 나머지를 반올림한다. 기본값은 0이다.
      ```js
      // 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
      (12345.6789).toFixed(); // -> "12346"
      // 소수점 이하 1자리수 유효, 나머지 반올림
      (12345.6789).toFixed(1); // -> "12345.7"
      // 소수점 이하 2자리수 유효, 나머지 반올림
      (12345.6789).toFixed(2); // -> "12345.68"
      // 소수점 이하 3자리수 유효, 나머지 반올림
      (12345.6789).toFixed(3); // -> "12345.679"
      ```
  - *.toPrecision(x) : 나머지 자릿수를 반올림하여 문자열로 반환. 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과 반환. 기본값은 0이다.
      ```js
      // 전체 자리수 유효. 인수를 전달하지 않으면 기본값 0이 전달된다.
      (12345.6789).toPrecision(); // -> "12345.6789"
      // 전체 1자리수 유효, 나머지 반올림
      (12345.6789).toPrecision(1); // -> "1e+4"
      // 전체 2자리수 유효, 나머지 반올림
      (12345.6789).toPrecision(2); // -> "1.2e+4"
      // 전체 6자리수 유효, 나머지 반올림
      (12345.6789).toPrecision(6); // -> "12345.7"
      ```
  - *.toString(x) : 진법을 나타내는 2~36 사이의 정수값을 인수로 전달 가능, 기본값은 10진법이다.
      ```js
      // 인수를 생략하면 10진수 문자열을 반환한다.
      (10).toString(); // -> "10"
      // 2진수 문자열을 반환한다.
      (16).toString(2); // -> "10000"
      // 8진수 문자열을 반환한다.
      (16).toString(8); // -> "20"
      // 16진수 문자열을 반환한다.
      (16).toString(16); // -> "10"
      ```

- Math
  > 프로퍼티
  - *.PI : 원주율 PI 값 반환

  > 메서드
  - *.abs(num) : 전달된 숫자의 절대값 반환
  - *.round(float) : 전달된 숫자의 소수점 이하를 반올림한 정수 반환
  - *.ceil(float) : 전달된 숫자의 소수점 이하를 올림한 정수 반환
  - *.floor(float) : 전달된 숫자의 소수점 이하를 내림한 정수 반환
  - *.sqrt(num) : 전달된 숫자의 제곱근 반환
  - *.random() : 임의의 난수 반환. 0에서 1 미만의 실수
    ```js
    Math.random(); // 0에서 1 미만의 랜덤 실수(0.8208720231391746)

    /*
    1에서 10 범위의 랜덤 정수 취득
    1) Math.random으로 0에서 1 미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의
    랜덤 실수를 구한다.
    2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구한다.
    3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.
    */
    const random = Math.floor((Math.random() * 10) + 1);
    console.log(random); // 1에서 10 범위의 정수
    ```
  - *.pow(base, exponent) : 첫 번째 인수를 밑, 두번째 인수를 지수로 거듭제곱한 결과 반환
      ```js
      Math.pow(2, 8);  // -> 256
      Math.pow(2, -1); // -> 0.5
      Math.pow(2);     // -> NaN

      // ES7 지수 연산자
      2 ** 2 ** 2; // -> 16
      Math.pow(Math.pow(2, 2), 2); // -> 16
      ```
  - *.max() : 전달받은 인수 중 가장 큰 수를 반환. 인수가 없으면 -Infinity 반환
      ```js
      Math.max(1); // -> 1
      Math.max(1, 2); // -> 2
      Math.max(1, 2, 3); // -> 3
      Math.max(); // -> -Infinity

      // 배열 요소 중에서 최대값 취득
      Math.max.apply(null, [1, 2, 3]); // -> 3

      // ES6 스프레드 문법
      Math.max(...[1, 2, 3]); // -> 3
      ```
  - *.min() : 전달받은 인수 중 가장 작은 수를 반환. 인수가 없으면 Infinity 반환
      ```js
      Math.min(1); // -> 1
      Math.min(1, 2); // -> 1
      Math.min(1, 2, 3); // -> 1
      Math.min(); // -> Infinity

      // 배열 요소 중에서 최소값 취득
      Math.min.apply(null, [1, 2, 3]); // -> 1

      // ES6 스프레드 문법
      Math.min(...[1, 2, 3]); // -> 1
      ```