import "./App.css";
import Content from "./Content";
function App() {
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
    </div>
  );
}

export default App;
