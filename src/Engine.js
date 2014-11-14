var Engine = function () {
    "use strict";
    var p_board = new Array(6), line, column;
    var player1 = new Array(6);
    var player2 = new Array(6);
    var current_player = 0;
    var p_nb_marble = 36;
    //black = 0;
    //vert= 1
    //blanc = 2
    //bleu = 3
    //rouge = 4
    //jaune =5

    //vide = -1
    var nb_color = 6;

    //fin des variables


    this.new_board = function () {
        for(var i = 0; i < 6; i++){
            p_board[i]= new Array(6);
        }

        p_board[0][1]=1;
        p_board[0][2]=2;
        p_board[0][3]=3;
        p_board[0][4]=4;
        p_board[0][5]=2;
        p_board[0][0]=0;
        p_board[1][1]=2;
        p_board[1][2]=1;
        p_board[1][3]=4;
        p_board[1][4]=5;
        p_board[1][5]=3;
        p_board[1][0]=5;
        p_board[2][0]=3;
        p_board[2][1]=5;
        p_board[2][2]=3;
        p_board[2][3]=2;
        p_board[2][4]=0;
        p_board[2][5]=4;
        p_board[3][0]=4;
        p_board[3][1]=0;
        p_board[3][2]=4;
        p_board[3][3]=1;
        p_board[3][4]=3;
        p_board[3][5]=2;
        p_board[4][0]=2;
        p_board[4][1]=1;
        p_board[4][2]=5;
        p_board[4][3]=0;
        p_board[4][4]=5;
        p_board[4][5]=1;
        p_board[5][0]=5;
        p_board[5][1]=3;
        p_board[5][2]=0;
        p_board[5][3]=4;
        p_board[5][4]=1;
        p_board[5][5]=0;

    };

    this.new_game = function(){
        for(var i =0; i < 6 ; i++){
            player1[i]=0;
            player2[i]=0;
        }


    };


    this.nb_marbles = function () {
        return p_nb_marble;
    };

    this.near = function (){
        var r = true, d = 0;
        line = 0;
        while(r && line < 5){
            //console.log("Line"+line);

            column = 0;
            while( r && column < 5){
                if(p_board[line][column] == p_board[line][column+1] || p_board[line][column] == p_board[line+1][column]){
                    r = false;
                }
                column++;
            }
            line++;
        }
        while(r && d < 5){
            if(p_board[d][5] == p_board[d+1][5] || p_board[5][d] == p_board[5][d+1]){
                r = false;
            }
            d++;
        }

        return r;
    };

    this.select_color = function (color) {
        var bool=false;

        if(color==p_board[0][0] || color==p_board[0][5] || color==p_board[5][0] || color==p_board[5][5])
        bool=true;
        return  bool;
    };

    this.is_empty = function(coord){
        var col;
        var r = true;
        switch(coord[0]){
            case 'A' :
                col = 0;
                break;
            case 'B' :
                col = 1;
                break;
            case 'C' :
                col = 2;
                break;
            case 'D' :
                col = 3;
                break;
            case 'E' :
                col = 4;
                break;
            case 'F' :
                col = 5;
                break;
        }
        if(p_board[col][coord[1]-1]>=0)
        r = false;

        return(r);

    };

    this.change_marble = function(coord, val){
      var col;
       var r;
        switch(coord[0]){
            case 'A' :
                col = 0;
                break;
            case 'B' :
                col = 1;
                break;
            case 'C' :
                col = 2;
                break;
            case 'D' :
                col = 3;
                break;
            case 'E' :
                col = 4;
                break;
            case 'F' :
                col = 5;
                break;
        }
        r = p_board[col][coord[1]-1];
        p_board[col][coord[1]-1] = val;

        return r;
    };

    this.get_marble = function(coord){

        if(!this.is_empty(coord)){
            p_nb_marble--;
            var val = this.change_marble(coord,-1);


            if(current_player === 0){
                player1[val]++;
            }
            else{
                player2[val]++;
            }
        }


    };

    this.change_player = function(){
        if(current_player === 0){
            current_player = 1;
        }else{
            current_player = 0;
        }
    }


    this.get_nb_player_color = function(player, color){
        if(player==0) {
            return (player1[color]);
        }else{
            return (player2[color]);
        }


    }

};
