import { useState } from "react"
export default function Dashboard(){

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

const cards = [
{title:"OB Form",value:7,color:"#f59e0b"},
{title:"KOC",value:7,color:"#f97316"},
{title:"Server Migration",value:1,color:"#3b82f6"},
{title:"Design Requirement",value:4,color:"#8b5cf6"},
{title:"Design Layout",value:14,color:"#6366f1"},
{title:"Design Changes",value:2,color:"#7c3aed"},
{title:"Design Feedback",value:13,color:"#ec4899"},
{title:"Creating Beta Site",value:41,color:"#06b6d4"},
{title:"Website Feedback",value:17,color:"#0ea5e9"},
{title:"Content Addition",value:7,color:"#10b981"},
{title:"Awaiting Feedback",value:0,color:"#f59e0b"},
{title:"Pre Release",value:19,color:"#3b82f6"},
{title:"Client Unresponsive",value:9,color:"#ef4444"},
{title:"On Hold Project",value:4,color:"#64748b"}
]

return(

<div style={{
background:"#f4f6fb",
minHeight:"100vh",
fontFamily:"Inter"
}}>

{/* HEADER */}

<div style={{
padding:"25px 40px",
fontSize:"26px",
fontWeight:"600"
}}>
Dashboard
</div>


{/* STATUS CARDS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(6,1fr)",
gap:"20px",
padding:"0 40px"
}}>

{cards.map((card,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
style={{
background:"white",
borderRadius:"12px",
padding:"18px",
boxShadow:"0 4px 14px rgba(0,0,0,0.05)",
borderTop:`4px solid ${card.color}`,
cursor:"pointer"
}}
>

<div style={{
fontSize:"12px",
letterSpacing:"1px",
color:"#64748b"
}}>
{card.title.toUpperCase()}
</div>

<div style={{
fontSize:"34px",
fontWeight:"700",
marginTop:"10px"
}}>
{card.value}
</div>

<div style={{
fontSize:"12px",
marginTop:"4px",
color:"#6b7280"
}}>
Click to view
</div>

</motion.div>

))}

</div>



{/* CHART SECTION */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"25px",
padding:"40px"
}}>


{/* STATUS DISTRIBUTION */}

<div style={{
background:"white",
borderRadius:"12px",
padding:"25px",
boxShadow:"0 4px 14px rgba(0,0,0,0.05)"
}}>

<h3>Status Distribution</h3>

{cards.slice(0,6).map((item,i)=>{

const width = item.value * 10

return(

<div key={i} style={{marginTop:"15px"}}>

<div style={{fontSize:"14px"}}>
{item.title}
</div>

<div style={{
height:"8px",
background:"#e5e7eb",
borderRadius:"10px",
overflow:"hidden"
}}>

<motion.div
initial={{width:0}}
animate={{width}}
transition={{duration:0.8}}
style={{
height:"8px",
background:item.color
}}
/>

</div>

</div>

)

})}

</div>



{/* TEAM WORKLOAD */}

<div style={{
background:"white",
borderRadius:"12px",
padding:"25px",
boxShadow:"0 4px 14px rgba(0,0,0,0.05)"
}}>

<h3>Team Workload</h3>

{[
{name:"Sejal",value:19},
{name:"Jatin",value:19},
{name:"Sagar",value:10},
{name:"Sharmila",value:8}
].map((m,i)=>{

const width = m.value * 12

return(

<div key={i} style={{marginTop:"15px"}}>

<div>{m.name}</div>

<div style={{
height:"8px",
background:"#e5e7eb",
borderRadius:"10px",
overflow:"hidden"
}}>

<motion.div
initial={{width:0}}
animate={{width}}
transition={{duration:0.8}}
style={{
height:"8px",
background:"#7c3aed"
}}
/>

</div>

</div>

)

})}

</div>


</div>



{/* AI SECTION */}

<div style={{
margin:"0 40px 40px",
background:"white",
borderRadius:"12px",
padding:"25px",
boxShadow:"0 4px 14px rgba(0,0,0,0.05)"
}}>

<h3>Ask AI Agent</h3>

<div style={{display:"flex",gap:"10px"}}>

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder="Ask about project..."
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
padding:"10px 18px",
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

)

}
