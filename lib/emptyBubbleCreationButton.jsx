import MonolithUI from 'meteor/monolith-sdk';

let AbsButton = MonolithUI.MonolithUI.AbsButton;



// Write your own names for the button

export default class emptyBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'empty Bubble';
	}

	bubbleName() {
		return 'empty';
	}

/*  FOR THE SECOND BUTTON
	secondAreaName() {
		return 'emptySecondMenuName';
  }
*/
}
