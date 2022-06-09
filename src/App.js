import "./App.css";
import React, { useState } from "react";

function App() {
  let posts = "강남 고기 맛집";
  const [title, setTitle] = useState("남자 코트 추천");
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const addGood = () => {
    setGoodCount(goodCount + 1);
  };
  const addBad = () => {
    setBadCount(badCount + 1);
  };

  const titleChange = () => {
    title === "여자 코트 추천"
      ? setTitle("남자 코트 추천")
      : setTitle("여자 코트 추천");
  };
  return (
    <div>
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={titleChange}>버튼</button>
      <div className="list">
        <h3>
          {title}
          <span className="good" onClick={addGood}>
            👍
          </span>
          {goodCount}
          <span className="good" onClick={addBad}>
            👎
          </span>
          {badCount}
        </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>
          {title}
          <span className="good" onClick={addGood}>
            👍
          </span>
          {goodCount}
          <span className="good" onClick={addBad}>
            👎
          </span>
          {badCount}
        </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>
          {title}
          <span className="good" onClick={addGood}>
            👍
          </span>
          {goodCount}
          <span className="good" onClick={addBad}>
            👎
          </span>
          {badCount}
        </h3>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
