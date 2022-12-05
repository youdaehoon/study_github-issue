import React from "react";

import "../styles/common.css";
import "../styles/main.css";

const Body = () => {
  const datas = [
    "주재원",
    "국제결혼",
    "이민 영주권",
    "해외취업",
    "유학",
    "해외연급",
    "해외자격",
    "미성년자해외여행",
    "해외설립",
  ];
  return (
    <div className="flex-row justify-center align-center">
      <section className="flex-row justify-center align-center">
        <span>어떤 목적으로 방문하셨나요?</span>
      </section>
      <section>
        <div className="container-category flex-row flex-wrap">
          {datas.map((list, idx) => (
            <div
              className="block-category flex-row justify-center align-center"
              key={list + "/" + idx}
            >
              <span>{list}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
