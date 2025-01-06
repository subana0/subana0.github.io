

// console.log("hello")

// console.log(typeof())

// Operators

// 1. assignment operators =, +=, -=, *=, /=, %=
// 2. arithmetic operators +, -,*, /, %
// 3. comparison operators ==, !=, >, <, >=, <=, ===
// 4. logical operators &&, ||, !
// 5. ternary operator

// Control Flow

// If else

// let temperature = parseInt(prompt("Enter current temperature"));

// console.log(typeof(marks))
// if(temperature <= 0){
//     console.log("Extremely cold")
// }else if(temperature){
//     console.log("")
// }

// for (i = 1; i <= 10; i++){
//     console.log("it's ok " + i)
// }

// let a = prompt("Multiplication table of");
// for (i = 1; i<= 10; i++) {
//     // console.log(a + " x " +  i + " = " + a * i)
//     console.log(`${a} x ${i} = ${a * i}`)
// }


// let person = {
//     name:"Subana",
//     age:19,
//     height:5,
//     weight :47, 
// }



// function table() {
//     let app = document.getElementById('app')
//     app.innerHTML =""

//     let a = document.getElementById('num').value;
//     for(i = 1; i <= 10; i++) {
//         app.innerHTML += `${a} x ${i} = ${a * i} <br>`
//     }
// }

// table()

function p(data) {
    console.log(data)
}

// p("hello world")

function bill(){
    const name = document.getElementById('iname').value;
    const date = document.getElementById('idate').value;
    const amount = document.getElementById('iamount').value;

    document.getElementById('name').innerHTML = name;
    document.getElementById('date').innerHTML = date;
    document.getElementById('amount').innerHTML = amount;

    document.getElementById('parent').style = "display:block"
}

