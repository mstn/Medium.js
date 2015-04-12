'use strict';

// test if the library instantiates correctly
Tinytest.add('medium.is', function (test) {
  // create a fake dom element just to create a medium object
  var domElement = $('<div/>').get(0);
  var medium = new Medium({
    element:domElement
  });
  test.instanceOf(medium, Object);
});
