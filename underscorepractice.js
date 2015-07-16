<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script>


 	var user = {
   	  username: 'gdomorski',
      country: 'us',
      favoriteProducts: [
        12345,
        54321,
        6524,
        7633,
        86478,
        246764
      ],
      inStockProducts: [
        12345,
        54321,
        246764
      ],
      otherProducts: [
      	888888,
      	999999,
      	111111,
      ],
      addFive: function(value){
      	return value + 5;
      }
    }



var getFavoriteProducts = function(obj){
	

	return _.filter(obj.favoriteProducts, function (value){
		if(obj.inStockProducts.indexOf(value) !== -1){	
			return value;
		}
	})

}


var fetchProducts = function(arr){
	
	$.ajax({
			url: 'http://www.reddit.com/.json',
			success: function(response){
				console.log(response);

			}

		})

}


var anything = getFavoriteProducts(user);
console.log(fetchProducts());



function isOdd(array){

	return _.partition(array, function (value){
		return value %  2 === 0;
	});

}


console.log(isOdd([1,2,3,4,5,6,7]))


function shuffleProducts(obj){

	return _.shuffle(obj.favoriteProducts);

}

console.log(shuffleProducts(user));


function checkNotInStockProducts(collection){

	return _.reject(collection.favoriteProducts, function (value){
		if(collection.inStockProducts.indexOf(value) !== -1){
			return value;
		}

	})

}

console.log(checkNotInStockProducts(user));



function makeMeAnArray(obj){
	return _.toArray(obj)

}

console.log(makeMeAnArray(user));


function doesItHaveThis(obj){
	return _.contains(obj, 'us')
}

console.log(doesItHaveThis(user));



function biggestValue(obj){
	return _.max(obj.favoriteProducts)
}

console.log(biggestValue(user));


function smallestValue(obj){
	return _.min(obj.favoriteProducts)
}

console.log(smallestValue(user));
  


function getFirstFavorite(obj){
	return _.first(obj.favoriteProducts); 

}

console.log(getFirstFavorite(user));



function someNums (obj){
	return _.some(obj.favoriteProducts, function(value){
		return value % 2 === 0
	});

}

console.log(someNums(user));

function everyNums (obj){
	return _.every(obj.favoriteProducts, function(value){
		return value % 2 === 0
	});

}

console.log(everyNums(user));



function userInfo (obj){
	return _.allKeys(obj) 
}

console.log(userInfo(user));

function objSize(obj){
	return _.size(obj);
}

console.log(objSize(user));




//having trouble with this one...

function speak(obj){
	return _.invoke(obj.favoriteProducts, 'sort');
}

console.log(speak(user), 'whatup');




function sample(collection){

	return _.sample(collection.favoriteProducts)

}

function addSomething(obj){

	return _.map(obj.favoriteProducts, function(value){
		return value + 10;

	});
}

console.log(addSomething(user))



function findFirstInStockProduct (obj){
	return _.find(obj.inStockProducts, function(num){ 
		return num > 0; 
	});
}

console.log(findFirstInStockProduct(user));


function omitProducts (obj){
	return _.without(obj.favoriteProducts, 7633, 86478)

}

console.log(omitProducts(user))



function allProducts (obj){
	return _.union(obj.favoriteProducts, obj.otherProducts)

}

console.log(allProducts(user));


function getInfo (obj){
	return _.pick(obj, 'username', 'country');

}


console.log(getInfo(user));


function everythingButlastFav (obj){
	return _.initial(obj.favoriteProducts);

}

console.log(everythingButlastFav(user), 'hollas');







</script>