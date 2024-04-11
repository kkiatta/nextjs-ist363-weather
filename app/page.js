"use client"

import { useEffect, useState } from "react";

import Image from "next/image";

import Button from "../components/Button";
import ButtonDemo from "@/components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "@/components/PeoplePickers";
import Tabs from "@/components/Tabs";
import { getPeople, getWeatherData, getGeoLocation, getWeatherDataByLatLon} from "../lib/api"


const Homepage = () => {
  const [weatherData, setWeatherData] = useState (null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [daysOfWeek, setDaysofWeek] = useState(null);
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  const peopleArr = getPeople();

   //useEffect as function that will run when something happen **after something happen
  useEffect(()=>{
    getGeoLocation()
    .then((position) => {
      console.log(position);
      setLocation(position);
    })
      .catch((error) => {
        setErrorMsg(error);
      });
  },[]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await getWeatherDataByLatLon(location);
        setWeatherData(response);
      };
      location ? fetchData(): null;
  },[location]);

    useEffect(() => {
      //filter out the days of the week
      const tempWeek  = [];

      weatherData && 
        weatherData.list.filter((block) => {
          const date = new Date(block.dt * 1000); //handle date form weatherapp
          const options = { weekday: "short"}; //hold structure set
          const day = date.toLocaleDateString("en-US", options); //localize date format 
         // console.log(day);
         if (!tempWeek.includes(day)) {// ! mean if you do not have date inside we
            tempWeek.push(day);
         }
      });

      setDaysofWeek(tempWeek);
      // then set state with the days of the wekk
    }, [weatherData]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getWeatherData();
  //     setWeatherData(response);
  //   };
  //   fetchData();
  // }, []); //feed two thing 1. arrow function, array of dependecy that trigger it
  
  //console.log({peopleArr}); 
  return (
  <div>
    <h1>Weather app</h1>
    {errorMsg && <div>{errorMsg}</div>}
      {weatherData && (
        <div>
         <h2>{weatherData.city.name}</h2>
         <p>Current temp: {weatherData.list[0].main.temp}&deg; C</p>
         <p>{weatherData.list[0].weather[0].description}</p>
         <Image 
          src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
          alt={`Weather icon for ${weatherData.list[0].weather[0].description}`}
          width={100}
          height={100}
         />
         </div>
         )}
      {/*<PeoplePicker people={peopleArr}/>
      <ButtonDemo />
  <ColorPicker />*/}
  {daysOfWeek && (
  <section>
      <Tabs 
      activeIndex={activeDayIndex}
      items={daysOfWeek} 
      clickHandler={setActiveDayIndex}/>
      <div>
        {weatherData?.list
        .filter((block) => {
        const date = new Date(block.dt * 1000);
        const options = { weekday: "short"};
        const day = date.toLocaleDateString("en-US", options);
        return day === daysOfWeek[activeDayIndex];
      })
      .map((block,index) => {
        return <p key={index}>{block.main.temp}</p>;
      })}
      </div>
  </section>
    )}
  </div>
  );
};
export default Homepage;
