
"use client"

import {useState} from "react"

export default function AIChat({data}){

const [q,setQ] = useState("")
const [a,setA] = useState("")

const ask = async()=>{

const res = await fetch("/api/askai",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
question:q,
data
})

})

const result = await res.json()

setA(result.answer)

}

return(

<div style={{marginTop:"40px",background:"white",padding:"20px",borderRadius:"10px"}}>

<h2>AI Agent</h2>

<input
value={q}
onChange={(e)=>setQ(e.target.value)}
placeholder="Ask about projects"
style={{padding:"10px",width:"100%",marginTop:"10px"}}
/>

<button onClick={ask} style={{marginTop:"10px",padding:"10px 20px"}}>
Ask
</button>

<div style={{marginTop:"20px"}}>

{a}

</div>

</div>

)

}
