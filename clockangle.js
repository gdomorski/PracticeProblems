/*

Find the largest angle on a clock at any given time. 

* Notes
There is 360 degrees in a circle or in this case the clock
There are 12 hours in a day so each hour is 30 degrees(360/12)
A clock has 60 minute marks
When the minute hand moves the hour hands move with it
If the hour hand has to move 30 degrees in 60 minutes, 30/60 = .5 degrees each minute

* Step 1
First, find the angle of the the hour hand
The hour times 30(the degrees between each hour), and add .5 for each minute

* Step 2
Second, find the angle of the minute hand
If we know the clock moves 30 degrees for each hour, it also moves 30 degrees every five minutes(six degrees a minute) (minutes / 6) * 30

* Step 3
Sometimes the hour minute hand passes by the hour hand and other times it does not, so find if it passed it or not and subtract larger angle from smaller

* Step 4 
At some point the hands will be touching together and there will be no angle, 12 hours in a day, so after 12 o'clock, the hands will touch 11 times

*/




function findAngle(hour, minute){
  let hourHand = Math.abs((hour * 30) + 0.5 * minute);  //Step1
  let minutesHand = Math.abs((minute/6) * 30); //Step2
	
  if((hourHand === 360 && minutesHand === 0) || (hourHand === minutesHand)){   //Step 4
    return 0;
  }

  let angle1 = hourHand - minutesHand; //Step 3 
  let angle2 = minutesHand - hourHand;

  return (angle1 > angle2) ? angle1 : angle2;

}
