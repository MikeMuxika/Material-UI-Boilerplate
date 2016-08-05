/*
    Custom theme for Venu
        - The hope is to use this file as much as possible for design, so that we can make efficient changes to styles
        - It seems unwise to remove any existing attribtues
        - Apparently we can also do this for each component (raised button, appbar, drawer, etc.), see below
*/

// For more info, check out the default material-ui theme at
// https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js
// https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/darkBaseTheme.js

import {
    lightBlueA400, lightBlueA200, lightBlue500, lightBlue700, lightBlue100,
    grey100, grey300, grey400, grey500, grey900,
    pinkA200, white, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

var secondaryText = '#727272'
var dividerColor = '#B6B6B6'

const BaseTheme = {
	blue: lightBlueA400,
	pink: pinkA200,
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopDrawerMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56,
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: lightBlueA400,
        primary2Color: lightBlue500,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: grey900,
        secondaryText: secondaryText,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(grey900, 0.3),
        pickerHeaderColor: lightBlue500,
        clockCircleColor: fade(grey900, 0.07),
        shadowColor: fullBlack,
    },
    // Component-Level Overrides
    appBar: {
        // by default, ap pbar uses primary1Color, but we want it to use white. So, we override
        // This only makes sense if we want ALL appbars used to be white.  Otherwise, just set backgroundColor white in styles
        color: 'white',
        textColor: lightBlue500
    }
};

export default BaseTheme;
