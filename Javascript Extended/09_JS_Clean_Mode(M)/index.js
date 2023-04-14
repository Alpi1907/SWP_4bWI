//2. Variables
//Name your variables in a way that they reveal the intention behind it

//bad:
let daysSLV = 10;

let y = new Date().getFullYear();

let ok;

if (user.age > 30) {
  ok = true;
}

//good:
const MAX_AGE = 30;

let daysSinceLastVisit = 10;

let currentYear = new Date().getFullYear();

//...

const isUserOlderThanAllowed = user.age > MAX_AGE;


//Don't add extra unneeded word to the variable names

//bad:
let nameValue;
let theProduct;

//good:
let name;
let product;


//Use the same vocabulary for the same type of variable

//bad:
getUserInfo();
getClientData();
getCustomerRecord();

//good:
getProduct();



//3. Functions
//Use long and desriptive names. Their name should say what they do.

//bad:
function email(user) {
  // implementation
}

//good:
function sendEmailUser(emailAddress) {
  // implementation
}


//Use default arguments instead of conditionals

//bad:
function createShape(type) {
  const shapeType = type || "circle";
  // ...
}

//good:
function createShape(type = "circle") {
  // ...
}


//Avoid executing multiple actions within a single function

//bad:
function notifyUsers(users) {
  users.forEach(user => {
    const userRecord = database.lookup(user);
    if (userRecord.isVerified()) {
      notify(user);
    }
  });
}

//good:
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}


//Use 'Object.assign' to set default objects

//bad:
const shapeConfig = {
  type: "circle",
  width: 150,
  height: null
};

function createShape(config) {
  config.type = config.type || "circle";
  config.width = config.width || 300;
  config.height = config.height || 300;
}

createShape(shapeConfig);

//good:

const shapeConfig1 = {
  type: "circle",
  width: 150
  // Exclude the 'height' key
};

function createShape(config) {
  config = Object.assign(
    {
      type: "circle",
      width: 300,
      height: 300
    },
    config
  );
//  ...
}
  
createShape(shapeConfig);


//Don't use flags as parameters because they are telling you that the function is doing more than it should

//bad:
function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}

//good:
function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  createFile(`./public/${name}`);
}


//Don't pollute the Globals

//bad:
Array.prototype.myFunction = function myFunction() {
  // implementation
};

//good:
class SuperArray extends Array {
  myFunc() {
    // implementation
  }
}



//4. Conditionals
//Avoid negative conditionals

//bad:
function isPostNotPublished(post) {
  // implementation
}
if (!isPostNotPublished(post)) {
  // implementation
}

//good:
function isPostPublished(user) {
  // implementation
}
if (isPostPublished(user)) {
  // implementation
}


//Use conditional shorthand

//bad:
if (isValid === true) {
  // do something...
}
if (isValid === false) {
  // do something...
}

//good:
if (isValid) {
  // do something...
}
if (!isValid) {
  // do something...
}



//5. ES Classes
//Everything works just as it did before with prototype only it now looks
//different and you should prefer them over ES5 plain functions

//bad:
const Product = function(name) {
  if (!(this instanceof Product)) {
    throw new Error("Instantiate Product with `new` keyword");
  }
  this.name = name;
};

Product.prototype.getSize = function getSize() { /**/ };

const Tshirt = function(name, color) {
  if (!(this instanceof Tshirt)) {
    throw new Error("Instantiate Tshirt with `new` keyword");
  }
  Product.call(this, name);
  this.color = color;
};

Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;
Tshirt.prototype.printColor = function printColor() { /**/ };

//good:
class Product1 {
  
  constructor(name) {
    this.name = name;
  }
  
  getDiscount() {
    /* ... */
  }
}

class Tshirt1 extends Product {
  
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  
  getSize() {
    /* ... */
  }
}



//6. Avoid Using Eval
/*The Eval function allows us to pass a string to the JavaScript compiler
and have it execute as JavaScript

In simple terms, anything you pass in at runtime gets executed as if it were added at design time
*/

eval("alert('Hi');");

/*This would pop up an alert box with the message "Hi" in it.

Eval function should be avoided because it's not safe and it opens
a potential threat vector for malicious programmers to exploit.
*/ 



/*7. Use JSLint
JSLint is a great tool for helping you identify common problems in your 
JavaScript code, it will pick up bad code that is being masked by the browser.

You can use a different sites like JavaScriptLint.com, 
or you can use one of the many downloadable JSLint tools.

For instance, Visual Studio has an add-in for JSLint that will allow you 
to check for errors at compile-time (or manually).

This will make your code cleaner and it will help 
to prevent those pesky bugs from showing up in production.
*/



/*8. Avoid In General
In general, you should do your best not to repeat yourself, meaning you
shouldn’t write duplicate code, and not to leave tails behind you such as
unused functions and dead code.
*/ 