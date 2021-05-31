export class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //   this.amount = a;
    //   this.client = c;
    //   this.details = d;
    // }
    // another way of writing and assigning them, this works only if we use access modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
