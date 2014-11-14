'use strict';
var MonTestCase = TestCase("MonTestCase");
var p = new Engine();


MonTestCase.prototype.test_adjacent=function(){
    var bool= p.near();
    //e.new_board();
    assertTrue(bool);
};

MonTestCase.prototype.test_choix=function(){
    //e.new_board();
    assertTrue(p.select_color(5));
};