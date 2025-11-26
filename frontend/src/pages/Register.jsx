import axios from "axios"; import {useState} from "react";
export default function Register(){
 const[email,setEmail]=useState(""); const[pw,setPw]=useState("");
 const reg=async()=>{await axios.post(import.meta.env.VITE_API+"/auth/register",{email,password:pw});};
 return(<div><input onChange={e=>setEmail(e.target.value)}/><input type="password" onChange={e=>setPw(e.target.value)}/></div>);
}