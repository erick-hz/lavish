import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjThree } from "./Data";

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
