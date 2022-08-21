# 코딩애플 react

### 조각모음(아무거나)

- map함수에 return값을 넣으면 array형식으로 데이터를 담아줌
- 자식 컴포넌트에 state 전달할 때 작명은 보통 전달값과 동일한 이름을 사용
- 자식 컴포넌트에 state 전달할 때 함수로도 전달이 가능함
- click 이벤트는 상위 html로 퍼짐 ❗️이벤트 버블링

  - 상위로 퍼지는 이벤트 버블링을 막고 싶으면 `e.stopPropagation()`

- ```javascript
  <input
    type="text"
    onChange={(e) => {
      setInput(e.target.value);
      console.log(input);
    }}
  />
  ```

  state 변경함수는 늦게 처리가 되기 때문에 setInput 완료되기 전에 console.log을 첫번째로 처리하게 됨

- class는 변수/함수 보관하는 덩어리
