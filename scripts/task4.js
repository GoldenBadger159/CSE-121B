/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let info = {
    'name':'Michael Wallentine', 
    'photo':'images/wedding.jpg',
    'favoriteFoods':['pizza', 'hamburger', 'steak', 'roasted potatoes', 'glazed ham'],
    'hobbies':['video games', 'magic the gathering', 'board games', 'game development'],
    'placesLived':[
        {
            'place':'Caldwell',
            'length':'4years'
        },
        {
            'place':'preston',
            'length':'16 years'
        }
    ]
    };
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = info['name'];
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = info['photo'];
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = info['name']
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let list = document.querySelector('#favorite-foods');
info['favoriteFoods'].forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    list.appendChild(li);
})

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let list2 = document.querySelector('#hobbies');
info['hobbies'].forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    list2.appendChild(li);
})
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
let list3 = document.querySelector('#places-lived');
info['placesLived'].forEach((item)=>{
    let dt = document.createElement("dt"); 
    dt.innerText = item['place'];
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement("dd");
    dd.innerText = item['length'];
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    list3.append(dt);
    list3.append(dd);
})



