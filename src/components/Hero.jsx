import {heroColor1, heroColor2, heroColor1_2, heroGirl, messengerIcon, freelancerIcon, igIcon,clientIcon } from '../assets'

const Hero = () => {
  return (
    <div className="w-full bg-[#263959] relative ">
      <div className="max-w-full w-[90%] m-auto md:flex justify-between  text-white  ">

        <div className=' self-center md:w-1/2 '>
            <h1 className="font-bold text-5xl leading-[4rem] ">90% Clients Hire Freelancer with 
Better Reviews</h1>
             <button className="py-2 px-4 bg-[#1A906B] mt-16 rounded-md cursor-pointer font-bold text-black">
                  Create Profile
             </button>
        </div>
          
        
  <img src={heroColor1} alt="Color Image 1" className="hidden md:block z-0 h-[500px] absolute right-0 md:top-0" />
  <img src={heroColor2} alt="Color Image 2" className="hidden md:block z-[2] h-[450px] absolute right-0 bottom-0 " />
  <img src={heroGirl} alt="" className="z-[10] -pt-14 self-start" />
  <div className='overflow-hidden'>
  <img src={heroColor1_2} alt="Color Image 1" className="md:hidden z-0 h-[500px] absolute right-0 top-[280px] " />
  <img src={heroColor2} alt="Color Image 2" className="md:hidden z-[2] h-[250px] absolute right-[-.4px] bottom-0 " />
</div>

    <div className='z-10 absolute top-1/2 left-1/2 hidden md:block'>
    <div className="flex flex-wrap justify-center items-center h-48 w-48 rounded-full ">
        
    <img
  src={freelancerIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 freelancer-spin "
  style={{ top: "-100%", left: "10%" }}
/>

<img
  src={igIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 ig-spin overflow-hidden"
  style={{ left: "200%", top: "-120%" }}
/>

<img
  src={clientIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 client-spin"
  style={{ left: "180%", top: "40%" }}
/>

<img
  src={messengerIcon}
  alt=""
  className="absolute transform -translate-x-1/2 -translate-y-1/2 messenger-spin"
  style={{ top: "90%", left: "-20%" }}
/>


      
      
     
    </div>
      </div> 
        </div>
        </div>
  )
}

export default Hero