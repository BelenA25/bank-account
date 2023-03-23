//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total = 0;
    this.active = false;
    this.error = new ValueError();
  }

  open() {
    this.active = true;
  }

  close() {
    this.active = false;
  }

  deposit(amount) {
    if(this.active == false)
    {
      throw this.error;
    }
    this.total = this.total + amount;
  }

  withdraw(amount) {
    if(this.active == false)
    {
      throw this.error;
    }
    this.total = this.total - amount;
  }

  get balance() {
    if(this.active == false)
    {
      throw this.error;
    }
    return this.total;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
