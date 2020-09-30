//Modeling a circle and add the circle object definition
//Its radius value is input by the user

//Prompt user to enter the circle radius
const r = Number(prompt("Enter the circle radius:"));

//creating the circle object
const circle = {
    circumference:(2*Math.PI*r),
    area:(Math.PI*r**2),
}


console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);