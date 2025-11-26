import axios from "axios"; import {useState} from "react";
export default function Login(){
 const[email,setEmail]=useState(""); const[pw,setPw]=useState("");
 const login=async()=>{await axios.post(import.meta.env.VITE_API+"/auth/login",{email,password:pw});};
 return(<div><input onChange={e=>setEmail(e.target.value)}/><input type="password" onChange={e=>setPw(e.target.value)}/></div>);
}