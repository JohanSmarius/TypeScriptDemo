// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export class Test {
  naam: string = 'Hello world!';
}


let test = new Test();
appDiv.innerText = test.naam;

