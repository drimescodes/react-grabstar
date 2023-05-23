import { Grabstar } from "../assets"
import { IgSocial } from "../assets"
import {fbSocial} from "../assets"
import twtSocial from "../assets/twtSocialIcon.svg"


const Footer = () => {
  return (
    <div className="w-full bg-[#EFF1FD]  md:pb-12 pb-4 text-[#263959] pt-28 overflow-x-hidden">
      <div className="max-w-full  grid grid-cols-3 lg:grid-cols-6  md:gap-y-24 m-auto lg:px-12">



    <div className="col-span-3 lg:col-span-3 flex flex-col items-center  md:justify-self-start ">

    <div className="pb-4 md:pb-0" >
              <img className="w-auto h-9" src={Grabstar} alt="" />
              
              </div>

              <div className="flex items-center justify-center w-[1000%]  lg:mt-8 md:ml-[4rem] md:max-w-[6rem]">
                        
                        <img src={IgSocial} alt="" className=""/>
                        <img src={fbSocial} alt="" className=""/>
                        <img src={twtSocial} alt="" className=""/>
                        
                          
                        </div>

              
</div>
 
    <div className="col-span-1  mx-auto ">
    
              <p className="text-base font-bold tracking-widest uppercase">Services</p>

              <ul className="mt-6 space-y-4">
                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> About Us</a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Our Team </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Features </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Terms</a>
                  </li>
              </ul>
          
    </div>
    <div className="col-span-1  mx-auto">
    
              <p className="text-base font-bold tracking-widest uppercase">Services</p>

              <ul className="mt-6 space-y-4">
                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> About Us</a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Our Team </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Features </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Terms of Use </a>
                  </li>
              </ul>
          
    </div>
    <div className="col-span-1  mx-auto">
    
              <p className="text-base font-bold tracking-widest uppercase">Services</p>

              <ul className="mt-6 space-y-4">
                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> About Us</a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Our Team </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Features </a>
                  </li>

                  <li>
                      <a href="#" title="" className="flex text-base text-realtinic-grey transition-all duration-200 hover:text-realtinic-purple focus:text-realtinic-purple"> Terms of Use </a>
                  </li>
              </ul>
          
    </div>
  
   


      </div>

      <hr className="my-16 border-t-2 border-gray-400 "/>

      <div className="flex justify-between md:px-2 font-semibold">
<p className="">Copyright 2010 - 2021 Ofspace</p>
<p>Privacy Policy  I  Website Terms</p>
      </div>
      <p className="pt-4  text-center text-2xl font-bold">Built by 🖤SEMIRD🖤</p>
      </div>
  )
}

export default Footer