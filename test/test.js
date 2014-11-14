'use strict';
var MonTestCase = TestCase("MonTestCase");
var p = new Engine();
p.new_board();
p.new_game();


MonTestCase.prototype.test_adjacent=function(){
    var bool= p.near();
    //e.new_board();
    assertTrue(bool);
};

MonTestCase.prototype.test_choix=function(){
    //e.new_board();
    assertTrue(p.select_color(5));
};

MonTestCase.prototype.test_retire_un_pion=function(){
    //e.new_board();
    p.get_marble("A5");
    assertTrue(p.nb_marbles()===35);
};