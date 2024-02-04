export default class Messenger {
  port: number;

  constructor(port) {
    this.port = port;
  }

  messagePrint() {
    return `Node and express server is running on port ${this.port}`;
  }
}

/* namespace Messagespace {
  export class Messenger {
    port: number;

    constructor(port) {
      this.port = port;
    }

    messagePrint() {
      return `Node and express server is running on port ${this.port}`;
    }
  }
} */


// we can create classes and then a namespace and merge these.