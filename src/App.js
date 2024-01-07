import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  useEffect(() => console.log("i run only once."), []);
  useEffect(() => console.log("i run when keyword changes"), [keyword]);
  useEffect(() => console.log("i run when counter changes"), [counter]);
  useEffect(
    () => console.log("i run when keyword and counter changes"),
    [keyword, counter]
  );
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
