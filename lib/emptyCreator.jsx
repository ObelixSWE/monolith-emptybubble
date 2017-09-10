import MonolithUI from 'meteor/monolith-sdk';

let CheckBoxList = MonolithUI.MonolithUI.CheckBoxList;
let CheckButton = MonolithUI.MonolithUI.CheckButton;
let ComboBox = MonolithUI.MonolithUI.ComboBox;
let Image = MonolithUI.MonolithUI.Image;
let ImageButton = MonolithUI.MonolithUI.ImageButton;
let LineEdit = MonolithUI.MonolithUI.LineEdit;
let LineEditComboBox = MonolithUI.MonolithUI.LineEditComboBox;
let PushButton = MonolithUI.MonolithUI.PushButton;
let RadioButtonGroup = MonolithUI.MonolithUI.RadioButtonGroup;
let TextAreaButton = MonolithUI.MonolithUI.TextAreaButton;
let TextAreaComboBox = MonolithUI.MonolithUI.TextAreaComboBox;
let VerticalLayout = MonolithUI.MonolithUI.VerticalLayout;
let HorizontalLayout = MonolithUI.MonolithUI.HorizontalLayout;
let AbsBubble = MonolithUI.MonolithUI.AbsBubble;
let AbsButton = MonolithUI.MonolithUI.AbsButton;
let AbsBubbleConfig = MonolithUI.MonolithUI.AbsBubbleConfig;
let BubbleCreator = MonolithUI.MonolithUI.BubbleCreator;
let BubbleDiscriminator = MonolithUI.MonolithUI.BubbleDiscriminator;

import React from 'react';
import emptyBubble from './emptyBubble';
import emptyBubbleConfig from './emptyBubbleConfig';
import emptyBubbleCreationButton from './emptyBubbleCreationButton';


// Put here your bubble's name

class emptyCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(emptyBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(emptyBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(emptyBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(emptyBubbleCreationButton, { onClick: createConfigArea });
	}
}

const rc = new emptyCreator('empty');
BubbleDiscriminator.BubbleDiscriminator.registerBubbleCreator(rc);
