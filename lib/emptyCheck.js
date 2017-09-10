/*
*  Name :  RandCheck.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {emptySchema }
*/

import Monolith from 'meteor/monolith-sdk';
let Check = Monolith.Monolith.Check;
let CheckHandler = Monolith.Monolith.CheckHandler;
let BubbleDatabase = Monolith.Monolith.BubbleDatabase;
let aBubbleCollection = Monolith.Monolith.aBubbleCollection;

const emptySchema = {
	//	write your own schema
};


export const emptyCheck = new Check('empty', emptySchema);
CheckHandler.registerCheck(emptyCheck);
