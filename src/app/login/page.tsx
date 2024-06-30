"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Hero from '../svg/Hero';
import UpperHero from '../svg/UpperHero'
import JoinHero from '../svg/Join';
import Or from '../svg/OrConnect';
import { usePathname } from 'next/navigation';
import Login from './../../components/Login';

const NavLinks = [
  { id: 1, name: 'join', path: '/join' },
  { id: 2, name: 'login', path: '/login' },

];

const page = () => {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  const router = useRouter();
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("")
  const submitHandler = async () => {
    const response = await axios.post("/api/users/signup", {
      email: name,
      passWord: passWord
    });
    console.log("Signup success", response.data);
    router.push("/");
   
    setName('')
    setPassWord('')
  }
  return (

    <>
      <Login/>
    </>
  )
}

export default page