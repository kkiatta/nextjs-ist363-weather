"use client"

import { useState } from "react";

import Button from "../components/Button";
import ButtonDemo from "@/components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "@/components/PeoplePickers";
import { getPeople} from "../lib/api"


const Homepage = () => {
  const peopleArr = getPeople();
  console.log({peopleArr});
  return (
  <div>
    <h1>Weather app</h1>
      <PeoplePicker people={peopleArr}/>
      <ButtonDemo />
      <ColorPicker />
  </div>
  );
};
export default Homepage;
