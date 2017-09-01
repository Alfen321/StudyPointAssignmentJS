function ArrayAssignment() {
    var boys = ["Peter", "lars", "Ole"];
    console.log("Boys array: " + boys);
    var girls = ["Janne", "hanne", "Sanne"];    
    console.log("Girls array: " + girls);

    var all = boys.concat(girls);
    console.log("All array after concat: " + all);
    console.log("With comma seperator: " + all.join());
    console.log("With dash seperator: " + all.join("-"));

    console.log("Adding more people to the Array!")
    all.push("Lone", "Gitte");
    all.unshift("Hans", "Kurt")
    console.log("Added 4 persons: " + all);

    console.log("Removing people from the Array!")
    all.shift("hans");
    all.pop("Gitte");
    console.log("Removed 2 people: " + all);

    console.log("Removing more people from the Array!")
    all.splice(3, 2);
    console.log("Removed 2 people: " + all)

    console.log("Sanne is a stupid feminist, so we reverse the array!")
    all.reverse();
    console.log("Done reversing: " + all);

    console.log("More stupid things...");
    all.sort();
    console.log("Done sorting: " + all);

    console.log("Changing to uppercase!")
    var upperCase = all.map(function(x){ return x.toUpperCase() })
    console.log("Done uppercasing: " + upperCase)

    console.log("Filtering names!") //Not done yet, only gets the small letter!
    var filteredNames = all.filter(function(x){ return x.charAt(0) == "l"})
    console.log("Done filtering: " + filteredNames)
}