import React from "react";

function Home() {
  return (
    <div>
      <h1>영화 후기 작성페이지입니다.</h1>
      <button onClick={() => alert("영화리스트 페이지로 이동합니다.")}>
        영화리스트
      </button>
    </div>
  );
}

export default Home;
