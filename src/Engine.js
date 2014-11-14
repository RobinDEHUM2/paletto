var Engine = function () {
    "use strict";
    var p_board = new Array(6), line, column;
    //black = 0;
    //vert= 1
    //blanc = 2
    //bleu = 3
    //rouge = 4
    //jaune =5
    var nb_color = 6;
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
    this.new_board();

    this.nb_marbles = function () {
        return p_nb_marble;
    };

    this.near = function (){
        var r = true, d = 0;
        line = 0;
        while(r && line < 5){
            console.log("Line"+line);

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
    }


};
