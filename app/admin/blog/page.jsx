"use client"
import MDEditor  from "@uiw/react-md-editor"
import React from "react"

export default function Blog(){
    const [value,setvalue] = React.useState("Hello")
    return(
        <div>
         <MDEditor data-color-mode="light" value={value} onChange={setvalue}/>
        </div>
    );
}
