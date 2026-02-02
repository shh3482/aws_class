import { useState } from "react";

function Insert() {
  let [todos, setTodos] = useState([""]);
  let [date, setDate] = useState("");
  let [text, setText] = useState("");

  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changeText = (e) => {
    setText(e.target.value);
  };
  const todoInsert = (e) => {
    e.preventDefault();
    const sendInsertTodo = async () => {
      try {
        const response = await fetch("/api/v1/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: date,
            text: text,
          }),
        });
        if (response.status == 200) {
          const result = await response.json();
          if (result) {
            alert("할일을 등록했습니다.");
            setText("");
          } else alert("할일을 등록하지 못했습니다.");
        }
      } catch (e) {
        console.error(e);
      }
    };
    sendInsertTodo();
  };

  return (
    <div>
      <h1>등록 화면입니다.</h1>
      <form className="insert-form" onSubmit={todoInsert}>
        <div>
          <label htmlFor="date">날짜 : </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="날짜를 입력하세요."
            onChange={changeDate}
            value={date}
          />
        </div>
        <div>
          <label htmlFor="text">할일 : </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="할일을 입력하세요."
            onChange={changeText}
            value={text}
          />
        </div>

        <button>등록</button>
      </form>
    </div>
  );
}

export default Insert;
