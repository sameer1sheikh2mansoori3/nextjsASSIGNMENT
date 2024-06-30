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
    alert(`email ${name}`);
    alert(`email ${passWord}`);
    setName('')
    setPassWord('')
  }
  return (

    <>
      <div className='container' >
        <div className='row'>
          <div className='col-8 '>
            <UpperHero />
            <div className='container'>
              <Hero />
            </div>
          </div>
          <div className='col-4 d-flex flex-column'>
            <div className='d-flex flex-row'>

            </div>
            <div className='d-flex flex-column'>
              <div className='d-flex flex-column'>
                <div className='d-flex flex-column'>
                  <div className='d-flex justify-content-start w-100'>
                <div className='d-flex justify-content-between w-50'>
                <Link
                      className = {
                        isActive ? `text-decoration-none `:`text-decoration-none`
                      
                      }

                      href='/login'>login</Link>
                  <Link
                      className = {
                        isActive ? `text-decoration-none `:`text-decoration-non`
                      
                      }

                      href='/join'>join</Link>
                </div>
                  </div>
                  <div className='container flex-column'>
                    <JoinHero />
                    <Or />
                  </div>
                </div>


                <form action="">
                  <div
                  className='d-flex flex-column'>
                    <input type="email" className='rounded my-2' placeholder='email' value={name} onChange={(e) => {
                    setName(e.target.value)
                  }} />
                  <input type="text" className='rounded my-2' placeholder='password' value={passWord} onChange={(e) => {
                    setPassWord(e.target.value)
                  }} />
                  <button type="button" className="btn btn-primary rounded my-4" onClick={() => {
                    return submitHandler()
                  }}>Agree and continue</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page