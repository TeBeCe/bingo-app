import React, { useState, useRef } from "react";
import {Button, Typography, List, InputNumber, Space, QRCode} from "antd";

const { Title } = Typography;

export default function Host() {
  const [numbers, setNumbers] = useState([]);
  const [current, setCurrent] = useState(null);
  const [maxNumber, setMaxNumber] = useState(75);
  const [delay, setDelay] = useState(5000);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

    const generateNumber = () => {
        setNumbers((prevNumbers) => {
            if (prevNumbers.length >= maxNumber) return prevNumbers;

            let newNum;
            do {
                newNum = Math.floor(Math.random() * maxNumber) + 1;
            } while (prevNumbers.includes(newNum));

            setCurrent(newNum);
            return [...prevNumbers, newNum];
        });
    };

  const startAuto = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      generateNumber();
    }, delay);
  };

  const stopAuto = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetGame = () => {
    stopAuto();
    setNumbers([]);
    setCurrent(null);
  };

  return (
      <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#001529",
            padding: "40px 20px",
            boxSizing: "border-box",
            color: "white",
          }}
      >
        {/* Current number */}
        <div style={{ flex: "0 0 auto", textAlign: "center" }}>
          <Title
              level={1}
              style={{
                fontSize: "10rem",
                margin: 0,
                color: "#ff4d4f",
                lineHeight: 1,
              }}
          >
            {current ?? <QRCode bgColor={'white'} value={"https://tebece.github.io/bingo-app/"} />}
          </Title>
        </div>

        {/* Controls */}
        <div style={{ flex: "0 0 auto", marginTop: 20 }}>
          <Space>
            <Button type="primary" size="large" onClick={generateNumber} disabled={isRunning}>
              Generate
            </Button>
            <Button size="large" onClick={startAuto} disabled={isRunning}>
              Auto Start
            </Button>
            <Button size="large" onClick={stopAuto} disabled={!isRunning}>
              Stop
            </Button>
            <Button danger size="large" onClick={resetGame}>
              Reset
            </Button>
          </Space>
        </div>

        {/* History */}
        <div
            style={{
              flex: "1 1 auto",
              width: "100%",
              maxWidth: "1200px",
              marginTop: 40,
              borderRadius: 8,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
        >
          <div style={{ padding: "10px 20px", fontWeight: "bold", fontSize: "x-large" }}>
            History
          </div>

          <div style={{ flex: 1,fontSize: 'x-large', overflowY: "auto" }}>
              {numbers.join(', ')}
          </div>
        </div>

        {/* Settings */}
        <div style={{ flex: "0 0 auto", marginTop: 20, color: "#aaa" }}>
          Playfield Size:{" "}
          <InputNumber min={10} max={500} value={maxNumber} onChange={setMaxNumber} /> | Delay (ms):{" "}
          <InputNumber min={1000} max={15000} step={1000} value={delay} onChange={setDelay} />
        </div>
      </div>
  );
}
