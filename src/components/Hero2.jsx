

import { heroImage2 } from '../assets';
import './FeatureBlock'
import FeatureBlock from './FeatureBlock';

const features = [
  {
    title: 'Collect Reviews',
    description: 'Best way to collect review. Invite your client and get review from client.',
  },
  {
    title: 'Top Rated Freelancer',
    description: 'Find the right freelancer to begin working on your project within minutes.',
  },
  {
    title: 'Find Out Project',
    description: 'Find out project which match your skill and grab the opportunity to work with popular companies.',
  },
  {
    title: 'Create portfolio',
    description: 'Best way to show your outstanding skill by creating a portfolio and get more clients.',
  },
];

const Hero2 = () => {
  return (


    <div className="w-full bg-white relative min-h-screen overflow-hidden ">
      <div className="max-w-full w-[90%] m-auto flex flex-col-reverse md:flex md:flex-row justify-between  items-center  py-8 gap-8 md:gap-40">
        <div className='md:w-[50%] '>
          <img src={heroImage2} alt="" />
        </div>


        <div className='md:w-[50%] text-[#263959] '>
          <div>
            <h1 className='font-bold text-5xl leading-[4rem] pb-12'>Our amazing
              Features Helpfull for your Business</h1>
          </div>

          <div className='grid grid-cols-2 gap-8'>
           {features.map((feature, index) => (
            <FeatureBlock key={index} title={feature.title}>
              {feature.description}
            </FeatureBlock>
           ))}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Hero2

