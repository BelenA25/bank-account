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
    if (this.active == true) {
      throw this.error;
    }
    else {
      this.active = true;
    }
  }

  close() {
    if (this.active == false) {
      throw this.error;
    }
    else {
      this.active = false;
      this.total = 0;
    }
  }

  deposit(amount) {
    if (this.active == false) {
      throw this.error;
    }
    this.total = this.total + amount;
  }

  withdraw(amount) {
    if (this.active == false) {
      throw this.error;
    }
    else {
      if (amount < 0) {
        throw this.error;
      }
      else {
        if (amount > this.total) {
          throw this.error;
        }
        else {
          this.total = this.total - amount;
        }
      }

    }
  }

  get balance() {
    if (this.active == false) {
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
