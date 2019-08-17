//trim a layer while keeping dimesions divisible by 2
// Roxanne Albutt: 2019
// License: MIT

#target photoshop

cTID = function(s) {  return app.charIDToTypeID(s);};
sTID = function(s) {  return app.stringIDToTypeID(s);};

// FUNCTIONS

function trimToP2() {
  
  //Trim
  app.activeDocument.trim(TrimType.TRANSPARENT, true, true, true, true);
  
  // Resize canvas to be divisible by 2;
  app.activeDocument.resizeCanvas (  UnitValue(MakeDivisibleByTwo (app.activeDocument.width.value), "px"), 
                                                        UnitValue(MakeDivisibleByTwo (app.activeDocument.height.value), "px"));
}

function MakeDivisibleByTwo(value) {
    if (value % 2 != 0) {
        value = (Math.floor(value / 2) * 2 ) + 2;
        return value;
        }
    else {
        return value;
    }
}

// MAIN SCRIPT

// Make Photoshop the frontmost application
app.bringToFront();

// Save the user's layout
var startRulerUnits = app.preferences.rulerUnits;
var startDisplayDialogs = app.displayDialogs;

// Set the units to pixels and set no dialogs
app.preferences.rulerUnits = Units.PIXELS;
app.displayDialogs = DialogModes.NO;

trimToP2();

// Restore the user's preferences
app.preferences.rulerUnits = startRulerUnits;
app.displayDialogs = startDisplayDialogs;