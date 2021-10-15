## 유틸 함수 사용법
### TimerUtils.js
- 모듈 import
  ```js
  const TimerUtils = require('상대경로/TimerUtils.js');
  ```

- checkTimer : Date 객체 사용
  ```js
  let timer = TimerUtils.checkTimer('테스트 명');
  timer.start();

  // 측정할 함수 기입

  timer.stop();
  ```
  - 예제
    ```js
    const TimerUtils = require('../../_initial/00_utils/TimerUtils.js');
    let timer = TimerUtils.checkTimer('스택 시간 테스트');
    let str = ''
    timer.start();
    for (let i = 0; i < 10000000; i++) {
      str += i;
    }
    timer.stop();
    ```

- checkTimerFunction : console.time 함수 사용
  ```js
  TimerUtils.checkTimerFunction('측정할 함수명');
  ```
  - 예제
    ```js
    const TimerUtils = require('../../_initial/00_utils/TimerUtils.js');
    TimerUtils.checkTimerFunction(() => {
      let str = ''
      for (let i = 0; i < 10000000; i++) {
        str += i;
      }
    });
    ```

<br>