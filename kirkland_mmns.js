/********************** 
 * Kirkland_Mmns *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'kirkland_mmns';  // from the Builder filename that created this script
let expInfo = {
    '班別學號 (e.g. 1a01)': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const testloop1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloop1LoopBegin(testloop1LoopScheduler));
flowScheduler.add(testloop1LoopScheduler);
flowScheduler.add(testloop1LoopEnd);



flowScheduler.add(test9RoutineBegin());
flowScheduler.add(test9RoutineEachFrame());
flowScheduler.add(test9RoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const testloop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloop2LoopBegin(testloop2LoopScheduler));
flowScheduler.add(testloop2LoopScheduler);
flowScheduler.add(testloop2LoopEnd);



flowScheduler.add(test17RoutineBegin());
flowScheduler.add(test17RoutineEachFrame());
flowScheduler.add(test17RoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const testloop3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloop3LoopBegin(testloop3LoopScheduler));
flowScheduler.add(testloop3LoopScheduler);
flowScheduler.add(testloop3LoopEnd);



flowScheduler.add(thankRoutineBegin());
flowScheduler.add(thankRoutineEachFrame());
flowScheduler.add(thankRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'kirkland1.csv', 'path': 'kirkland1.csv'},
    {'name': 'kirkland/images/1.png', 'path': 'images/1.png'},
    {'name': 'kirkland/images/2.png', 'path': 'images/2.png'},
    {'name': 'kirkland/images/3.png', 'path': 'images/3.png'},
    {'name': 'kirkland/images/4.png', 'path': 'images/4.png'},
    {'name': 'kirkland/images/5.png', 'path': 'images/5.png'},
    {'name': 'kirkland/images/6.png', 'path': 'images/6.png'},
    {'name': 'kirkland/images/7.png', 'path': 'images/7.png'},
    {'name': 'kirkland/images/8.png', 'path': 'images/8.png'},
    {'name': 'kirkland2.csv', 'path': 'kirkland2.csv'},
    {'name': 'kirkland/images/10.png', 'path': 'images/10.png'},
    {'name': 'kirkland/images/11.png', 'path': 'images/11.png'},
    {'name': 'kirkland/images/12.png', 'path': 'images/12.png'},
    {'name': 'kirkland/images/13.png', 'path': 'images/13.png'},
    {'name': 'kirkland/images/14.png', 'path': 'images/14.png'},
    {'name': 'kirkland/images/15.png', 'path': 'images/15.png'},
    {'name': 'kirkland/images/16.png', 'path': 'images/16.png'},
    {'name': 'kirkland3.csv', 'path': 'kirkland3.csv'},
    {'name': 'kirkland/images/18.png', 'path': 'images/18.png'},
    {'name': 'kirkland/images/19.png', 'path': 'images/19.png'},
    {'name': 'kirkland/images/20.png', 'path': 'images/20.png'},
    {'name': 'kirkland/images/21.png', 'path': 'images/21.png'},
    {'name': 'kirkland/images/22.png', 'path': 'images/22.png'},
    {'name': 'kirkland/images/23.png', 'path': 'images/23.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'kirkland/images/9.png', 'path': 'images/9.png'},
    {'name': 'kirkland/images/17.png', 'path': 'images/17.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u73ed\u5225\u5b78\u865f (e.g. 1a01)"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var textbox;
var ok;
var blank1000Clock;
var b1000;
var test1_8Clock;
var box1;
var box2;
var box3;
var box4;
var opt4_2;
var opt3_2;
var opt2_2;
var opt1_2;
var image;
var blank500Clock;
var b500;
var test9Clock;
var image_2;
var topbox;
var bottombox;
var ok_2;
var line;
var test17Clock;
var box1_3;
var box2_2;
var box3_2;
var box4_2;
var opt4;
var opt3;
var opt2;
var opt1;
var image_3;
var thankClock;
var textbox_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '接下來，你會在螢幕上方看到一條問題，\n而螢幕下方會有四個答案按鈕。\n請用最快的速度解答問題，\n然後將手指點在與正確答案相應的按鈕上。\n\n請留意：題目不需要計算，請用其他方法得出答案。\n準備好後按 “OK” 按鈕即可開始。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok.clock = new util.Clock();
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  b1000 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b1000',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "test1_8"
  test1_8Clock = new util.Clock();
  box1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box1',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.45), (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  box2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.15), (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  box3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box3',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.15, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  box4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box4',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  opt4_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt4_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.15,
    bold: false,
    italic: false,
  });
  opt4_2.clock = new util.Clock();
  
  opt3_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt3_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [0.15, (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt3_2.clock = new util.Clock();
  
  opt2_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt2_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [(- 0.15), (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt2_2.clock = new util.Clock();
  
  opt1_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt1_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [(- 0.45), (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt1_2.clock = new util.Clock();
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [1.35, 0.3],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  b500 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b500',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "test9"
  test9Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.6, 0.47],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  topbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'topbox',
    text: '',
    placeholder: undefined,
    font: 'Noto Sans TC',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.08, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  bottombox = new visual.TextBox({
    win: psychoJS.window,
    name: 'bottombox',
    text: '',
    placeholder: undefined,
    font: 'Noto Sans TC',
    pos: [0, (- 0.22)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.08, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  ok_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_2',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok_2.clock = new util.Clock();
  
  line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line', 
    vertices: [[-[0.1, 0][0]/2.0, 0], [+[0.1, 0][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 0.16)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "test17"
  test17Clock = new util.Clock();
  box1_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box1_3',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.45), (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  box2_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box2_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.15), (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  box3_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box3_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.15, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  box4_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box4_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'aliceblue', colorSpace: 'rgb',
    fillColor: 'aliceblue', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  opt4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt4',
    text: '2.5',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt4.clock = new util.Clock();
  
  opt3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt3',
    text: '2',
    font: 'Noto Sans TC',
    pos: [0.15, (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt3.clock = new util.Clock();
  
  opt2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt2',
    text: '0.25',
    font: 'Noto Sans TC',
    pos: [(- 0.15), (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt2.clock = new util.Clock();
  
  opt1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'opt1',
    text: '0.2',
    font: 'Noto Sans TC',
    pos: [(- 0.45), (- 0.2)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  opt1.clock = new util.Clock();
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'kirkland/images/17.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.22], 
    draggable: false,
    size : [0.6, 0.5],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "thank"
  thankClock = new util.Clock();
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '恭喜你！你已完成成熟數感（一）之測試。\n請不要離開頁面，等待下一步指示。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok to account for continued clicks & clear times on/off
    ok.reset()
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(textbox);
    introComponents.push(ok);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok* updates
    if (t >= 0 && ok.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok.tStart = t;  // (not accounting for frame time here)
      ok.frameNStart = frameN;  // exact frame index
      
      ok.setAutoDraw(true);
    }
    
    
    // if ok is active this frame...
    if (ok.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok.status === PsychoJS.Status.STARTED) {
      // check whether ok has been pressed
      if (ok.isClicked) {
        if (!ok.wasClicked) {
          // store time of first click
          ok.timesOn.push(ok.clock.getTime());
          // store time clicked until
          ok.timesOff.push(ok.clock.getTime());
        } else {
          // update time clicked until;
          ok.timesOff[ok.timesOff.length - 1] = ok.clock.getTime();
        }
        if (!ok.wasClicked) {
          // end routine when ok is clicked
          continueRoutine = false;
          
        }
        // if ok is still clicked next frame, it is not a new click
        ok.wasClicked = true;
      } else {
        // if ok is clicked next frame, it is a new click
        ok.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok hasn't started / has finished
      ok.clock.reset();
      // if ok is clicked next frame, it is a new click
      ok.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok.numClicks', ok.numClicks);
    psychoJS.experiment.addData('ok.timesOn', ok.timesOn);
    psychoJS.experiment.addData('ok.timesOff', ok.timesOff);
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank1000MaxDurationReached;
var blank1000MaxDuration;
var blank1000Components;
function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank1000Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    blank1000MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000.started', globalClock.getTime());
    blank1000MaxDuration = null
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(b1000);
    
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank1000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000' ---
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b1000* updates
    if (t >= 0.0 && b1000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b1000.tStart = t;  // (not accounting for frame time here)
      b1000.frameNStart = frameN;  // exact frame index
      
      b1000.setAutoDraw(true);
    }
    
    
    // if b1000 is active this frame...
    if (b1000.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b1000.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b1000.tStop = t;  // not accounting for scr refresh
      b1000.frameNStop = frameN;  // exact frame index
      // update status
      b1000.status = PsychoJS.Status.FINISHED;
      b1000.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000' ---
    for (const thisComponent of blank1000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank1000.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank1000MaxDurationReached) {
        blank1000Clock.add(blank1000MaxDuration);
    } else {
        blank1000Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testloop1;
function testloop1LoopBegin(testloop1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'kirkland1.csv',
      seed: undefined, name: 'testloop1'
    });
    psychoJS.experiment.addLoop(testloop1); // add the loop to the experiment
    currentLoop = testloop1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestloop1 of testloop1) {
      snapshot = testloop1.getSnapshot();
      testloop1LoopScheduler.add(importConditions(snapshot));
      testloop1LoopScheduler.add(test1_8RoutineBegin(snapshot));
      testloop1LoopScheduler.add(test1_8RoutineEachFrame());
      testloop1LoopScheduler.add(test1_8RoutineEnd(snapshot));
      testloop1LoopScheduler.add(blank500RoutineBegin(snapshot));
      testloop1LoopScheduler.add(blank500RoutineEachFrame());
      testloop1LoopScheduler.add(blank500RoutineEnd(snapshot));
      testloop1LoopScheduler.add(testloop1LoopEndIteration(testloop1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testloop1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloop1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testloop2;
function testloop2LoopBegin(testloop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'kirkland2.csv',
      seed: undefined, name: 'testloop2'
    });
    psychoJS.experiment.addLoop(testloop2); // add the loop to the experiment
    currentLoop = testloop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestloop2 of testloop2) {
      snapshot = testloop2.getSnapshot();
      testloop2LoopScheduler.add(importConditions(snapshot));
      testloop2LoopScheduler.add(test1_8RoutineBegin(snapshot));
      testloop2LoopScheduler.add(test1_8RoutineEachFrame());
      testloop2LoopScheduler.add(test1_8RoutineEnd(snapshot));
      testloop2LoopScheduler.add(blank500RoutineBegin(snapshot));
      testloop2LoopScheduler.add(blank500RoutineEachFrame());
      testloop2LoopScheduler.add(blank500RoutineEnd(snapshot));
      testloop2LoopScheduler.add(testloop2LoopEndIteration(testloop2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testloop2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloop2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testloop3;
function testloop3LoopBegin(testloop3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'kirkland3.csv',
      seed: undefined, name: 'testloop3'
    });
    psychoJS.experiment.addLoop(testloop3); // add the loop to the experiment
    currentLoop = testloop3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestloop3 of testloop3) {
      snapshot = testloop3.getSnapshot();
      testloop3LoopScheduler.add(importConditions(snapshot));
      testloop3LoopScheduler.add(test1_8RoutineBegin(snapshot));
      testloop3LoopScheduler.add(test1_8RoutineEachFrame());
      testloop3LoopScheduler.add(test1_8RoutineEnd(snapshot));
      testloop3LoopScheduler.add(blank500RoutineBegin(snapshot));
      testloop3LoopScheduler.add(blank500RoutineEachFrame());
      testloop3LoopScheduler.add(blank500RoutineEnd(snapshot));
      testloop3LoopScheduler.add(testloop3LoopEndIteration(testloop3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testloop3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloop3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test1_8MaxDurationReached;
var test1_8MaxDuration;
var test1_8Components;
function test1_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test1_8' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    test1_8Clock.reset();
    routineTimer.reset();
    test1_8MaxDurationReached = false;
    // update component parameters for each repeat
    opt4_2.setText(String(Opt4));
    opt3_2.setText(String(Opt3));
    opt2_2.setText(String(Opt2));
    opt1_2.setText(String(Opt1));
    image.setImage(Qimage);
    psychoJS.experiment.addData('test1_8.started', globalClock.getTime());
    test1_8MaxDuration = null
    // keep track of which components have finished
    test1_8Components = [];
    test1_8Components.push(box1);
    test1_8Components.push(box2);
    test1_8Components.push(box3);
    test1_8Components.push(box4);
    test1_8Components.push(opt4_2);
    test1_8Components.push(opt3_2);
    test1_8Components.push(opt2_2);
    test1_8Components.push(opt1_2);
    test1_8Components.push(image);
    
    for (const thisComponent of test1_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test1_8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test1_8' ---
    // get current time
    t = test1_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *box1* updates
    if (t >= 0.0 && box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1.tStart = t;  // (not accounting for frame time here)
      box1.frameNStart = frameN;  // exact frame index
      
      box1.setAutoDraw(true);
    }
    
    
    // if box1 is active this frame...
    if (box1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box2* updates
    if (t >= 0.0 && box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2.tStart = t;  // (not accounting for frame time here)
      box2.frameNStart = frameN;  // exact frame index
      
      box2.setAutoDraw(true);
    }
    
    
    // if box2 is active this frame...
    if (box2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box3* updates
    if (t >= 0.0 && box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3.tStart = t;  // (not accounting for frame time here)
      box3.frameNStart = frameN;  // exact frame index
      
      box3.setAutoDraw(true);
    }
    
    
    // if box3 is active this frame...
    if (box3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box4* updates
    if (t >= 0.0 && box4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4.tStart = t;  // (not accounting for frame time here)
      box4.frameNStart = frameN;  // exact frame index
      
      box4.setAutoDraw(true);
    }
    
    
    // if box4 is active this frame...
    if (box4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *opt4_2* updates
    if (t >= 0 && opt4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt4_2.tStart = t;  // (not accounting for frame time here)
      opt4_2.frameNStart = frameN;  // exact frame index
      
      opt4_2.setAutoDraw(true);
    }
    
    
    // if opt4_2 is active this frame...
    if (opt4_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt4_2.status === PsychoJS.Status.STARTED) {
      // check whether opt4_2 has been pressed
      if (opt4_2.isClicked) {
        if (!opt4_2.wasClicked) {
          // store time of first click
          opt4_2.timesOn.push(opt4_2.clock.getTime());
          // store time clicked until
          opt4_2.timesOff.push(opt4_2.clock.getTime());
        } else {
          // update time clicked until;
          opt4_2.timesOff[opt4_2.timesOff.length - 1] = opt4_2.clock.getTime();
        }
        if (!opt4_2.wasClicked) {
          // end routine when opt4_2 is clicked
          continueRoutine = false;
          
        }
        // if opt4_2 is still clicked next frame, it is not a new click
        opt4_2.wasClicked = true;
      } else {
        // if opt4_2 is clicked next frame, it is a new click
        opt4_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt4_2 hasn't started / has finished
      opt4_2.clock.reset();
      // if opt4_2 is clicked next frame, it is a new click
      opt4_2.wasClicked = false;
    }
    
    // *opt3_2* updates
    if (t >= 0 && opt3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt3_2.tStart = t;  // (not accounting for frame time here)
      opt3_2.frameNStart = frameN;  // exact frame index
      
      opt3_2.setAutoDraw(true);
    }
    
    
    // if opt3_2 is active this frame...
    if (opt3_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt3_2.status === PsychoJS.Status.STARTED) {
      // check whether opt3_2 has been pressed
      if (opt3_2.isClicked) {
        if (!opt3_2.wasClicked) {
          // store time of first click
          opt3_2.timesOn.push(opt3_2.clock.getTime());
          // store time clicked until
          opt3_2.timesOff.push(opt3_2.clock.getTime());
        } else {
          // update time clicked until;
          opt3_2.timesOff[opt3_2.timesOff.length - 1] = opt3_2.clock.getTime();
        }
        if (!opt3_2.wasClicked) {
          // end routine when opt3_2 is clicked
          continueRoutine = false;
          
        }
        // if opt3_2 is still clicked next frame, it is not a new click
        opt3_2.wasClicked = true;
      } else {
        // if opt3_2 is clicked next frame, it is a new click
        opt3_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt3_2 hasn't started / has finished
      opt3_2.clock.reset();
      // if opt3_2 is clicked next frame, it is a new click
      opt3_2.wasClicked = false;
    }
    
    // *opt2_2* updates
    if (t >= 0 && opt2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt2_2.tStart = t;  // (not accounting for frame time here)
      opt2_2.frameNStart = frameN;  // exact frame index
      
      opt2_2.setAutoDraw(true);
    }
    
    
    // if opt2_2 is active this frame...
    if (opt2_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt2_2.status === PsychoJS.Status.STARTED) {
      // check whether opt2_2 has been pressed
      if (opt2_2.isClicked) {
        if (!opt2_2.wasClicked) {
          // store time of first click
          opt2_2.timesOn.push(opt2_2.clock.getTime());
          // store time clicked until
          opt2_2.timesOff.push(opt2_2.clock.getTime());
        } else {
          // update time clicked until;
          opt2_2.timesOff[opt2_2.timesOff.length - 1] = opt2_2.clock.getTime();
        }
        if (!opt2_2.wasClicked) {
          // end routine when opt2_2 is clicked
          continueRoutine = false;
          
        }
        // if opt2_2 is still clicked next frame, it is not a new click
        opt2_2.wasClicked = true;
      } else {
        // if opt2_2 is clicked next frame, it is a new click
        opt2_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt2_2 hasn't started / has finished
      opt2_2.clock.reset();
      // if opt2_2 is clicked next frame, it is a new click
      opt2_2.wasClicked = false;
    }
    
    // *opt1_2* updates
    if (t >= 0 && opt1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt1_2.tStart = t;  // (not accounting for frame time here)
      opt1_2.frameNStart = frameN;  // exact frame index
      
      opt1_2.setAutoDraw(true);
    }
    
    
    // if opt1_2 is active this frame...
    if (opt1_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt1_2.status === PsychoJS.Status.STARTED) {
      // check whether opt1_2 has been pressed
      if (opt1_2.isClicked) {
        if (!opt1_2.wasClicked) {
          // store time of first click
          opt1_2.timesOn.push(opt1_2.clock.getTime());
          // store time clicked until
          opt1_2.timesOff.push(opt1_2.clock.getTime());
        } else {
          // update time clicked until;
          opt1_2.timesOff[opt1_2.timesOff.length - 1] = opt1_2.clock.getTime();
        }
        if (!opt1_2.wasClicked) {
          // end routine when opt1_2 is clicked
          continueRoutine = false;
          
        }
        // if opt1_2 is still clicked next frame, it is not a new click
        opt1_2.wasClicked = true;
      } else {
        // if opt1_2 is clicked next frame, it is a new click
        opt1_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt1_2 hasn't started / has finished
      opt1_2.clock.reset();
      // if opt1_2 is clicked next frame, it is a new click
      opt1_2.wasClicked = false;
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test1_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test1_8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test1_8' ---
    for (const thisComponent of test1_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test1_8.stopped', globalClock.getTime());
    psychoJS.experiment.addData('opt4_2.numClicks', opt4_2.numClicks);
    psychoJS.experiment.addData('opt4_2.timesOn', opt4_2.timesOn);
    psychoJS.experiment.addData('opt4_2.timesOff', opt4_2.timesOff);
    psychoJS.experiment.addData('opt3_2.numClicks', opt3_2.numClicks);
    psychoJS.experiment.addData('opt3_2.timesOn', opt3_2.timesOn);
    psychoJS.experiment.addData('opt3_2.timesOff', opt3_2.timesOff);
    psychoJS.experiment.addData('opt2_2.numClicks', opt2_2.numClicks);
    psychoJS.experiment.addData('opt2_2.timesOn', opt2_2.timesOn);
    psychoJS.experiment.addData('opt2_2.timesOff', opt2_2.timesOff);
    psychoJS.experiment.addData('opt1_2.numClicks', opt1_2.numClicks);
    psychoJS.experiment.addData('opt1_2.timesOn', opt1_2.timesOn);
    psychoJS.experiment.addData('opt1_2.timesOff', opt1_2.timesOff);
    // the Routine "test1_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(b500);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b500* updates
    if (t >= 0.0 && b500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b500.tStart = t;  // (not accounting for frame time here)
      b500.frameNStart = frameN;  // exact frame index
      
      b500.setAutoDraw(true);
    }
    
    
    // if b500 is active this frame...
    if (b500.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b500.tStop = t;  // not accounting for scr refresh
      b500.frameNStop = frameN;  // exact frame index
      // update status
      b500.status = PsychoJS.Status.FINISHED;
      b500.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test9MaxDurationReached;
var test9MaxDuration;
var test9Components;
function test9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test9' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    test9Clock.reset();
    routineTimer.reset();
    test9MaxDurationReached = false;
    // update component parameters for each repeat
    image_2.setImage('kirkland/images/9.png');
    topbox.setText('');
    topbox.refresh();
    bottombox.setText('');
    bottombox.refresh();
    // reset ok_2 to account for continued clicks & clear times on/off
    ok_2.reset()
    psychoJS.experiment.addData('test9.started', globalClock.getTime());
    test9MaxDuration = null
    // keep track of which components have finished
    test9Components = [];
    test9Components.push(image_2);
    test9Components.push(topbox);
    test9Components.push(bottombox);
    test9Components.push(ok_2);
    test9Components.push(line);
    
    for (const thisComponent of test9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test9' ---
    // get current time
    t = test9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *topbox* updates
    if (t >= 0.0 && topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      topbox.tStart = t;  // (not accounting for frame time here)
      topbox.frameNStart = frameN;  // exact frame index
      
      topbox.setAutoDraw(true);
    }
    
    
    // if topbox is active this frame...
    if (topbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bottombox* updates
    if (t >= 0.0 && bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottombox.tStart = t;  // (not accounting for frame time here)
      bottombox.frameNStart = frameN;  // exact frame index
      
      bottombox.setAutoDraw(true);
    }
    
    
    // if bottombox is active this frame...
    if (bottombox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_2* updates
    if (t >= 0 && ok_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_2.tStart = t;  // (not accounting for frame time here)
      ok_2.frameNStart = frameN;  // exact frame index
      
      ok_2.setAutoDraw(true);
    }
    
    
    // if ok_2 is active this frame...
    if (ok_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_2.status === PsychoJS.Status.STARTED) {
      // check whether ok_2 has been pressed
      if (ok_2.isClicked) {
        if (!ok_2.wasClicked) {
          // store time of first click
          ok_2.timesOn.push(ok_2.clock.getTime());
          // store time clicked until
          ok_2.timesOff.push(ok_2.clock.getTime());
        } else {
          // update time clicked until;
          ok_2.timesOff[ok_2.timesOff.length - 1] = ok_2.clock.getTime();
        }
        if (!ok_2.wasClicked) {
          // end routine when ok_2 is clicked
          continueRoutine = false;
          
        }
        // if ok_2 is still clicked next frame, it is not a new click
        ok_2.wasClicked = true;
      } else {
        // if ok_2 is clicked next frame, it is a new click
        ok_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_2 hasn't started / has finished
      ok_2.clock.reset();
      // if ok_2 is clicked next frame, it is a new click
      ok_2.wasClicked = false;
    }
    
    // *line* updates
    if (t >= 0.0 && line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line.tStart = t;  // (not accounting for frame time here)
      line.frameNStart = frameN;  // exact frame index
      
      line.setAutoDraw(true);
    }
    
    
    // if line is active this frame...
    if (line.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test9' ---
    for (const thisComponent of test9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test9.stopped', globalClock.getTime());
    psychoJS.experiment.addData('topbox.text',topbox.text)
    psychoJS.experiment.addData('bottombox.text',bottombox.text)
    psychoJS.experiment.addData('ok_2.numClicks', ok_2.numClicks);
    psychoJS.experiment.addData('ok_2.timesOn', ok_2.timesOn);
    psychoJS.experiment.addData('ok_2.timesOff', ok_2.timesOff);
    // the Routine "test9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test17MaxDurationReached;
var test17MaxDuration;
var test17Components;
function test17RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test17' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    test17Clock.reset();
    routineTimer.reset();
    test17MaxDurationReached = false;
    // update component parameters for each repeat
    // reset opt4 to account for continued clicks & clear times on/off
    opt4.reset()
    // reset opt3 to account for continued clicks & clear times on/off
    opt3.reset()
    // reset opt2 to account for continued clicks & clear times on/off
    opt2.reset()
    // reset opt1 to account for continued clicks & clear times on/off
    opt1.reset()
    psychoJS.experiment.addData('test17.started', globalClock.getTime());
    test17MaxDuration = null
    // keep track of which components have finished
    test17Components = [];
    test17Components.push(box1_3);
    test17Components.push(box2_2);
    test17Components.push(box3_2);
    test17Components.push(box4_2);
    test17Components.push(opt4);
    test17Components.push(opt3);
    test17Components.push(opt2);
    test17Components.push(opt1);
    test17Components.push(image_3);
    
    for (const thisComponent of test17Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test17RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test17' ---
    // get current time
    t = test17Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *box1_3* updates
    if (t >= 0.0 && box1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1_3.tStart = t;  // (not accounting for frame time here)
      box1_3.frameNStart = frameN;  // exact frame index
      
      box1_3.setAutoDraw(true);
    }
    
    
    // if box1_3 is active this frame...
    if (box1_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box2_2* updates
    if (t >= 0.0 && box2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2_2.tStart = t;  // (not accounting for frame time here)
      box2_2.frameNStart = frameN;  // exact frame index
      
      box2_2.setAutoDraw(true);
    }
    
    
    // if box2_2 is active this frame...
    if (box2_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box3_2* updates
    if (t >= 0.0 && box3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3_2.tStart = t;  // (not accounting for frame time here)
      box3_2.frameNStart = frameN;  // exact frame index
      
      box3_2.setAutoDraw(true);
    }
    
    
    // if box3_2 is active this frame...
    if (box3_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *box4_2* updates
    if (t >= 0.0 && box4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4_2.tStart = t;  // (not accounting for frame time here)
      box4_2.frameNStart = frameN;  // exact frame index
      
      box4_2.setAutoDraw(true);
    }
    
    
    // if box4_2 is active this frame...
    if (box4_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *opt4* updates
    if (t >= 0 && opt4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt4.tStart = t;  // (not accounting for frame time here)
      opt4.frameNStart = frameN;  // exact frame index
      
      opt4.setAutoDraw(true);
    }
    
    
    // if opt4 is active this frame...
    if (opt4.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt4.status === PsychoJS.Status.STARTED) {
      // check whether opt4 has been pressed
      if (opt4.isClicked) {
        if (!opt4.wasClicked) {
          // store time of first click
          opt4.timesOn.push(opt4.clock.getTime());
          // store time clicked until
          opt4.timesOff.push(opt4.clock.getTime());
        } else {
          // update time clicked until;
          opt4.timesOff[opt4.timesOff.length - 1] = opt4.clock.getTime();
        }
        if (!opt4.wasClicked) {
          // end routine when opt4 is clicked
          continueRoutine = false;
          
        }
        // if opt4 is still clicked next frame, it is not a new click
        opt4.wasClicked = true;
      } else {
        // if opt4 is clicked next frame, it is a new click
        opt4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt4 hasn't started / has finished
      opt4.clock.reset();
      // if opt4 is clicked next frame, it is a new click
      opt4.wasClicked = false;
    }
    
    // *opt3* updates
    if (t >= 0 && opt3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt3.tStart = t;  // (not accounting for frame time here)
      opt3.frameNStart = frameN;  // exact frame index
      
      opt3.setAutoDraw(true);
    }
    
    
    // if opt3 is active this frame...
    if (opt3.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt3.status === PsychoJS.Status.STARTED) {
      // check whether opt3 has been pressed
      if (opt3.isClicked) {
        if (!opt3.wasClicked) {
          // store time of first click
          opt3.timesOn.push(opt3.clock.getTime());
          // store time clicked until
          opt3.timesOff.push(opt3.clock.getTime());
        } else {
          // update time clicked until;
          opt3.timesOff[opt3.timesOff.length - 1] = opt3.clock.getTime();
        }
        if (!opt3.wasClicked) {
          // end routine when opt3 is clicked
          continueRoutine = false;
          
        }
        // if opt3 is still clicked next frame, it is not a new click
        opt3.wasClicked = true;
      } else {
        // if opt3 is clicked next frame, it is a new click
        opt3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt3 hasn't started / has finished
      opt3.clock.reset();
      // if opt3 is clicked next frame, it is a new click
      opt3.wasClicked = false;
    }
    
    // *opt2* updates
    if (t >= 0 && opt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt2.tStart = t;  // (not accounting for frame time here)
      opt2.frameNStart = frameN;  // exact frame index
      
      opt2.setAutoDraw(true);
    }
    
    
    // if opt2 is active this frame...
    if (opt2.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt2.status === PsychoJS.Status.STARTED) {
      // check whether opt2 has been pressed
      if (opt2.isClicked) {
        if (!opt2.wasClicked) {
          // store time of first click
          opt2.timesOn.push(opt2.clock.getTime());
          // store time clicked until
          opt2.timesOff.push(opt2.clock.getTime());
        } else {
          // update time clicked until;
          opt2.timesOff[opt2.timesOff.length - 1] = opt2.clock.getTime();
        }
        if (!opt2.wasClicked) {
          // end routine when opt2 is clicked
          continueRoutine = false;
          
        }
        // if opt2 is still clicked next frame, it is not a new click
        opt2.wasClicked = true;
      } else {
        // if opt2 is clicked next frame, it is a new click
        opt2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt2 hasn't started / has finished
      opt2.clock.reset();
      // if opt2 is clicked next frame, it is a new click
      opt2.wasClicked = false;
    }
    
    // *opt1* updates
    if (t >= 0 && opt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt1.tStart = t;  // (not accounting for frame time here)
      opt1.frameNStart = frameN;  // exact frame index
      
      opt1.setAutoDraw(true);
    }
    
    
    // if opt1 is active this frame...
    if (opt1.status === PsychoJS.Status.STARTED) {
    }
    
    if (opt1.status === PsychoJS.Status.STARTED) {
      // check whether opt1 has been pressed
      if (opt1.isClicked) {
        if (!opt1.wasClicked) {
          // store time of first click
          opt1.timesOn.push(opt1.clock.getTime());
          // store time clicked until
          opt1.timesOff.push(opt1.clock.getTime());
        } else {
          // update time clicked until;
          opt1.timesOff[opt1.timesOff.length - 1] = opt1.clock.getTime();
        }
        if (!opt1.wasClicked) {
          // end routine when opt1 is clicked
          continueRoutine = false;
          
        }
        // if opt1 is still clicked next frame, it is not a new click
        opt1.wasClicked = true;
      } else {
        // if opt1 is clicked next frame, it is a new click
        opt1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if opt1 hasn't started / has finished
      opt1.clock.reset();
      // if opt1 is clicked next frame, it is a new click
      opt1.wasClicked = false;
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test17Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test17RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test17' ---
    for (const thisComponent of test17Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test17.stopped', globalClock.getTime());
    psychoJS.experiment.addData('opt4.numClicks', opt4.numClicks);
    psychoJS.experiment.addData('opt4.timesOn', opt4.timesOn);
    psychoJS.experiment.addData('opt4.timesOff', opt4.timesOff);
    psychoJS.experiment.addData('opt3.numClicks', opt3.numClicks);
    psychoJS.experiment.addData('opt3.timesOn', opt3.timesOn);
    psychoJS.experiment.addData('opt3.timesOff', opt3.timesOff);
    psychoJS.experiment.addData('opt2.numClicks', opt2.numClicks);
    psychoJS.experiment.addData('opt2.timesOn', opt2.timesOn);
    psychoJS.experiment.addData('opt2.timesOff', opt2.timesOff);
    psychoJS.experiment.addData('opt1.numClicks', opt1.numClicks);
    psychoJS.experiment.addData('opt1.timesOn', opt1.timesOn);
    psychoJS.experiment.addData('opt1.timesOff', opt1.timesOff);
    // the Routine "test17" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankMaxDurationReached;
var thankMaxDuration;
var thankComponents;
function thankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    // Disable auto-download (optional)
    psychoJS._saveResults = 0;
    
    // --- 1. Collect all trial data ---
    let allData = [];
    if (typeof psychoJS.experiment.getTrialData === 'function') {
      allData = psychoJS.experiment.getTrialData();
    }
    if (allData.length === 0 && psychoJS.experiment._trialsData) {
      allData = psychoJS.experiment._trialsData;
    }
    
    // --- 2. Build CSV ---
    let csvData = '';
    if (allData.length > 0) {
      const allKeys = new Set();
      for (const row of allData) {
        Object.keys(row).forEach(key => allKeys.add(key));
      }
      const headers = Array.from(allKeys);
      const csvRows = [];
      csvRows.push(headers.map(h => escapeCSV(h)).join(','));
      for (const row of allData) {
        const values = headers.map(header => {
          let val = row[header];
          if (val === undefined || val === null) val = '';
          return escapeCSV(val);
        });
        csvRows.push(values.join(','));
      }
      csvData = csvRows.join('\n');
    }
    
    // --- 3. Upload to OSF ---
    if (csvData) {
      const participantId = expInfo["班別學號 (e.g. 1a01)"] || 'unknown';
      const filename = `data/${participantId}_${expName}_${expInfo["date"]}.csv`;
      const proxyUrl = 'https://corsproxy.io/';
      const targetUrl = 'https://pipe.jspsych.org/api/data/';
      
      // First try via proxy
      fetch(proxyUrl + '?' + encodeURIComponent(targetUrl), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
        body: JSON.stringify({
          experimentID: 'vP8PYZm1pp0u',
          filename: filename,
          data: csvData
        })
      })
      .then(response => {
        if (response.ok) console.log('✅ Data uploaded via proxy');
        else throw new Error(`Proxy failed: ${response.status}`);
      })
      .catch(() => {
        // Fallback: direct fetch
        return fetch(targetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
          body: JSON.stringify({
            experimentID: 'vP8PYZm1pp0u',
            filename: filename,
            data: csvData
          })
        });
      })
      .then(response => {
        if (response && !response.ok) throw new Error('Direct upload failed');
        if (response && response.ok) console.log('✅ Data uploaded directly');
      })
      .catch(err => {
        console.error('All upload attempts failed:', err);
      });
    } else {
      console.warn('No data to save');
    }
    
    // --- 4. Thank‑you routine setup ---
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    thankClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    thankMaxDurationReached = false;
    psychoJS.experiment.addData('thank.started', globalClock.getTime());
    thankMaxDuration = null;
    thankComponents = [];
    thankComponents.push(textbox_2);
    for (const comp of thankComponents) {
      if (comp && 'status' in comp) comp.status = PsychoJS.Status.NOT_STARTED;
    }
    return Scheduler.Event.NEXT;
  };  // <-- closes the async function
}     // <-- closes the outer function

// Helper function (already in your file, keep it)
function escapeCSV(field) {
  if (typeof field === 'string') {
    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
      field = field.replace(/"/g, '""');
      return `"${field}"`;
    }
    return field;
  }
  return String(field);
}


function thankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank' ---
    // get current time
    t = thankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textbox_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      textbox_2.tStop = t;  // not accounting for scr refresh
      textbox_2.frameNStop = frameN;  // exact frame index
      // update status
      textbox_2.status = PsychoJS.Status.FINISHED;
      textbox_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank' ---
    for (const thisComponent of thankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thank.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thankMaxDurationReached) {
        thankClock.add(thankMaxDuration);
    } else {
        thankClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
