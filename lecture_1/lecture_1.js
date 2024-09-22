window.onload = () => {

    // Variables

    const buttonA = document.querySelector("#button_A");
    const headingA = document.querySelector("#heading_A");

    let count = 0;

    function clickHandle() {
        count += 1;
        buttonA.textContent = "Try again!";
        headingA.textContent = `${count} clicks so far`;
    }

    buttonA.addEventListener('click', clickHandle);

    // Examples of variables

    // Strings

    let nameSingleString = 'Andrei';
    let nameDoubleString = "Michael";
    let nameBackQuotes = `John`;

    const singleQuotes = document.getElementById('string_single_quotes');
    singleQuotes.textContent = nameSingleString;

    const doubleQuotes = document.getElementById('string_double_quotes');
    doubleQuotes.textContent = nameDoubleString;

    const backQuotes = document.getElementById('string_back_quotes');
    backQuotes.textContent = nameBackQuotes;

    // Booleans

    let isOpen = true;

    const booleanValue = document.getElementById('boolean_value');
    booleanValue.textContent = isOpen;

    const changeBooleanBtn = document.getElementById('change_boolean');
    changeBooleanBtn.onclick = () => {
        isOpen = !isOpen;
        booleanValue.textContent = isOpen;
    }

    let isClicked = false;

    const booleanValueIf = document.getElementById('boolean_value_if');
    const changeBooleanIf = document.getElementById('change_boolean_if');

    changeBooleanIf.onclick = () => {
        isClicked = !isClicked;
        if (isClicked) {
            booleanValueIf.textContent = 'button was clicked';
        } else {
            booleanValueIf.textContent = '';
        }
    }

    // Arrays

    let colors = [ 'red', 'white', 'black' ];

    let transactions = [ 1000, 900, 14000 ];

    let emptyArray = [];

    let arrayWithNulls = [ 'person', null, 'another person' ];

    let arrayWithObjects = [
        { name: 'Andrei', age: 18 },
        { name: 'Michael', age: 4 },
        { name: 'Lisa', age: 71 },
    ];

    // For loop

    const newArray = [];
    for (let i = 0; i < arrayWithObjects.length; i++) {
        console.log(arrayWithObjects[i]);
        newArray.push(arrayWithObjects[i].age);
    }

    console.log(newArray);

    let listOfNames = '';
    for (let i = 0; i < arrayWithObjects.length; i++) {
        listOfNames += `<li>Name is ${arrayWithObjects[i].name}</li>`;
    }

    const listElem = document.getElementById('names-list');
//    listElem.innerHTML = listOfNames;

    // Constants

    const pi = 3.14;
    const city = 'Toronto';
    const person = { name: 'Leo', age: 1 };
    const arr = [ 1, 2, 3, 4 ];

    // We can change the array if it is const
//    arr.push(5)
//    console.log(arr);

    // Same for object, we can add new property to object
//    person.location = 'Canada';
//    console.log(person);

    // We can't reassign const object
//    person = { width: 1, height: 2 };

    // We can't declare const without initial value
//    const country;

    // Events

    const btn = document.querySelector('#change_color');

    function random(number) {
      return Math.floor(Math.random() * (number + 1));
    }

    function clickHandler() {
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }

    btn.addEventListener('click', clickHandler);

    const btnFontChange = document.querySelector('#change_font');
    btnFontChange.addEventListener('click', () => {
        const fontWrapper = document.querySelector('#change_font_wrapper');
        const size = Math.floor(Math.random() * 50);
        fontWrapper.style.fontSize = `${size}px`;
    });

    const btnChangeEvent = document.querySelector('#change_event');
    btnChangeEvent.addEventListener('click', changeHandler);

    function changeHandler(event) {
        console.log(event);
    }

    // Forms

    const locationsForm = document.forms.location_form;
    const locationData = document.getElementById('location-data');

    locationsForm.onsubmit = submitHandle;

    function submitHandle() {
        let locationName;
        let locationAddress;
        storeFormValues();
        showFormValues();
        return false;
    }

    function storeFormValues() {
        locationName = locationsForm.name1.value;
        locationAddress = locationsForm.address1.value;

        console.log(locationName, locationAddress);
    }

    function showFormValues() {
        const locationData = document.getElementById('location-data');
        locationData.textContent = `Location name: ${locationName} and address: ${locationAddress}`;
        console.log(locationData.textContent);

        locationData.style.display = 'block';
    }


    // Key events
    const txtIn = document.querySelector("#input-text");
    txtIn.addEventListener('keyup', keyupHandler);

    function keyupHandler(e) {
        const keyupDiv = document.querySelector('#keyup');
        keyupDiv.innerHTML = `<p>${e.keyCode}</p>${keyupDiv.innerHTML}`;
    }

    txtIn.addEventListener('keydown', keydownHandler);

    function keydownHandler(e) {
        const keydownDiv = document.querySelector('#keydown');
        keydownDiv.innerHTML = `<p>${e.keyCode}</p>${keydownDiv.innerHTML}`;
    }

    // Classes

    // Let's recap what is an object
    // Let's start by identifying the problem

    // create person data

    let name = 'Andrei';
    let age = 18;
    let location = 'Toronto';

    // copy and paste - get the error that variable should not be redeclared
//    let name = 'Michael';
//    let age = 4;
//    let location = 'Quebec';

    // try to solve the issue by removing let:
//    name = 'Michael';
//    age = 4;
//    location = 'Quebec';

    // now let's see what we have in our variables
//    console.log(name);
//    console.log(age);

    // here how we can solve it - rename variables:

//    let name2 = 'Michael';
//    let age2 = 4;
//    let location2 = 'Quebec';
//
//    console.log(name2);
//    console.log(age2);

    // Another issue - we can have the same data for different things
    // create car data

//    let name = 'BMW'; // make
//    let age = 16;
//    let location = 'London';

    // To solve problem - we use Objects

    const man = {
        name: 'Andrei',
        age: 18,
        location: 'Toronto',
    }

    console.log(man);

    const cat = {
        name: 'Kitty',
        age: 2,
        location: 'Toronto',
    }

    console.log(cat);

    // We can work with individual properties of objects:

    console.log('This man\'s name is ', man.name);

    // Reassign properties

    man.name = 'John';

    console.log('New name ', man.name);

    // Add new properties to the object

//    console.log(man.income);

    man.income = '$1000';

    console.log(man.income);

    // Object can not only have properties but also methods/functions

    const developer = {
        name: 'Bill',
        showName: function() {
            return this.name;
        },
        showNameIfDay: function(isDay) {
            return isDay ? this.name : null;
        }
    }

    console.log(developer.showName());
    console.log(developer.showNameIfDay(true));
    console.log(developer.showNameIfDay(false));

    // What if we want to create similar objects?

    // We can copy

    const developer2 = {
        name: 'Marshal',
        showName: function() {
            return this.name;
        },
        showNameIfDay: function(isDay) {
            return isDay ? this.name : null;
        }
    }

    // That's where idea of a class comes in. It is like a template

    class Developer {
        name;
        income = 0;
        realEstate = [];
        showName() {
            return this.name;
        }
    }

    const webDev = new Developer();
    console.log(webDev);
    console.log(webDev.showName());

    // Class constructor

    // To customize our object we can do something like this:

    const dev1 = new Developer();
    dev1.name = '1';

    const dev2 = new Developer();
    dev2.name = '2';

    // Instead people decided to have constructors

    // while creating object we can pass parameters to it in order to customize

    class Animal {
        name;
        age;
        breed;
        constructor(nameIn, ageIn) {
            this.name = nameIn;
            this.age = ageIn;
        }
    }

    const dog = new Animal();
    console.log(dog);

    const mouse = new Animal('Micky', 1);
    console.log(mouse);

    // We can extend other classes

    class Zoo extends Animal {
        city;
        constructor(cityIn, nameIn, ageIn) {
            super(nameIn, ageIn);
            this.city = cityIn;
        }
    }

    const monkey = new Zoo('Vancouver', 'ABC', 2);
    console.log(monkey);

    // Location

    console.log(window.location);

    console.log('href', window.location.href);
    console.log('host', window.location.host);
    console.log('search', window.location.search);

    // How it may be useful?

    const queryParam = window.location.search;

    const locationSpan = document.getElementById('location');

    if (queryParam === '?lang=en') {
        locationSpan.textContent = 'English Page';
    } else if (queryParam === '?lang=fr') {
        locationSpan.textContent = 'French Page';
    }

    const colorSpan = document.getElementById('color');
    if (queryParam === '?red') {
        colorSpan.style.backgroundColor = 'red';
    } else if (queryParam === '?yellow') {
        colorSpan.style.backgroundColor = 'yellow';
    }

    // Let's change window.location

    const link = document.getElementById('google-link');
    link.onclick = () => {
        window.location = 'https://humber.ca';
        return false;
    }
}
