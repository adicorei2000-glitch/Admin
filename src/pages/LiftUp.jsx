import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div style={{
 display:"flex",  justifyContent:"center", alignItems:"center", marginTop:"100px", fontFamily:"Arial", fontSize:"24px", background:"linear-gradient(135deg, #1e3a8a, #2563eb) ", color:"white", flexDirection:"column", gap:"20px",  padding:"20px", borderRadius:"10px", boxShadow:"0 10px 30px rgba(0,0,0,0.2)", }}>
            <h2 style={{fontSize:"80px", marginBottom:"30px"}}>Count: {count}</h2>
            <div style={{display:"flex", gap:"15px"}}>
            <button style={btn} onClick={() => setCount(count + 1)}>+1</button>
            <button style={btn} onClick={() => setCount(count - 1)}>-1</button>
            <button style={btn} onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
    
    function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);

    if (operator === "+") setResult(a + b);
    if (operator === "-") setResult(a - b);
    if (operator === "*") setResult(a * b);
    if (operator === "/") setResult(b !== 0 ? a / b : "Error");
  };

  return (
   

   

   

    <div style={container}>
      <h1 style={{ marginBottom: "40px" }}>Mini App</h1>

      {/* Counter */}
      <div style={card}>
        <h2>Counter</h2>
        <h1 style={{ fontSize: "50px" }}>{count}</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={btn} onClick={() => setCount(count + 1)}>+</button>
          <button style={btn} onClick={() => setCount(count - 1)}>-</button>
          <button style={btn} onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      {/* Calculator */}
      <div style={card}>
        <h2>Calculator</h2>

        <input
          style={input}
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          style={input}
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button style={btn} onClick={() => calculate("+")}>+</button>
          <button style={btn} onClick={() => calculate("-")}>-</button>
          <button style={btn} onClick={() => calculate("*")}>×</button>
          <button style={btn} onClick={() => calculate("/")}>÷</button>
          <br />
          <br />
          <button style={btn} onClick={() => { setNum1(""); setNum2(""); setResult(null); }}>C</button>
        </div>

        {result !== null && (
          <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>
        )}
      </div>
      

        {/* Todo App */}
     
         <form style={{ width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  gap: "10px",  display: "flex",
  flexDirection: "column",  
  border: "1px solid #ccc",}} id="todoForm">
        <input style={{width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",}} type="text" placeholder="add new Task" id="taskInput" />
        <button style={{ padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: "white",}} onClick={() => setCount(+1)}  type="submit">Add</button>

        <ul id="taskList"></ul>
    </form>

   

    </div>




  );
  
}




 
 


const container = {
  minHeight: "100vh",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "40px",
  padding: "40px",
  background: "linear-gradient(-45deg,#1e3a8a, #2563eb, #9333ea, #06b6d4)",
    backgroundSize: "400% 400%",
    animation: "gradient 10s ease infinite",
  color: "white",
  fontFamily: "Arial",
};

const card = {
  background: "white",
  color: "#111",
  padding: "30px",
  borderRadius: "15px",
  width: "350px",
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
};

const btn = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: "white",
};

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};


export { Counter };
export default App;
