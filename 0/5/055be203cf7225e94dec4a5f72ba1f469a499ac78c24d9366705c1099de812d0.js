// script.aculo.us effects.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = 

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = 

Element.collectTextNodesIgnoreClass = 

Element.setContentZoom = 

Element.getInlineOpacity = 

Element.forceRerendering = 

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: 
    reverse: 
    flicker: 
    wobble: 
    pulse: 
    spring: 
    none: function(pos) {
      return 0;
    },
    full:   },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: 
  multiple: 
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: };

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: 
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: 
  remove: 
  loop: });

Effect.Queues = {
  instances: $H(),
  get: };
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: 
  loop: 
  cancel: 
  event: 
  inspect: });

Effect.Parallel = Class.create(Effect.Base, {
  initialize: 
  update: 
  finish: });

Effect.Tween = Class.create(Effect.Base, {
  initialize: 
  update: });

Effect.Event = Class.create(Effect.Base, {
  initialize: 
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: 
  update: });

Effect.Move = Class.create(Effect.Base, {
  initialize: 
  setup: 
  update: });

// for backwards compatibility
Effect.MoveBy = 

Effect.Scale = Class.create(Effect.Base, {
  initialize: 
  setup: 
  update: 
  finish: 
  setDimensions: });

Effect.Highlight = Class.create(Effect.Base, {
  initialize: 
  setup: 
  update: 
  finish: });

Effect.ScrollTo = 

/* ------------- combination effects ------------- */

Effect.Fade = 

Effect.Appear = 

Effect.Puff = 

Effect.BlindUp = 

Effect.BlindDown = 

Effect.SwitchOff = 

Effect.DropOut = 

Effect.Shake = 

Effect.SlideDown = 

Effect.SlideUp = 

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = 

Effect.Grow = 

Effect.Shrink = 

Effect.Pulsate = 

Effect.Fold = 

Effect.Morph = Class.create(Effect.Base, {
  initialize: 

  setup: 
  update: });

Effect.Transform = Class.create({
  initialize: 
  addTracks: 
  play: });

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = 

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = 
} else {
  Element.getStyles = 
}

Effect.Methods = {
  morph: 
  visualEffect: 
  highlight: };

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  );

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
  );

Element.addMethods(Effect.Methods);