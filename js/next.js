let dest1 = {
    "name" : "beograd",
    "price" : 1500,
    "type" : "ordinary"  
  };

  let dest2 = {
    "name" : "vienna",
    "price" : 2500,
    "type" : "ordinary"  
  };

  let dest3 = {
    "name" : "budapest",
    "price" : 1800,/*  */
    "type" : "ordinary"  
  };

  let dest4 = {
    "name" : "london",
    "price" : 3500,
    "type" : "silver"  
  };

  let dest5 = {
    "name" : "madrid",
    "price" : 1500,
    "type" : "silver"  
  };

  let dest6 = {
    "name" : "moscow",
    "price" : 3500,
    "type" : "gold"  
  };

  let dest7 = {
    "name" : "rome",
    "price" : 3900,
    "type" : "gold"  
  };

  let dest8 = {
    "name" : "Tokyo",
    "price" : 4500,
    "type" : "platinum"  
  };

  let dest9 = {
    "name" : "new york",
    "price" : 4800,
    "type" : "platinum"  
  };

  let destinations = [];
  destinations.push(dest1);
  destinations.push(dest2);
  destinations.push(dest3);
  destinations.push(dest4);
  destinations.push(dest5);
  destinations.push(dest6);
  destinations.push(dest7);
  destinations.push(dest8);
  destinations.push(dest9);

  window.onload = function(){
    var search = window.location.search;

    if(!search){
        return;
    }

    var items = search.substring(1).split("&");
   
    var obj = {};
    for (var i in items) {
      var tmp = items[i].split("=");
      obj[tmp[0]]=tmp[1];
    }

    console.log(obj);
    console.log(destinations);

   
    var hello = document.getElementById("welcome_user");
    hello.innerHTML = "Hello, " + obj.ime + " " + obj.prezime;

  
    var passenger_status = obj.status;
    if (passenger_status) {
      var premium_member = document.getElementById("premium_member");
      premium_member.innerHTML = "You are our premium member, with " + getMembership(obj.klasa) + " membership!";
    }
    

  
    var sel1 = document.getElementById('sel1');
    if (passenger_status) {
    
      var membership = getMembership(obj.klasa);
      for (var i in destinations) {

        var canAdd = false;
        var destination = destinations[i];
        
      
        if (destination.type == "platinum" && membership == "Platinum") {
          canAdd = true;
        } else if (destination.type == "gold" && (membership == "Gold" || membership == "Platinum")) {
          canAdd = true;
        } else if ( destination.type == "silver" &&  (membership == "Gold" || membership == "Platinum" || membership == "Silver")){
          canAdd = true;
        } else if (destination.type == "ordinary") {
          canAdd = true;
        } else {
          canAdd = false;
        }

        if (canAdd){
      
          sel1.options[sel1.options.length] = new Option(destinations[i].name, destinations[i].name);
        }
      }
    } else {
     
      for (var i in destinations) {
        var destination = destinations[i];
        if (destination.type == "ordinary") {
          sel1.options[sel1.options.length] = new Option(destinations[i].name, destinations[i].name);
        }
      }
    }
  };

  function getMembership(value) {
    if (value == 1) {
      return "Silver";
    } else if (value == 2) {
      return "Gold";
    } else {
      return "Platinum";
    }
  }

  function calculate() {
   
    var sel1 = document.getElementById('sel1');
    var dest = sel1.options[sel1.selectedIndex].value;
    for (var i in destinations) {
      if (dest == destinations[i].name) {
        var p = document.getElementById("paragraph");
        p.innerHTML = "<br>Price for your selected destinations is " + destinations[i].price;
      }
    }
    console.log(dest);
  }