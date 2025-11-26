import axios from "axios";
export default function Dashboard(){
 const checkout=async()=>{const res=await axios.post(import.meta.env.VITE_API+"/billing/checkout"); window.location=res.data.url;};
 return(<button onClick={checkout}>Upgrade</button>);
}