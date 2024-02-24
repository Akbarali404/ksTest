import React, { useEffect, useState } from "react";
import "./Test.css";
import Data from "../Data/Data";
import Savol from "../Savol/Savol";
import { useTimer } from 'react-timer-hook';

function Test({ expiryTimestamp }) {
  const [sNum, setSNum] = useState(1);
  const { data } = Data();
  const [result, setResult] = useState([]);
  const [score, setScore] = useState(0);
  const [none, setNone] = useState(false);

  const width = {
    width: `${sNum * 4}%`,
  };

 let baho;
  if (22 <= score && score <= 25) {
    baho = 5;
  }
  if (18 <= score && score <= 21) {
    baho = 4;
  }
  if (14 <= score && score <= 17) {
    baho = 3;
  }
  if (1 <= score && score <= 13) {
    baho = 2;
  }
  
  const javob = (str) => () => {
    if (sNum < 25) {
      setSNum(sNum + 1);
    } else {
      setNone(true);
      console.log("Tugadi");
    }
    console.log(str);
    setResult([...result, str]);
    setScore(score + str);
  };
  const {
    seconds,
    minutes,
    isRunning
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  useEffect(() => {
    if (none || !isRunning) {
      setNone(true);
      const user = JSON.parse(localStorage.getItem('user'));
  
      const text = `Ism: ${user[0]} %0AFamiliya: ${user[1]} %0A${score} tasi to'g'ri %0ABahosi:${baho}`;
  
      const token = "6014626057:AAEfxdF9240_AoFoloNRhO5sKEDZVl6t8gg";
      const chat_id = -4175369950;
  
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;
  
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
    }   
  }, [none, isRunning]);

 
  
  return (
    <div>
      <div className={none ? "none" : 'timer'}>
        {minutes}:{seconds}
      </div>
      <div className={none ? "none" : "all"}>
        <div className="score">
          <div style={width} className="chiziq">
            <h2>{sNum}/25</h2>
          </div>
        </div>

        <Savol value={sNum} />

        <div className="buttons">
          {/* 1-savol */}
          {data[sNum - 1].options.map((item) => {
            return (
              <button key={item.id} onClick={javob(item.mode)}>
                {item.text}
              </button>
            );
          })}
        </div>
      </div>

      <div className={none ? "result" : "none"}>
        <h2>25 ta savoldan {score} tasi to'g'ri</h2>
        <h2>Bahoyingiz {baho}</h2>
      </div>
    </div>
  );
}

export default Test;
