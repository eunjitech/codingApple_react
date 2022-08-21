import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState({ state: false, index: 0 });
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {title.map((item, idx) => (
        <div className="list">
          <h4 onClick={() => setModal({ state: true, index: idx })}>
            {title[idx]}
            <span
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...like];
                copy[idx] = copy[idx] + 1;
                setLike(copy);
              }}
              style={{ cursor: "pointer" }}
            >
              👍🏻
            </span>
            {like[idx]}
          </h4>
          <p>6월 1일 발행</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              let copy = [...title];
              copy.splice(idx, 1);
              setTitle(copy);
            }}
          >
            삭제
          </button>
        </div>
      ))}
      {modal.state ? (
        <Modal
          state={title[modal.index]}
          color={
            modal.index === 0
              ? "#a3cca2"
              : modal.index === 1
              ? "#e2b9b3"
              : "#e8dbcb"
          }
          changeTitle={() => {
            let copy = [...title];
            copy[modal.index] = "여자코트 추천";
            setTitle(copy);
          }}
        />
      ) : null}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!input) {
            alert("빈값");
          } else {
            setTitle([input, ...title]);
          }
        }}
      >
        추가`
      </button>
      <Profile />
    </div>
  );
}

function Modal({ state, color, changeTitle }) {
  return (
    <div className="modal" style={{ backgroundColor: color }}>
      <h4>{state}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={changeTitle}>글제목 수정</button>
    </div>
  );
}

//클래스형 컴포넌트
class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>프로필입니당</div>;
  }
}

export default App;
