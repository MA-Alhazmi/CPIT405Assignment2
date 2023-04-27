class Person {
    constructor() {
        this.fname = document.getElementById("fname").value;
        this.lname = document.getElementById("lname").value;
        this.yob = document.getElementById("yob").value;
    }

    get fullName() {
        return this.fname+" " + this.lname;
    }

    get Age() {
        return new Date().getFullYear() - this.yob;
    }
}

function getResults() {
    const person = new Person();

    document.getElementById("result").innerText = "Full name: " + person.fullName + "\n\n Age: " + person.Age;
}

