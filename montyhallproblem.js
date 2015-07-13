/*
Suppose you are on a game show and you are given a chance to choose from three different doors. 
Behind one door is a new new car and behind the other two, goats. After you pick a random door, 
the game show opens another door that reveals a goat. The game show host then asks you, do you want 
to stay with the door you picked or choose the last door which has not been opened. It is in your 
interest to switch doors because orginally you had a 33.3% chance of picking the right door. When the
game show host takes out a goat and asks if you want to switch doors you increase your odds to 66.7%
chance. Most people will not switch due to paranoia, but it is in your interested based increasing your
odds from variable change.
*/

function montyHall(size){

var doesNotSwitchCounter = 0;
var doesSwitchCounter = 0;
var doors = ['car', 'goat', 'goat'];


	//create a function where a person keeps the same door
	function doesNotSwitch(){
		for(var i = 0; i < size; i++){
		//create a random user pick
		var userPick = Math.round(Math.random() * doors.length);
			//if the person picks the car, add to the counter;
			if(doors[userPick] === 'car'){
			//add to the does not switch counter;
			doesNotSwitchCounter++;
			};
		}
	}


	//create a function where the person switches
	function doesSwith(){
		//loop through the amount of games played
		for(var i = 0; i < size; i++){
			//create a random userPick
			var randomIndex; = Math.round(Math.random() * doors.length);
			//splice it out the array
			doors.splice(randomIndex, 1);
			//take out a goat
			doors.splice(doors.indexOf('goat'), 1);
			//assign the last element to what the user picks
			var userPick = doors[0];
				if(doors[0] === 'car'){
					doesSwitchCounter++;
					doors.push('goat', 'goat');
				}else{
					doors.push('car', 'goat');
				}
		}

	}


	//call function1
	doesNotSwitch();
	//call function2
	doesSwitch();

	//return the solution
	return 'The person does not make the switch wins ' + doesNotSwitch + ' times . While the person who does won ' + doesSwitch + ' times.'


}
