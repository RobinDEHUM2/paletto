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

MonTestCase.prototype.test_partie_complete_1=function(){
    p.new_board();
    p.new_game();
    p.get_marble("A1");
    p.get_marble("F6");
    console.log("Player 1 noir : "+p.get_nb_player_color(0,0));
    p.change_player();
    p.get_marble("B1");
    p.get_marble("E6");
    p.get_marble("F5");
    p.change_player();
    p.get_marble("A2");
    p.get_marble("A6");
    console.log("Player 1 noir : "+p.get_nb_player_color(0,0));
    p.change_player();
    p.get_marble("A3");
    p.change_player();
    p.get_marble("A5");
    p.get_marble("F4");
    p.get_marble("F1");
    p.get_marble("C1");
    console.log("Player 1 noir : "+p.get_nb_player_color(0,0));
    p.change_player();
    p.get_marble("E1");
    p.get_marble("F3");
    p.get_marble("D6");
    p.get_marble("A4");
    p.change_player();
    p.get_marble("D3");
    p.get_marble("F2");
    p.get_marble("B6");
    console.log("Player 1 noir : "+p.get_nb_player_color(0,0));
    p.change_player();
    p.get_marble("B3");
    p.get_marble("E2");
    p.get_marble("E5");
    p.change_player();
    p.get_marble("B4");
    p.get_marble("C6");
    p.get_marble("D5");
    p.get_marble("E3");

    console.log("Player 1 noir : "+p.get_nb_player_color(0,0));


    assertTrue(p.check_winner()===1);
};

MonTestCase.prototype.test_partie_complete_2=function(){
    //e.new_board();
    p.new_board();
    p.new_game();
    p.get_marble("A1");
    p.get_marble("F6");
    p.change_player();
    p.get_marble("A2");
    p.get_marble("A6");
    p.change_player();
    p.get_marble("A5");
    p.get_marble("F6");
    p.change_player();
    p.get_marble("E6");
    p.get_marble("B1");
    p.get_marble("F5");
    p.change_player();
    p.get_marble("A3");
    p.get_marble("F2");
    p.change_player();
    p.get_marble("C1");
    p.get_marble("F4");
    p.change_player();
    p.get_marble("E1");
    p.get_marble("D6");
    p.get_marble("A4");
    p.get_marble("F3");
    p.change_player();
    p.get_marble("D1");
    p.get_marble("B6");
    p.change_player();
    p.get_marble("E2");
    p.get_marble("E5");
    p.change_player();
    p.get_marble("C6");
    p.get_marble("D5");
    p.get_marble("E3");
    p.change_player();
    p.get_marble("B5");
    p.change_player();
    p.get_marble("D2");
    p.change_player();
    p.get_marble("B2");
    p.get_marble("D3");
    p.change_player();
    p.get_marble("E4");
    p.change_player();
    p.get_marble("C5");
    p.get_marble("B3");
    p.change_player();
    p.get_marble("D4");
    p.get_marble("C2");
    p.change_player();
    p.get_marble("C3");
    p.change_player();
    p.get_marble("B4");
    p.change_player();
    p.get_marble("C4");

    assertTrue(p.check_winner()===1);
};