

import { heroImage2 } from '../assets';

const Hero2 = () => {
  return (


    <div className="w-full bg-white relative min-h-screen overflow-hidden">
      <div className="max-w-full w-[90%] m-auto md:flex justify-between  items-center  py-8 gap-40">
        <div className='md:w-[50%] '>
          <img src={heroImage2} alt="" />
        </div>


        <div className='md:w-[50%] text-[#263959] '>
          <div>
            <h1 className='font-bold text-5xl leading-[4rem] pb-8'>Our amazing
              Features Helpfull for your Business</h1>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h4>Collect Reviews </h4>
              <p>Best way to collect review. Invite your client and get review from client.</p>
            </div>
            <div>
              <h4>Top Rated Freelancer</h4>
              <p>Find the right freelancer to begin working on your project within minutes.</p>
            </div>
            <div>
              <h4>Find Out Project</h4>
              <p>Find out project which match your skill and grab the opprtunity to work with popular companies.</p>
            </div>
            <div>
              <h4>Create portfolio</h4>
              <p>Best way to show your outstanding skill by creating portflio and get more clients.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Hero2

