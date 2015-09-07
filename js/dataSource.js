/**
 * Created by oscar on 4/09/15.
 */
var people = [
    {
        name:"Oscar",
        surname:"Belmonte"
    },
    {
        name:"María del Carmen",
        surname:"Erdozain"
    },
    {
        name:"Martín",
        surname:"Belmonte"
    },
    {
        name:"Gonzalo",
        surname:"Belmonte"
    }
]

var getData = function() {
    var text = "";
    for(i = 0; i < people.length; i++) {
        text += "<tr><td>" + people[i].name + "</td><td>" + people[i].surname + "</td><td><button type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal' onclick='currentIndex(" + i + ")'>Info</button></td></tr>";
    }
    document.getElementById("peopleBody").innerHTML = text;
}

var currentIndex = function(index) {
    document.getElementById("name").innerHTML = people[index].name;
    document.getElementById("surname").innerHTML = people[index].surname;
}
