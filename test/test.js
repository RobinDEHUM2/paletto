'use strict';
var MonTestCase = TestCase("MonTestCase");
var p = new Engine();


MonTestCase.prototype.test_adjacent=function(){
    console.log("test");
    var bool= p.near();
    //e.new_board();
    assertTrue(bool);
};

MonTestCase.prototype.test_choix=function(){
    console.log("test");
    var color= p.select(0,5);
    //e.new_board();
    assertTrue(color===5);
};