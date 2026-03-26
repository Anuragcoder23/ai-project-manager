
"use client"

import { useEffect, useState } from "react"
import AIChat from "./components/AIChat"

export default function Page(){

  const [projects,setProjects] = useState([])

  const fetchData = async()=>{
    const res = await fetch("/api/sheet")
    const data = await res.json()
    setProjects(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div style={{padding:"40px",fontFamily:"Arial",background:"#f3f4f6",minHeight:"100vh"}}>

      <h1>AI Project Manager Dashboard</h1>

      <button onClick={fetchData} style={{padding:"10px 20px",marginTop:"10px"}}>
        Sync Data
      </button>

      <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

        <div style={{background:"white",padding:"20px",borderRadius:"10px",boxShadow:"0 5px 10px rgba(0,0,0,0.1)"}}>
          <div>Total Projects</div>
          <h2>{projects.length}</h2>
        </div>

      </div>

      <AIChat data={projects}/>

    </div>
  )
}
