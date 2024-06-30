import Image from "next/image";
import styles from "./page.module.css";
import Box from '../../components/Box';
import Hero from "./svg/Hero";
import People from './svg/People'
import Icon from './svg/Icon'
import Boat from './svg/Boat'


//page.js

export default function Home() {
  return (
    <div>
      {/* navbar */}
      
      <div className="d-flex ">
        



<div className="d-flex justify-content-center align-items-center border w-100 vh-100">
  <div className="d-flex flex-column w-25">
  <div className="rounded mx-2 my-2 border-2 border border-success d-flex flex-column w-100 p-3">
      
      <div className="d-flex border-success">
        <People/>
        <h1 className="font-weight-bold">
        People
        </h1>
      </div>
      <div>
      Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
      </div>
    </div>
    {/* <Box headings={'People'} paragraph={'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.'}/> */}
    <div className="rounded mx-2 my-2 border-2 border border-success d-flex flex-column h-25 w-100 p-3">
      
      <div className="d-flex">
       <Boat/>
        <h1 className="font-weight-bold">
        Product
        </h1>
      </div>
      <div>
      Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
      </div>
    </div>
  </div>
  <div className="d-flex flex-column w-25">
 {/* we are  */}
 <div className="rounded mx-2 my-2 border-2 border border-success d-flex flex-column w-100 p-3">
      
      <div className="d-flex">
        <Icon/>
        <h1 className="font-weight-bold">
        Place
        </h1>
      </div>
      <div>
      Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
      </div>
    </div>
  {/* we are adding */}
  <div className="rounded mx-2 my-2 border-2 border border-success d-flex flex-column w-100 p-3">
      
      <div className="d-flex">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_4273)">
<rect x="8" y="13" width="24" height="19" fill="#0096C8"/>
<path d="M26.6667 17.5498C26.1833 17.0665 25.3833 17.0665 24.9 17.5498L17.65 24.7998L15 22.1498C14.5167 21.6665 13.7167 21.6665 13.2333 22.1498C12.75 22.6332 12.75 23.4332 13.2333 23.9165L16.4667 27.1498C17.1167 27.7998 18.1667 27.7998 18.8167 27.1498L26.65 19.3165C27.15 18.8332 27.15 18.0332 26.6667 17.5498ZM31.6667 4.99984H30V3.33317C30 2.4165 29.25 1.6665 28.3333 1.6665C27.4167 1.6665 26.6667 2.4165 26.6667 3.33317V4.99984H13.3333V3.33317C13.3333 2.4165 12.5833 1.6665 11.6667 1.6665C10.75 1.6665 10 2.4165 10 3.33317V4.99984H8.33333C6.48333 4.99984 5.01667 6.49984 5.01667 8.33317L5 31.6665C5 33.4998 6.48333 34.9998 8.33333 34.9998H31.6667C33.5 34.9998 35 33.4998 35 31.6665V8.33317C35 6.49984 33.5 4.99984 31.6667 4.99984ZM30 31.6665H10C9.08333 31.6665 8.33333 30.9165 8.33333 29.9998V13.3332H31.6667V29.9998C31.6667 30.9165 30.9167 31.6665 30 31.6665Z" fill="#0096C8"/>
<path d="M26.7958 17.3625C26.3125 16.8792 25.5125 16.8792 25.0292 17.3625L17.7792 24.6125L15.1292 21.9625C14.6458 21.4792 13.8458 21.4792 13.3625 21.9625C12.8792 22.4458 12.8792 23.2458 13.3625 23.7292L16.5958 26.9625C17.2458 27.6125 18.2958 27.6125 18.9458 26.9625L26.7792 19.1292C27.2792 18.6458 27.2792 17.8458 26.7958 17.3625Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_4273">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

        <h1 className="font-weight-bold">
        Program
        </h1>
      </div>
      <div>
      Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
      </div>
    </div>
  </div>
</div>


      </div>

     
    </div>
  );
}
