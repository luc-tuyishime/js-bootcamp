// lexical Scope (Static scope)
// local Scope = Defined outside of all code blocks
// global Scope = Defined inside a code block

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';

  if (true) {
    let varFour = 'varFour';
  }
}

if (true) {
  let varThree = 'varThree';
}

console.log(varTwo)
