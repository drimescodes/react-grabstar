import ReusableHero from './ReusableHero'
import { hero4image } from '../assets'

const Hero4 = () => {
  return (
    <div className='text-white'>
        <ReusableHero
        className={"bg-[#263959] w-full md:py-[4rem] px-4 md:px-16  gap-y-16" }
        backgroundImage={hero4image}
        title="Collect Reviews from Your Existing Clients."
        subtitle="To get reviews on, encourage your client to spread the word about 
        your service. 
        Verify your business so your information is eligible to appear on Maps."
        buttonText="How it Works"
        textColor='white'
        
        />
    </div>
  )
}

export default Hero4;
