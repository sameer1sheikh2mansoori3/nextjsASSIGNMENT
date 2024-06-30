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



const page = () => {

  return (

    <>
      <Login/>
    </>
  )
}

export default page