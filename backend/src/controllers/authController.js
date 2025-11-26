import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const register=async(req,res)=>{
  const {email,password}=req.body;
  const exist=await db.query("SELECT * FROM users WHERE email=$1",[email]);
  if(exist.rows.length)return res.status(400).json({error:"Email used"});
  const hashed=await bcrypt.hash(password,10);
  await db.query("INSERT INTO users(email,password) VALUES($1,$2)",[email,hashed]);
  res.json({message:"ok"});
};

export const login=async(req,res)=>{
  const {email,password}=req.body;
  const user=await db.query("SELECT * FROM users WHERE email=$1",[email]);
  if(!user.rows.length)return res.status(400).json({error:"Invalid"});
  const match=await bcrypt.compare(password,user.rows[0].password);
  if(!match)return res.status(400).json({error:"Invalid"});
  const token=jwt.sign({id:user.rows[0].id,email},process.env.JWT_SECRET);
  res.json({token});
};