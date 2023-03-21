//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total = 0;
  }

  open() {
    
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit(amount) {
    this.total = this.total + amount;
  }

  withdraw(amount) {
    this.total = this.total - amount;
  }

  get balance() {
    return this.total;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
