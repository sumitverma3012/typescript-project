import { HasFormatter } from "../interfaces/HasFormatter.js";
// import { Invoice } from "./Invoice.js"
// import { Payment } from "./Payment.js"

// type ListItem = Invoice | Payment;
type ListItem = HasFormatter;
type Position = 'start' | 'end';

export class ListTemplate {

    constructor(private container: HTMLUListElement) {}

    render(item: ListItem, heading: string, position: Position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const para = document.createElement('p');
        para.innerText = item.format();
        li.append(para);

        if(position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

    }
}