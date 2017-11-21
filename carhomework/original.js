showPrice: function() {
    		var carVal = document.getElementById("carSel").value;
    		if (carVal == "Economy") {
    			return this.ecoPrice;
    		} else if (carVal == "Mid Size") {
    			return this.midPrice;
    		}
    	},
    	showCarPrice: function() {
    		return this.showPrice();
    	},
    	showAvail: function() {
    		var carVal = document.getElementById("carSel").value;
    		if (carVal == "Economy") {
    			return this.ecoAvail;
    		} else if (carVal == "Mid Size") {
    			return this.midAvail;
    		}
    	},
    	showCarAvail: function() {
    		return this.showAvail();
    		
    	}
    };
    
    function showThatPrice() {
    	document.getElementById("priceNum").innerHTML = "$" + cars.showPrice();
    	document.getElementById("price").innerHTML = "Price";
    	document.getElementById("availNum").innerHTML = cars.showAvail();
    	document.getElementById("avail").innerHTML = "Available";
    }
    // Name and Email validation Function.
    function confirmInfo() {
    	var first = document.getElementById("fName").value;
    	var last = document.getElementById("lName").value;
    	var cartype = document.getElementById("carSel").value;
    	var carAmount = document.getElementById('availNum').innerHTML;
    	if (first === '' || last === '') {
    		alert("Please fill all fields!");
    		return false;
    	} else if (cartype == "none") {
    		alert('Please Select A Car');
    		return false;
    	} else if (carAmount === '0') {
    		alert("None Of these Cars Are Available!");
    		return false;
    	} else {
    		peopleRented.nameType.push(first + ' ' + last);
    		peopleRented.carType.push( ' ' + cartype);
    		alert('You have now rented your car!');
    		return true;
    	}
    }
    
    function minuscar() {
    	var cartype = document.getElementById("carSel").value;
    	var carAmount = document.getElementById('availNum').innerHTML;
    	if (carAmount == '0') {
    		return false;
    	} else if (cartype == "Mid Size") {
    		cars.midAvail--;
    	} else if (cartype == "Economy") {
    		cars.ecoAvail--;
    	}
    	document.getElementById("availNum").innerHTML = cars.showCarAvail();
    }
    document.getElementById("businessName").innerHTML = "Kyles Automotive";
  