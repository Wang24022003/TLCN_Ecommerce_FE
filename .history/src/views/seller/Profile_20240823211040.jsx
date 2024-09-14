import React from 'react';
import { FaImages } from "react-icons/fa6";
import { FadeLoader } from 'react-spinners';

const Profile = () => {

     const image = false
     const loader = true

     return (
          <div className='px-2 lg:px-7 py-5'>
               <div className='w-full flex flex-wrap'>
                    <div className='w-full md:w-6/12'>
                         <div className='w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]'>
                              <div className='flex justify-center items-center py-3'></div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profile;