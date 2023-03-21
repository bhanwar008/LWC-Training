import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track message="Hello";

   @track
    item={
        message : 'Hello world',
        id : 'ins2'
    }

    handleChange(event){
        this.item.message = event.target.value;
    }
    
}