// normal function
function foo1()
{
    let add = 10 + 20
    console.log(add)
}

function foo2(val1, val2)
{
    let add = val1 + val2
    console.log(add)
}

function foo3(val1, val2)
{
    let add = val1 + val2
    return add
}

const greet = function() 
{
    console.log("Hello World")
}

// arrow function
const foo4 = n => n * n;

const foo5 = () => 
{
    return "Hello"
}



foo1()
foo2(10, 40)
console.log(foo3(20, 50))
greet();
console.log(foo4())
console.log(foo5())