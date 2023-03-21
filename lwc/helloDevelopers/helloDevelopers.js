import { LightningElement } from 'lwc';

export default class HelloDevelopers extends LightningElement {
    message="Hello";

    handleChange(event){
        this.message = event.target.value;
    }
    renderedCallback(){
        console.log('rendered callback invoked');
    }
}