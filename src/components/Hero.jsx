import {heroColor1, heroColor2, heroColor1_2, heroGirl, messengerIcon, freelancerIcon, igIcon,clientIcon } from '../assets'

const Hero = () => {
  return (
    <div className="w-full bg-[#263959] relative min-h-screen overflow-hidden">
      <div className="max-w-full w-[90%] m-auto md:flex justify-between  text-white  mt-16 md:mt-0">

        <div className=' self-center md:w-1/2 '>
            <h1 className="font-bold text-5xl leading-[4rem] ">90% Clients Hire Freelancer with 
Better Reviews</h1>
             <button className="py-2 px-4 bg-[#1A906B] mt-16 rounded-md cursor-pointer font-bold text-black">
                  Create Profile
             </button>
        </div>
          
          {/* image section of hero*/}
        
  <img src={heroColor1} alt="Color Image 1" className="hidden lg:block z-0 h-[500px] absolute  right-0 md:top-0" />
  <img src={heroColor2} alt="Color Image 2" className="hidden lg:block z-[2] h-[450px] absolute right-0  bottom-0  " />
  <img src={heroGirl} alt="" className="z-[10] -pt-14 self-start relative mt-[5rem] ml-[3rem] md:mt-0" />
  <div className='overflow-hidden'>
  <img
  src={heroColor1_2}
  alt="Color Image 1"
  className="md:hidden z-0 h-[450px] absolute right-0"
  style={
    window.innerWidth < 768
      ? { top: "30rem" }
      : window.innerWidth > 768 && window.innerWidth < 1024
      ? { top: "-200rem" }
      : { top: "30rem" }
  }
/>
<img
  src={heroColor2}
  alt="Color Image 2"
  className="md:hidden z-[2] h-[250px] absolute right-[-.4px]"
  style={
    window.innerWidth < 768
      ? { bottom: "-1.2rem" }
      : window.innerWidth >= 768 && window.innerWidth < 1024
      ? { bottom: "-0.6rem" }
      : { bottom: "-1.2rem" }
  }
/>







</div>

    <div className='z-10 absolute top-1/2 left-1/2  md:block'>
    <div className="flex flex-wrap justify-center items-center h-48 w-48 rounded-full ">
        
    <img
  src={freelancerIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 freelancer-spin"
  style={
    window.innerWidth < 640
      ? { top: "30%", left: "-100%" }
      : window.innerWidth >= 640 && window.innerWidth < 1024
      ? { top: "-75%", left: "20%" }
      : { top: "-100%", left: "10%" }
  }
/>

<img
  src={igIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 ig-spin overflow-hidden"
  style={
    window.innerWidth < 640
      ? { left: "40%", top: "40%" }
      : window.innerWidth >= 640 && window.innerWidth < 1024
      ? { left: "280%", top: "-100%" }
      : { left: "250%", top: "-140%" }
  }
/>

<img
  src={clientIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 client-spin"
  style={
    window.innerWidth < 640
      ? { left: "20%", top: "150%" }
      : window.innerWidth >= 640 && window.innerWidth < 1024
      ? { left: "230%", top: "60%" }
      : { left: "220%", top: "70%" }
  }
/>

<img
  src={messengerIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 messenger-spin"
  style={
    window.innerWidth < 640
      ? { top: "180%", left: "-80%" }
      : window.innerWidth >= 640 && window.innerWidth < 1024
      ? { top: "80%", left: "-20%" }
      : { top: "90%", left: "-30%" }
  }
/>


      
      
     
    </div>
      </div> 
        </div>
        </div>
  )
}

export default Hero