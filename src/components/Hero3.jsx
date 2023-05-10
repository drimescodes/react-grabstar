import ReusableHero from "./ReusableHero"
import { hero3image } from "../assets"
const Hero3 = () => {
  return (
    <ReusableHero 
    className={ 'flex md:flex-row-reverse' }
    backgroundImage={hero3image}
    title="Collect Reviews from Your Existing Clients."
    subtitle="To get reviews on, encourage your client to spread the word about 
    your service. 
    Verify your business so your information is eligible to appear on Maps."
    buttonText="How it Works"
    
    />
  )
}

export default Hero3