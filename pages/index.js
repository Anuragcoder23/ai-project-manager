import { useState } from "react";

export default function Home() {

  const [question,setQuestion] = useState("");
  const [answer,setAnswer] = useState("");

  async function askAI(){
    const res = await fetch("/api/askai",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({question})
    });

    const data = await res.json();
    setAnswer(data.answer);
  }

  return (

    <div style={{fontFamily:"Arial",padding:"40px"}}>

      <h1>AI Project Manager Dashboard</h1>

      <h3>AI Agent</h3>

      <input
        style={{padding:"10px",width:"400px"}}
        placeholder="Ask about projects..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
      />

      <button
        style={{marginLeft:"10px",padding:"10px"}}
        onClick={askAI}
      >
        Ask AI
      </button>

      <p style={{marginTop:"20px"}}>
        {answer}
      </p>

    </div>

  );
}
