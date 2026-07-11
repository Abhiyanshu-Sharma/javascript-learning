function hello() {
    console.log("hello world");
}

hello.call();

function about(hobby, favMusician) {
        console.log(this.firstName, this.age, hobby, favMusician);
    };

const user1 = {
    firstName: 'Abhiyanshu',
    age: 10
};

const user2 = {
    firstName: 'Abhi',
    age: 8,
};

about.call();
about.call(user1);
about.call(user2, "guitar", "Mozart");

about.apply(user2, ["guitar", "Mozart"]); // can pass in a array\list

const Func = about.bind(user1, "guitar", "bach"); // returns a functionx

Func();