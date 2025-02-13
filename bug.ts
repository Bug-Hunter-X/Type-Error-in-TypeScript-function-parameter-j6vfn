function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];

console.log(greeter(user)); //This will cause a compilation error because the function expects a string, but an array is passed.