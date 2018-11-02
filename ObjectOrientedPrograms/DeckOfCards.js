var card = new Array(4);
for (var i = 0; i < card.length; i++) {
    card[i] = new Array(9);
}

var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
var symbol = ["♣", "♦", "♥", "♠"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var u = 0,
    used = [];
var rowRandom = 0,
    columnRandom = 0;
for (var i = 0; i < card.length; i++) {
    for (var j = 0; j < card[i].length; j++) {
        rowRandom = Math.floor(Math.random() * symbol.length);
        columnRandom = Math.floor(Math.random() * rank.length);
        if (!used.includes(rowRandom + " " + columnRandom)) {
            card[i][j] = rank[columnRandom] + " " + symbol[rowRandom];
            used[u++] = rowRandom + " " + columnRandom;
        } else {
            j--;
        }
    }
}

var str = "";
card.sort
for (var i = 0; i < card.length; i++) {
    card[i].sort(function(a, b) { return a.localeCompare(b) });
    str += "Player " + (i + 1) + ": ";
    for (var j = 0; j < card[i].length; j++) {
        str += card[i][j] + ", ";
    }
    console.log(str);
    str = "";
}