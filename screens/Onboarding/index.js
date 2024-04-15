import React, { useEffect } from 'react'
import OnBoardingSlider from '../../components/OnboardingSlider'
import { setItemInStorage } from '../../utitlity';
function OnboardingScreen() {
  useEffect(()=>{
    setItemInStorage("onboardingViewed", JSON.stringify(true));
  },[])
  return (
    <OnBoardingSlider/>
  )
}

export default OnboardingScreen