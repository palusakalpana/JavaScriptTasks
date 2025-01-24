 //Variable Declaration
 console.log("// Declaring variables using var, let, and const")
 console.log("// var declaration")
 var variable1 = "Hello, World!";
 console.log("Value of variable1 (var):", variable1);
 console.log("// let declaration")
 let variable2 = 42;
 console.log("Value of variable2 (let):", variable2);
 console.log("// const declaration")
 const variable3 = true;
 console.log("Value of variable3 (const):", variable3); 
 //Data Types
 // 1. primitive Data Types
 console.log("// Primitive Data Types")
 console.log("1.Number")
 var num = 2.2;
 var id = 33 ;
 console.log("num: ",num, typeof num)
 console.log("id: ",id, typeof id)
 console.log("2.String")
 var name = "Kalpana";
 var message = "oh! happy Day";
 console.log("name: ",name, typeof name)
 console.log(message, typeof message)
 console.log("3.Boolean")
 var a = true;
 var b = false;
 console.log(a, typeof a)
 console.log(b, typeof b)
 console.log("4.Undefined")
 let x;
 console.log("x is:",x, typeof x); 
 console.log("5.Null") 
 var q = null;
 console.log(q, typeof q)
 console.log("6.Symbol")
 let sym = Symbol('description');
 console.log(sym, typeof sym); 
 console.log("7.BigInt")
 let bigNumber = BigInt(1234567890123456789012345678901234567890);
 console.log(bigNumber, typeof bignumber);
 // 2. Non Primitive Data Types
 console.log("// Non Primitive Data Types")
 console.log("1.array")
 let numbers = [1, 2, "kalp", 4, 5];
 console.log(numbers)
 console.log(numbers[2], typeof numbers);
 console.log("2.Object")
 var person = {
 name: "Kalpana",
 id: 33,
 isActive: true
 };
 console.log(person.name, person.id, person.isActive, typeof person );
 console.log("3.Function")
 function greet() {
 console.log("Hello!");
 }
 greet(); 
 console.log(typeof greet)



