import { LightningElement, track } from 'lwc';

export default class FirstLWCComponent extends LightningElement {

    message="Hello";

    constructor(){
        super();
        console.log('Constructor invoked');
        this.message="Hello salesforce";
    }

    ready=false;

    connectedCallback(){
        console.log('connected callback invoked');
        setTimeout(() => {
            this.ready=true;
        },3000);
    }

    renderedCallback(){
        console.log('rendered callback invoked');
    }
}