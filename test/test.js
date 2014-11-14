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

MonTestCase.prototype.test_retire_deux_pions=function(){
    p.change_player();
    p.get_marble("A1");
    p.get_marble("F6");
    assertTrue(p.get_nb_player_color(1,0)===2);
};