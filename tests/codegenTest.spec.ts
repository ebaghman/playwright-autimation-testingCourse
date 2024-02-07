import { test, expect } from '@playwright/test';
//dummy line for testing commit
//dummy line 2

test('test', async ({ page }) => {
// let x = 'emin'
// console.log(x);

let test ={
  a:1,b:2
}

test={a:1,b:3}

console.log(test)

let y: number = 523456;

console.log(y.toExponential())



let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 


if(4<3){
  console.log("yup")
}

});