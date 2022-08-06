import React from 'react'
import { useState,useEffect } from 'react';
import NumberBox from '../numberbox';

export default function Countdown(){
  const [newTime, setNewTime] = useState(0)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");
  var time = 1;

 const timeToDays = time * 60 * 60 * 24 * 1000;
 useEffect(() => {


  var updateTime = setInterval(() => {
    var now = new Date().getTime();

    var difference = countDownDate - now;

    var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);


    if (difference <= 0) {
      clearInterval(updateTime);
      setMessage("The Launch Has Started");
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  })

  return () => {
    clearInterval(updateTime);
  }

}, [time,countDownDate]);

 let countDownDate = new Date().getTime() + timeToDays;
  return(
    <TimerContainer
    days={days}
    hours={hours}
    minutes={minutes}
    seconds={seconds}
  />
  )
  
}

export const TimerContainer = ({days, hours, minutes ,seconds }) => {

  

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

 if (seconds <=0 && minutes <=0 && hours <=0 && days <=0){
   daysFlip =  false;
   hoursFlip =  false;
   minutesFlip = false;
   secondsFlip = false;
 }

 if(seconds == 0){
   if( minutes !=0){
    seconds=59;
   }
   
   secondsFlip = false;
   minutesFlip = true;
 }
 if (minutes == 0 ){
    if( hours !=0){
      minutes=59;
    }
   
   minutesFlip = false;
   hoursFlip = true;
 }

 if( hours == 0){
   hoursFlip = false;
   if(days !=0){
     daysFlip = true;
   }
   
 }

 

   if(days <10){
     days="0"+days
   }

   if(hours <10){
     hours="0"+hours
   }

   if(minutes <10){
     minutes="0"+minutes
   }

   if(seconds < 10){
     seconds="0"+seconds
     
   }
  
    return (

     <div className="mx-5 rounded-xl justify-center items-center mt-5">
       <div className="grid grid-cols-4 gap-2 md:flex md:items-center md:justify-between md:mt-2  rounded-xl ">
            <NumberBox num={days } unit="Days" flip={daysFlip} />
            <span className=" hidden text-5xl -mt-12 md:inline-block md:text-5xl font-normal text-gray-0 ">:</span>
            <NumberBox num={hours } unit="Hours" flip={hoursFlip} />
            <span className=" hidden text-5xl -mt-12 md:inline-block md:text-5xl font-normal text-gray-0 ">:</span>
            <NumberBox num={minutes} unit="Minutes" flip={minutesFlip}/>
            <span className=" hidden text-5xl -mt-12 md:inline-block md:text-5xl font-normal text-gray-0 ">:</span>
            <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
        </div>
   
      </div>
    )
}