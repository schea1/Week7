class Account {
  constructor (name) {
    this.name = name;
    this.balance = 0;
  }
  credit (amt) {
    this.balance += amt;
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

// Create without a loop
const seanAcct = new Account("Sean");
const bradAcct = new Account("Brad");
const georgesAcct = new Account("Georges");

// Add 1000 to each account
seanAcct.credit(1000);
bradAcct.credit(1000);
georgesAcct.credit(1000);

// Display
console.log(seanAcct.describe());
console.log(bradAcct.describe());
console.log(georgesAcct.describe());

// Use a loop
// Per the instructions, store the accounts in an arry
// Then, credit and display the account description

console.log("==========  USE A LOOP ==========");

const accounts = [];
accounts.push(new Account("Sean"));
accounts.push(new Account("Brad"));
accounts.push(new Account("Georges"));

accounts.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
})

console.log("========== METHOD 3 ==========");
// Method 3
// Also, create the accounts in a loop.
// Store all the account customers in an arry

const customers = ["Sean", "Brad", "Georges"]

// Create the accounts and store in an array
const accounts2 = [];
customers.forEach(customer => {
  accounts2.push(new Account(customer));
});

// Credit and display 
accounts2.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
})

// OTHER
// Dynamic variables can also be used
// Can discuss in class.


