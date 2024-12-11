import { useState } from "react";
import "./App.css";
import Content from "./Content";
function App() {
  const [like, setLike] = useState(0);

  return (
    <div className="profile-page">
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="프로필 사진"
        className="profile-picture"
      />
      <h1 className="name">홍길동</h1>
      <Content content="example@example.com" className="email" />
      <Content content="안녕하세요! 저는 웹 개발자입니다." className="bio" />
      <a href="mailto:qkrdydwls3@gmail.com" className="email-button">
        이메일 보내기
      </a>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4757",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "16px",
        }}
        onClick={() => setLike(like + 1)}
      >
        <span role="img" aria-label="하트">
          ❤️
        </span>
        좋아요
        <span>{like}</span>
      </button>
    </div>
  );
}

export default App;
