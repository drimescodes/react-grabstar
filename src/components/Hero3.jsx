import ReusableHero from "./ReusableHero"
import { hero3image } from "../assets"
import { hero3invitation } from "../assets"
const Hero3 = () => {
  return (
    <div className="relative">
    <ReusableHero 
    className={ 'flex md:flex-row-reverse     ' }
    backgroundImage={hero3image}
    title="Collect Reviews from Your Existing Clients."
    subtitle="To get reviews on, encourage your client to spread the word about 
    your service. 
    Verify your business so your information is eligible to appear on Maps."
    buttonText="How it Works"
    textColor='#263959'
    
    
    />
 
    <div className="absolute md:top-[50%] md:left-[45%] bottom-[1%] w-[50%] md:w-auto">
        <img src={hero3invitation} alt="" />

    </div>
    </div>

  )
}

export default Hero3