//How would you print/log Johns age?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

  console.log ('Johns age', users[1].age)



//How would you print/log the name of the first object?
  console.log ('The first objects name is', users[0].name)


//How would you print/log the name and age of each user using a for loop?
for (var i = 0; i < users.length; i++) {
  console.log (users[i].name)
  console.log (users[i].age)
}
