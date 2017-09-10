import Monolith from 'meteor/monolith-sdk';


let BubbleDatabase = Monolith.Monolith.BubbleDatabase;
let aBubbleCollection = Monolith.Monolith.aBubbleCollection;

export const emptyDb = new BubbleDatabase('empty');
