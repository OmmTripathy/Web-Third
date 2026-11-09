/*
Error	          Meaning
SyntaxError	      Incorrect JavaScript syntax
ReferenceError    Accessing a variable that doesn't exist
TypeError	      Performing an invalid operation on a value
RangeError	      Using a value outside its allowed range
*/
/*
Property 	      Description
error.name	      Type of error
error.message	  Error description
error.stack	      Stack trace showing where error occurred
*/

try
{
    let result = 10 / 0
    console.log(result)

    console.log(x); // Error occurs
}
catch (error)
{
    console.log(error.name);
    console.log(error.message);
}
console.log()


// finally block -- executes at all conditions
try 
{
    console.log("Try block");
    throw new Error("Something failed");
}
catch (error) 
{
    console.log("Error:", error.message);
}
finally 
{
    console.log("Finally block");
}
console.log()


// throw -- manual error throw
try
{
    let x = 15

    if(x < 18)
        throw new Error("Not Eligible")
}
catch(error)
{
    console.log(error.message)
}