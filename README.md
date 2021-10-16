# FrontEnd Crash - Making From Javascript!:hammer:
> 자바스크립트를 A to Z 이해하고 구현해봅시다!:mag_right: 덤으로 프레임워크 지식도 넓혀볼까요? :wink:

<br>

## 코드 리뷰 방법
1. 주석과 파일
   - 주석과 파일이 필요한지 코드 라인을 선택하여 피드백을 줍니다.
   - 피드백 받은 대상은 명확한 의미 전달을 위해 답글로 남겨주세요.

<br>

2. 네이밍
   - 변수, 함수든 일관성이 있어야 합니다.
   - 어떤 변수는 동사+명사로 되어 있는데 어떤 변수는 동사+형용사로 되어 있으면 안 돼요.
   - 변수/함수명과 같은 기능을 하는지 확인합니다.
      ```js
      const getFalseArray = (size) => {
        return Array.from({length:size}, () => false);
        // 또는
        return Array(size).fill(false);
      }
      ```

<br>

3. 공백, 세미콜론, EOL(EndOfLine) 문법 확인
   - 불필요한 공백이 있진 않나요?
   - 세미콜론을 사용에 있어 일관성이 깨지진 않았나요?
   - EOL이 통일되었나요?

<br>

4. 중복되는 코드 확인
   - 동일한 기능을 하는 함수가 존재하진 않나요?
   - 지속적으로 똑같은 내용이 반복(중복)되진 않나요?
   - console.log()가 불필요하게 사용되진 않았나요?
   - 사용하지 않는 변수가 존재하나요?

<br>

## 😎 진행 순서 😎

<hr>

> 최초 1회
1. Editor : VSCode
2. Extension 설치
   - Night Owl
   - Material Icon Theme
   - Bracket Pair Colorizer 2
   - Color Highlight
   - Liver Server
   - JavaScript (ES6) code snippets
   - ident-rainbow
   - Highlight Matching Tag
3. ESLint, Prettier 설정(+ jest)

<br>
<hr>

> 진행
1. 개념 설명 및 문제 안내
2. 구현
3. 추가 설명 및 리뷰, 피드백(생략 가능)

<hr>
<br>

### ✅ 자료구조 구현
  - 1️⃣ 프로토타입을 활용해서 큐와 스택 구현하기
    - 자바스크립트의 Array를 활용해서 구현
  - 2️⃣ 클래스를 활용해서 큐와 스택 구현하기
    - 구조체(Node)를 만들어 직접 구현하기

<br>

### ✅ 주어진 I/O에 대응하는 순수 함수 구현
  - 1️⃣ 배열 초기화 - 매개변수를 효율적으로 제어하기(Rest, default)
  - 2️⃣ 배열 뒤집기(Array)
  - 3️⃣ 평균, 최대값, 누적합, 중복 횟수, 중첩 배열 평탄화, 중복 요소 제거하기(Array)
  - 4️⃣ 로또 만들기(Number, Math, Array)
  - 5️⃣ 단어의 개수 구하기(String)
  - 6️⃣ 객체 깊은 복사하기(Object)
  - 7️⃣ 커피 자판기 만들기(Date, RegExp, String, Array, Object)
  - 8️⃣ 주어진 형태로 객체 출력하기(Object)
  - 9️⃣ 비동기 프로그래밍(Promise, async/await)
  - 🔟 유효성 검사하기(HTML/DOM)

<br>

### ✅ 대표적인 정규표현식 사용
  - 1️⃣ 한글만 입력되었나요?
  - 2️⃣ 영어만 입력되었나요?
  - 3️⃣ 숫자만 입력되었나요?
  - 4️⃣ 이메일이 옳은 형식인가요?
  - 5️⃣ 비밀번호 검증 결과 옳은 형식인가요?
  - 6️⃣ 전화번호가 옳은 형식인가요?
  - 7️⃣ 생년월일이 옳은 형식인가요?
  - 8️⃣ 주민번호 검증 결과 옳은 형식인가요?
  - 9️⃣ 옳은 URL인가요?
  - 🔟 HTML에서 텍스트만 가져올 수 있나요?

<br>

### ✅ 알고리즘 문제해결 기초
  - 1️⃣ 별 찍기
  - 2️⃣ 1446년 10월 9일은 무슨 요일?
  - 3️⃣ [올바른 괄호](https://programmers.co.kr/learn/courses/30/lessons/12909)

<br>

### ✅ 모듈 형태의 독립 기능 구현
  - 1️⃣ Modal 구현
  - 2️⃣ Drag & Drop 구현
  - 3️⃣ Infinity Scroll 구현
  - 4️⃣ Login 기능 구현
    - Create
    - Read
    - Update
    - Delete

<br>

### 🚩 TodoMVC 구현
  - 1️⃣ 효율적인 렌더링
  - 2️⃣ 컴포넌트
  - 3️⃣ 라우팅
  - 4️⃣ HTTP 클라이언트
  - 5️⃣ 상태 관리

<br>

