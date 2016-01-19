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

function getData() {
    var text = "";
    for(i = 0; i < people.length; i++) {
        text += "<tr><td>" + people[i].name + "</td><td>" + people[i].surname + "</td><td><button type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal' onclick='currentIndex(" + i + ")'>Info</button></td></tr>";
    }
    document.getElementById("peopleBody").innerHTML = text;
}

function getData3() {
    var text = "";
    for(var i = 0; i < people.length; i++)
        text += addRow(people[i], i);
    document.getElementById("peopleBody").innerHTML = text;
}

function addRow(person, index) {
    return addRowLabel(
        addPerson(person) +
        addButton(index)
    );
}

function addPerson(person) {
    return addDataLabel(person.name) +
            addDataLabel(person.surname);
}

function addRowLabel(row) {
    return text = "<tr>" + row + "</tr>";
}

function addDataLabel(data) {
    return "<td>" + data + "</td>";
}

function addButton(index) {
    var data = "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal' onclick='currentIndex(" + index + ")'>Info</button>";
    return addDataLabel(data);
}

function currentIndex (index) {
    document.getElementById("name").innerHTML = people[index].name;
    document.getElementById("surname").innerHTML = people[index].surname;
}
