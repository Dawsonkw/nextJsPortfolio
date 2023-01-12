import React, { Component } from 'react';
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {VscLocation} from 'react-icons/vsc'
import { FiFacebook } from "react-icons/fi";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_r5ieg6y";
const TEMPLATE_ID = "template_lufahf9";
const USER_ID = "0DEv7bd_vZqmZbu0H";


const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };






class Contact extends Component {
    render() {

        return (
            <div>
                {/* <div className='bg-gray-200 flex justify-center'> */}
                <div className='flex w-full min-h-1/4 max-w-90/1 justify-center items-center'>
                    <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='text-xl text-red-600'>THIS COMPONENT IS CURRENTLY UNDER CONSTRUCTION, to reach out please use one of the resources posted below</h1>
                                <h1 className='font-bold text-4xl tracking-wide text-cream'>Contact Me</h1>
                                <p className='pt-2 text-teal-600 text-sm'> I am currently seeking fulltime employment.  </p>
                            </div>
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-teal-600 '>
                                    <FiPhoneCall />
                                    <span> +15613395893</span> 
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-teal-600'>
                                    <HiOutlineMail />
                                    <span>dawsonkw@gmail.com</span>
                                </div>
                            </div>
                            
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-teal-600'>
                                    <VscLocation />
                                    <span>Longmont, Colorado</span>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 text-3xl text-teal-600'>
                                <a href="#"><FiFacebook /></a>
                            </div>                 
                        </div>
                        <div className='relative'>
                            <div className='absolute w-40 h-40 bg-tan rounded-full -right-20 -top-20'></div>
                            <div className='absolute w-40 h-40 bg-tan rounded-full -left-20 -bottom-20'></div>
                            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 '>
                                <form  action="" className='flex flex-col space-y-4'>
                                    <div>
                                        <label name='to_name' htmlFor="" className='text-sm'>Your Name</label>
                                    </div>
                                        <div>
                                            
                                            <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name='from_name' />
                                        </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Email Address</label>
                                    </div>
                                        <div>
                                            <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name=' from_name' />
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Message</label>
                                    </div>
                                    <div>
                                        <textarea type="text" placeholder='Type a brief message here' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name='message'></textarea>
                                    </div>
                                    </div>
                                    <button type='submit' className='inline-block self-end bg-tan text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                                </form>
                            </div>
                        </div>
                        

                    </div>
                {/* </div> */}
            </div>
            </div>
        );
    }
}



export default Contact;



