'use strict';
var MonTestCase = TestCase("MonTestCase");
var p = new Engine();


MonTestCase.prototype.test_adjacent=function(){
    console.log("test");
    var bool= p.near();
    //e.new_board();
    assertTrue(bool);
};