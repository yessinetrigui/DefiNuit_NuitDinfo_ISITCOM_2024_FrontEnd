import Desc from "./Desc"
import Title from "./Title"

const About = () => {
    return  <div className='grid justify-center items-center text-center bg-cus' id="about">
    <Title title={"Biological Connections"}/>
    <Desc text={"Water Composition: Highlight how the human body is about 60% water and how it parallels the ocean’s water content."}/>
    <Title title={"Health and Healing"}/>
    <Desc text={"Therapeutic Benefits: Explore the healing properties of seawater (thalassotherapy) and ocean-based relaxation."}/>
    <Title title={"Environmental Impact on Health"}/>
    <Desc text={"Ocean Pollution’s Effect: Highlight how microplastics and other pollutants can enter the human body through seafood consumption."}/>

  </div>
}


export default About

