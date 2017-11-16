     
                var carsAvail = {
             name: 'Boch Automotive',
             economyCatagory: 'Economy Cars',
             economyCars: 200,
             economyCarsRented: 100,
             midSizeCatagory: 'Mid Size Cars',
             midSizeCars: 250, 
             midSizeCarsRented: 100,
            
            midSizeAvailable: function () {
                return this.midSizeCars - this.midSizeCarsRented;
                },
            economyAvailable: function () {
                return this.economyCars - this.economyCarsRented;
                },
            minusEconomy: function () {
                return this.economyCarsRented -- ;
            },
            minusMidSize: function () {
                return this.midSizeCarsRented -- ;
                
            }
                };
                
               document.getElementById("businessName").innerHTML = carsAvail.name;
               document.getElementById("midCar").innerHTML = carsAvail.midSizeCatagory;
               document.getElementById("economyCars").innerHTML = carsAvail.economyCatagory;
               
  
            function midSizeAvailable (){
                document.getElementById("eCarsAvail").innerHTML = carsAvail.economyAvailable();
                document.getElementById("MidCarAvail").innerHTML = carsAvail.midSizeAvailable();
            }
            function rentMidSize (){
                document.getElementById("MidCarAvail").innerHTML = carsAvail.minusEconomy();
            }
            function rentEcoSize (){
                document.getElementById("eCarsAvail").innerHTML = carsAvail.minusEconomy();
            }
                