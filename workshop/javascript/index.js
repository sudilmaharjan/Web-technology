var Dog ={
    name: "Jack",
    breed: "German Shephard",
    age: 11,

    eat: function(){
        console.log(name+ "is eating");
    },

    sleep: function(){
        console.log(name,"is of"+ age ,"so he sleeps at 7pm");
    }
}

var Dog = new Dog();
Dog.age;
Dog.breed;
Dog.sleep();
Dog.eat();

