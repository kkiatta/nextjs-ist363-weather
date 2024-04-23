"use client"
//content of the website

import { useEffect, useState } from "react";

import Image from "next/image";

import Button from "../components/Button";
import ButtonDemo from "@/components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "@/components/PeoplePickers";

import Col from "../components/Col"
import Container from "../components/Container";
import List from "../components/List";
import Row from "../components/Row";
import Tabs from "@/components/Tabs";
import Temp from "@/components/Temp";

import { getPeople, getWeatherData, getGeoLocation, getWeatherDataByLatLon} from "../lib/api"

const Homepage = () => {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
    {errorMsg && <div>{errorMsg}</div>}
      {loading ? (
        <Container>
          <p>Loading...</p>
        </Container>
      ) : (
        <Container>
        <Row>
            <Col sm={3} md={4}>
         <h2>{weatherData.city.name}</h2>
         <Temp size= "xl" amount={weatherData.list[0].main.temp}/>
         <p>{weatherData.list[0].weather[0].description}</p>
         <Image 
          src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
          alt={`Weather icon for ${weatherData.list[0].weather[0].description}`}
          width={100}
          height={100}
         />
         </Col>
         <Col sm={9} md={8}>
         {weatherData && daysOfWeek && (
              <section>
                  <Tabs 
                    activeIndex={activeDayIndex}
                    items={daysOfWeek} 
                    clickHandler={setActiveDayIndex}/>
                  <List
                  activeIndex={activeDayIndex}
                  items={weatherData.list}
                  daysOfWeek={daysOfWeek}
                  />
              </section>
                )}
         </Col>
         </Row>
         </Container>
         )}
  </div>
  );
};
export default Homepage;
