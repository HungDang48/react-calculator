import React, { useState } from "react";
import "./App.css";  // Đảm bảo rằng bạn đã tạo file App.css để style giao diện
import Header from './components/header/Header'; // Đảm bảo đường dẫn đúng

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString()); // eval giúp tính toán biểu thức
    } catch (error) {
      setInput("Error"); // Nếu có lỗi khi tính toán
    }
  };

  return (
    <div>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button onClick={handleClear} className="span-2">C</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>×</button>
          {[7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, 0, ".", "="].map((btn, i) => (
            btn === "="
              ? <button key={i} onClick={handleEquals}>=</button>
              : <button key={i} onClick={() => handleClick(btn.toString())}>{btn}</button>
          ))}
        </div>
      </div>

      {/* Thêm thông tin tác giả vào cuối ứng dụng */}
      <footer className="footer">
        <p>
           
          Developed by:HungDang48</p>
        <p>© 2025, All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
