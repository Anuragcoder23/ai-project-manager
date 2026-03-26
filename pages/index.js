import { useState } from "react";

export default function Dashboard() {

const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")

async function askAI(){

const res = await fetch("/api/askai",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({question})
})

const data = await res.json()
setAnswer(data.answer)

}

return (

<div style={{
display:"flex",
fontFamily:"Inter, sans-serif",
background:"#f5f7fb",
minHeight:"100vh"
}}>

{/* SIDEBAR */}

<div style={{
width:"240px",
background:"white",
borderRight:"1px solid #e5e7eb",
padding:"20px"
}}>

<h2 style={{marginBottom:"30px"}}>AI Manager</h2>

<div style={{lineHeight:"40px"}}>

<div>Overview</div>
<div>All Projects</div>
<div>Status View</div>
<div>Team View</div>

<hr style={{margin:"20px 0"}}/>

<div>Ask AI Agent</div>
<div>Task Review</div>
<div>Design Review</div>

</div>

</div>


{/* MAIN AREA */}

<div style={{flex:1,padding:"30px"}}>

<h1>Dashboard</h1>


{/* METRIC CARDS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(6,1fr)",
gap:"20px",
marginTop:"20px"
}}>

{[
{title:"Total Projects",value:147},
{title:"Awaiting Feedback",value:33},
{title:"Content Addition",value:13},
{title:"Pre Release",value:6},
{title:"Beta Creation",value:6},
{title:"On Hold",value:6}
].map((card,i)=>(

<div key={i} style={{
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
}}>

<div style={{fontSize:"13px",color:"#6b7280"}}>
{card.title}
</div>

<div style={{fontSize:"28px",fontWeight:"600"}}>
{card.value}
</div>

</div>

))}

</div>



{/* STATUS + WORKLOAD */}

<div style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px",
marginTop:"30px"
}}>


{/* STATUS BREAKDOWN */}

<div style={{
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
}}>

<h3>Status Breakdown</h3>

{[
["Awaiting Feedback",33],
["Working On Website",17],
["Waiting For Design",14],
["Working On Design",14],
["Working On Content",13],
].map((item,i)=>(

<div key={i} style={{marginTop:"10px"}}>

<div>{item[0]}</div>

<div style={{
height:"8px",
background:"#e5e7eb",
borderRadius:"10px",
overflow:"hidden"
}}>

<div style={{
width:`${item[1]*3}px`,
height:"8px",
background:"#6366f1"
}}/>

</div>

</div>

))}

</div>



{/* MANAGER WORKLOAD */}

<div style={{
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
}}>

<h3>Manager Workload</h3>

{[
["Anurag",38],
["Ankit",19],
["Khushboo",19],
["Sejal",19],
["Jatin",18]
].map((item,i)=>(

<div key={i} style={{marginTop:"10px"}}>

<div>{item[0]}</div>

<div style={{
height:"8px",
background:"#e5e7eb",
borderRadius:"10px",
overflow:"hidden"
}}>

<div style={{
width:`${item[1]*4}px`,
height:"8px",
background:"#10b981"
}}/>

</div>

</div>

))}

</div>

</div>



{/* AI AGENT */}

<div style={{
marginTop:"30px",
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
}}>

<h3>Ask AI Agent</h3>

<div style={{display:"flex",gap:"10px"}}>

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder="Ask about any project..."
style={{
flex:1,
padding:"10px",
border:"1px solid #d1d5db",
borderRadius:"6px"
}}
/>

<button
onClick={askAI}
style={{
background:"#6366f1",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Ask AI
</button>

</div>

<div style={{marginTop:"15px"}}>
{answer}
</div>

</div>


</div>

</div>

)

}
