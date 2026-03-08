window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  window.db.ref("rooms/"+window.room+"/timer").on("value", function(snapshot){

let data = snapshot.val();

if(data){

window.timerStart = data.start;

}

});
}

window.Script2 = function()
{
  window.db.ref("rooms/"+window.room+"/timer").on("value", function(snapshot){

let data = snapshot.val();

if(data){

var player = GetPlayer();
player.SetVar("startVideoTimer", true);

}

});
}

window.Script3 = function()
{
  var player = GetPlayer();

window.db.ref("rooms/" + window.room + "/tile").on("value", function(snapshot) {
  var tile = snapshot.val();
  if (tile == null) return;

  player.SetVar("selectedTile", tile);
  player.SetVar("openGameLayer", true);
});
}

window.Script4 = function()
{
  var player = GetPlayer();

window.db.ref("rooms/" + window.room + "/piece").on("value", function(snapshot) {
  var pos = snapshot.val();
  if (pos == null) return;

  player.SetVar("piecePosition", pos);
});
}

window.Script5 = function()
{
  var player = GetPlayer();

window.db.ref("rooms/" + window.room + "/piece").on("value", function(snapshot) {
  var pos = snapshot.val();
  if (pos == null) return;

  player.SetVar("piecePosition", pos);
});
}

window.Script6 = function()
{
  var player = GetPlayer();

window.db.ref("rooms/" + window.room + "/piece").on("value", function(snapshot) {
  var pos = snapshot.val();
  if (pos == null) return;

  player.SetVar("piecePosition", pos);
});
}

window.Script7 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(1);
}

window.Script8 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(2);
}

window.Script9 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(3);
}

window.Script10 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(4);
}

window.Script11 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(5);
}

window.Script12 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(6);
}

window.Script13 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(7);
}

window.Script14 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(8);
}

window.Script15 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(9);
}

window.Script16 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(10);
}

window.Script17 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(11);
}

window.Script18 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(12);
}

window.Script19 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(13);
}

window.Script20 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(14);
}

window.Script21 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(15);
}

window.Script22 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(16);
}

window.Script23 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(17);
}

window.Script24 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(18);
}

window.Script25 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(19);
}

window.Script26 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(20);
}

window.Script27 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(21);
}

window.Script28 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(22);
}

window.Script29 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(23);
}

window.Script30 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(24);
}

window.Script31 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(25);
}

window.Script32 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(26);
}

window.Script33 = function()
{
  window.db.ref("rooms/" + window.room + "/tile").set(27);
}

window.Script34 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);
}

window.Script35 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);
}

window.Script36 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);
}

window.Script37 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);
}

window.Script38 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);
}

window.Script39 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);
}

window.Script40 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);
}

window.Script41 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);
}

window.Script42 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);
}

window.Script43 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);
}

window.Script44 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);
}

window.Script45 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);
}

window.Script46 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);
}

window.Script47 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);
}

window.Script48 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);
}

window.Script49 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);
}

window.Script50 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);
}

window.Script51 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);
}

window.Script52 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);
}

window.Script53 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);
}

window.Script54 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);
}

window.Script55 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);
}

window.Script56 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);
}

window.Script57 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);
}

window.Script58 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);
}

window.Script59 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);
}

window.Script60 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);
}

window.Script61 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);

var player = GetPlayer();
player.SetVar("piecePosition", 1);
}

window.Script62 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);

var player = GetPlayer();
player.SetVar("piecePosition", 2);
}

window.Script63 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);

var player = GetPlayer();
player.SetVar("piecePosition", 3);
}

window.Script64 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);

var player = GetPlayer();
player.SetVar("piecePosition", 4);
}

window.Script65 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);

var player = GetPlayer();
player.SetVar("piecePosition", 5);
}

window.Script66 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);

var player = GetPlayer();
player.SetVar("piecePosition", 6);
}

window.Script67 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);

var player = GetPlayer();
player.SetVar("piecePosition", 7);
}

window.Script68 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);

var player = GetPlayer();
player.SetVar("piecePosition", 8);
}

window.Script69 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);

var player = GetPlayer();
player.SetVar("piecePosition", 9);
}

window.Script70 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);

var player = GetPlayer();
player.SetVar("piecePosition", 10);
}

window.Script71 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);

var player = GetPlayer();
player.SetVar("piecePosition", 11);
}

window.Script72 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);

var player = GetPlayer();
player.SetVar("piecePosition", 12);
}

window.Script73 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);

var player = GetPlayer();
player.SetVar("piecePosition", 13);
}

window.Script74 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);

var player = GetPlayer();
player.SetVar("piecePosition", 14);
}

window.Script75 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);

var player = GetPlayer();
player.SetVar("piecePosition", 15);
}

window.Script76 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);

var player = GetPlayer();
player.SetVar("piecePosition", 16);
}

window.Script77 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);

var player = GetPlayer();
player.SetVar("piecePosition", 17);
}

window.Script78 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);

var player = GetPlayer();
player.SetVar("piecePosition", 18);
}

window.Script79 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);

var player = GetPlayer();
player.SetVar("piecePosition", 19);
}

window.Script80 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);

var player = GetPlayer();
player.SetVar("piecePosition", 20);
}

window.Script81 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);

var player = GetPlayer();
player.SetVar("piecePosition", 21);
}

window.Script82 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);

var player = GetPlayer();
player.SetVar("piecePosition", 22);
}

window.Script83 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);

var player = GetPlayer();
player.SetVar("piecePosition", 23);
}

window.Script84 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);

var player = GetPlayer();
player.SetVar("piecePosition", 24);
}

window.Script85 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);

var player = GetPlayer();
player.SetVar("piecePosition", 25);
}

window.Script86 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);

var player = GetPlayer();
player.SetVar("piecePosition", 26);
}

window.Script87 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);

var player = GetPlayer();
player.SetVar("piecePosition", 27);
}

window.Script88 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);
}

window.Script89 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);
}

window.Script90 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);
}

window.Script91 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);
}

window.Script92 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);
}

window.Script93 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);
}

window.Script94 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);
}

window.Script95 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);
}

window.Script96 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);
}

window.Script97 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);
}

window.Script98 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);
}

window.Script99 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);
}

window.Script100 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);
}

window.Script101 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);
}

window.Script102 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);
}

window.Script103 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);
}

window.Script104 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);
}

window.Script105 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);
}

window.Script106 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);
}

window.Script107 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);
}

window.Script108 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);
}

window.Script109 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);
}

window.Script110 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);
}

window.Script111 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);
}

window.Script112 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);
}

window.Script113 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);
}

window.Script114 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);
}

window.Script115 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);

var player = GetPlayer();
player.SetVar("piecePosition", 1);
}

window.Script116 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);

var player = GetPlayer();
player.SetVar("piecePosition", 2);
}

window.Script117 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);

var player = GetPlayer();
player.SetVar("piecePosition", 3);
}

window.Script118 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);

var player = GetPlayer();
player.SetVar("piecePosition", 4);
}

window.Script119 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);

var player = GetPlayer();
player.SetVar("piecePosition", 5);
}

window.Script120 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);

var player = GetPlayer();
player.SetVar("piecePosition", 6);
}

window.Script121 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);

var player = GetPlayer();
player.SetVar("piecePosition", 7);
}

window.Script122 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);

var player = GetPlayer();
player.SetVar("piecePosition", 8);
}

window.Script123 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);

var player = GetPlayer();
player.SetVar("piecePosition", 9);
}

window.Script124 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);

var player = GetPlayer();
player.SetVar("piecePosition", 10);
}

window.Script125 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);

var player = GetPlayer();
player.SetVar("piecePosition", 10);
}

window.Script126 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);

var player = GetPlayer();
player.SetVar("piecePosition", 11);
}

window.Script127 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);

var player = GetPlayer();
player.SetVar("piecePosition", 12);
}

window.Script128 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);

var player = GetPlayer();
player.SetVar("piecePosition", 13);
}

window.Script129 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);

var player = GetPlayer();
player.SetVar("piecePosition", 14);
}

window.Script130 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);

var player = GetPlayer();
player.SetVar("piecePosition", 15);
}

window.Script131 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);

var player = GetPlayer();
player.SetVar("piecePosition", 16);
}

window.Script132 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);

var player = GetPlayer();
player.SetVar("piecePosition", 17);
}

window.Script133 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);

var player = GetPlayer();
player.SetVar("piecePosition", 18);
}

window.Script134 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);

var player = GetPlayer();
player.SetVar("piecePosition", 19);
}

window.Script135 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);

var player = GetPlayer();
player.SetVar("piecePosition", 20);
}

window.Script136 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);

var player = GetPlayer();
player.SetVar("piecePosition", 21);
}

window.Script137 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);

var player = GetPlayer();
player.SetVar("piecePosition", 22);
}

window.Script138 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);

var player = GetPlayer();
player.SetVar("piecePosition", 23);
}

window.Script139 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);

var player = GetPlayer();
player.SetVar("piecePosition", 24);
}

window.Script140 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);

var player = GetPlayer();
player.SetVar("piecePosition", 25);
}

window.Script141 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);

var player = GetPlayer();
player.SetVar("piecePosition", 26);
}

window.Script142 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);

var player = GetPlayer();
player.SetVar("piecePosition", 27);
}

window.Script143 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);
}

window.Script144 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);
}

window.Script145 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);
}

window.Script146 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);
}

window.Script147 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);
}

window.Script148 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);
}

window.Script149 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);
}

window.Script150 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);
}

window.Script151 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);
}

window.Script152 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);
}

window.Script153 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);
}

window.Script154 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);
}

window.Script155 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);
}

window.Script156 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);
}

window.Script157 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);
}

window.Script158 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);
}

window.Script159 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);
}

window.Script160 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);
}

window.Script161 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);
}

window.Script162 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);
}

window.Script163 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);
}

window.Script164 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);
}

window.Script165 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);
}

window.Script166 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);
}

window.Script167 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);
}

window.Script168 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);
}

window.Script169 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);
}

window.Script170 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);

var player = GetPlayer();
player.SetVar("piecePosition", 1);
}

window.Script171 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);

var player = GetPlayer();
player.SetVar("piecePosition", 2);
}

window.Script172 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);

var player = GetPlayer();
player.SetVar("piecePosition", 3);
}

window.Script173 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);

var player = GetPlayer();
player.SetVar("piecePosition", 4);
}

window.Script174 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);

var player = GetPlayer();
player.SetVar("piecePosition", 5);
}

window.Script175 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);

var player = GetPlayer();
player.SetVar("piecePosition", 6);
}

window.Script176 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);

var player = GetPlayer();
player.SetVar("piecePosition", 7);
}

window.Script177 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);

var player = GetPlayer();
player.SetVar("piecePosition", 8);
}

window.Script178 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);

var player = GetPlayer();
player.SetVar("piecePosition", 9);
}

window.Script179 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);

var player = GetPlayer();
player.SetVar("piecePosition", 10);
}

window.Script180 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);

var player = GetPlayer();
player.SetVar("piecePosition", 11);
}

window.Script181 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);

var player = GetPlayer();
player.SetVar("piecePosition", 12);
}

window.Script182 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);

var player = GetPlayer();
player.SetVar("piecePosition", 13);
}

window.Script183 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);

var player = GetPlayer();
player.SetVar("piecePosition", 14);
}

window.Script184 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);

var player = GetPlayer();
player.SetVar("piecePosition", 15);
}

window.Script185 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);

var player = GetPlayer();
player.SetVar("piecePosition", 16);
}

window.Script186 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);

var player = GetPlayer();
player.SetVar("piecePosition", 17);
}

window.Script187 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);

var player = GetPlayer();
player.SetVar("piecePosition", 18);
}

window.Script188 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);

var player = GetPlayer();
player.SetVar("piecePosition", 19);
}

window.Script189 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);

var player = GetPlayer();
player.SetVar("piecePosition", 20);
}

window.Script190 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);

var player = GetPlayer();
player.SetVar("piecePosition", 21);
}

window.Script191 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);

var player = GetPlayer();
player.SetVar("piecePosition", 22);
}

window.Script192 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);

var player = GetPlayer();
player.SetVar("piecePosition", 23);
}

window.Script193 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);

var player = GetPlayer();
player.SetVar("piecePosition", 24);
}

window.Script194 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);

var player = GetPlayer();
player.SetVar("piecePosition", 25);
}

window.Script195 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);

var player = GetPlayer();
player.SetVar("piecePosition", 26);
}

window.Script196 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);

var player = GetPlayer();
player.SetVar("piecePosition", 27);
}

window.Script197 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);
}

window.Script198 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);
}

window.Script199 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);
}

window.Script200 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);
}

window.Script201 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);
}

window.Script202 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);
}

window.Script203 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);
}

window.Script204 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);
}

window.Script205 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);
}

window.Script206 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);
}

window.Script207 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);
}

window.Script208 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);
}

window.Script209 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);
}

window.Script210 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);
}

window.Script211 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);
}

window.Script212 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);
}

window.Script213 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);
}

window.Script214 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);
}

window.Script215 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);
}

window.Script216 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);
}

window.Script217 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);
}

window.Script218 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);
}

window.Script219 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);
}

window.Script220 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);
}

window.Script221 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);
}

window.Script222 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);
}

window.Script223 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);
}

window.Script224 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);

var player = GetPlayer();
player.SetVar("piecePosition", 1);
}

window.Script225 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(1);

var player = GetPlayer();
player.SetVar("piecePosition", 1);
}

window.Script226 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(2);

var player = GetPlayer();
player.SetVar("piecePosition", 2);
}

window.Script227 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(3);

var player = GetPlayer();
player.SetVar("piecePosition", 3);
}

window.Script228 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(4);

var player = GetPlayer();
player.SetVar("piecePosition", 4);
}

window.Script229 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(5);

var player = GetPlayer();
player.SetVar("piecePosition", 5);
}

window.Script230 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(6);

var player = GetPlayer();
player.SetVar("piecePosition", 6);
}

window.Script231 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(7);

var player = GetPlayer();
player.SetVar("piecePosition", 7);
}

window.Script232 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(8);

var player = GetPlayer();
player.SetVar("piecePosition", 8);
}

window.Script233 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(9);

var player = GetPlayer();
player.SetVar("piecePosition", 9);
}

window.Script234 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(10);

var player = GetPlayer();
player.SetVar("piecePosition", 10);
}

window.Script235 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(11);

var player = GetPlayer();
player.SetVar("piecePosition", 11);
}

window.Script236 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(12);

var player = GetPlayer();
player.SetVar("piecePosition", 12);
}

window.Script237 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(13);

var player = GetPlayer();
player.SetVar("piecePosition", 13);
}

window.Script238 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(14);

var player = GetPlayer();
player.SetVar("piecePosition", 14);
}

window.Script239 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(15);

var player = GetPlayer();
player.SetVar("piecePosition", 15);
}

window.Script240 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(16);

var player = GetPlayer();
player.SetVar("piecePosition", 16);
}

window.Script241 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(17);

var player = GetPlayer();
player.SetVar("piecePosition", 17);
}

window.Script242 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(18);

var player = GetPlayer();
player.SetVar("piecePosition", 18);
}

window.Script243 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(19);

var player = GetPlayer();
player.SetVar("piecePosition", 19);
}

window.Script244 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);

var player = GetPlayer();
player.SetVar("piecePosition", 20);
}

window.Script245 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(20);

var player = GetPlayer();
player.SetVar("piecePosition", 20);
}

window.Script246 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(21);

var player = GetPlayer();
player.SetVar("piecePosition", 21);
}

window.Script247 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(22);

var player = GetPlayer();
player.SetVar("piecePosition", 22);
}

window.Script248 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(23);

var player = GetPlayer();
player.SetVar("piecePosition", 23);
}

window.Script249 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(24);

var player = GetPlayer();
player.SetVar("piecePosition", 24);
}

window.Script250 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(25);

var player = GetPlayer();
player.SetVar("piecePosition", 25);
}

window.Script251 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(26);

var player = GetPlayer();
player.SetVar("piecePosition", 26);
}

window.Script252 = function()
{
  window.db.ref("rooms/" + window.room + "/piece").set(27);

var player = GetPlayer();
player.SetVar("piecePosition", 27);
}

window.Script253 = function()
{
  window.db.ref("rooms/" + window.room + "/word").on("value", function(snapshot){
    var player = GetPlayer();
    player.SetVar("Word", snapshot.val());
});
}

window.Script254 = function()
{
  var player = GetPlayer();

/* --- אם ה־RemainingWords_1 ריק: בונים תור חדש מעורבב (חד-פעמי לכל סבב) --- */
var remStr = (player.GetVar("RemainingWords_1") || "").trim();
if (!remStr) {

  // רשימת המושגים המעודכנת
  var src = "האדם הסביר|ביצוע בצוותא|סיוע לעבירה|קשירת קשר|פשע|עוון|אחריות פלילית|יסוד עובדתי|יסוד נפשי|מחשבה פלילית|כוונה מיוחדת|עבירת חטא|שוד מזוין|מעשה מגונה|אי-הפללה עצמית|עסקת טיעון|מעשה גלוי|חזקת האחריות|אבות הפסול|מלכת הראיות|זכות השתיקה|משפט זוטא|שיטת תחקור בלתי הוגנת|איום באלימות|טובת הנאה מוחשית|חקירת לילה|תחקור דורסני|מסמך מזויף|סנגוריה ציבורית|משיכת כתב אישום|פסילת ראיה|הלכת יששכרוב|פקודת הראיות|חזקה שבחוק|חזקה שבעובדה|חזקה תכופה|חזקת השליטה|ספק סביר|כשרות עדים|חקירה נגדית|דיות הראיות|מקור חיצוני|שחזור האירוע|ראיה ישירה|ראיה נסיבתית|תיק נסיבתי|מבחן הקבילות|מבחן הרלוונטיות|מבחן המהימנות|מבחן המשקל|ראיה מקורית|שכיב מרע|טביעת אצבע|בדיקת פוליגרף|חוקר ילדים|שכרות כפויה|שכרות מודעת|שכרות מכוונת|הגנה עצמית|זוטי דברים|צו של רשות|נטל ההוכחה|תצפית סמויה|תצפית גלויה|תצפית סטטית|מערכת הפל\"א|אפוטרופוס|זירת עבירה|זימון לחקירה|יועץ משפטי|קצין אג\"מ|חוקר נוער|עד מדינה|חילוץ בני ערובה|שלילת רישיון|נהג פסול|כתב אישום|תיק חקירה|האזנת סתר|חקירה סמויה|חקירה גלויה|שוחד|חטיפה|עדות ראייה|סוכן סמוי|סוכן כפול|מבצע אכיפה|פיזור הפגנה|גביית עדות|תשאול|ליווי עצור|איכות הראיה|ראיה חותכת|פסיכוזה|זכות לייצוג|איום מרומז|פיתוי מוחשי|חוק המעצרים|הליך הוגן|רשלנות|עבירת ניסיון|תחבולה|סיוע|חובת האזהרה|אגף מבצעים|אסון מעלות|רכוש גנוב|קוד אתי|שלטון החוק|טוהר המידות|ממלכתיות|מוקד שליטה|משמרת אדומה|משמרת ירוקה|אירוע תגובה|סכנת חיים|אירוע קיצון|זמן תגובה|בידוד זירה|סרט סימון זירה|תיאום עמדות|חסימת צירים|דו\"ח פעולה|מחסום סדור|מחסום תגובה|חסימה חפוזה|תצפית מדלגת|תצפית מתוכננת|תצפית חפוזה|תצפית ישירה|מחסום אזעקה|מחסום פגיון|מחסום חומה|מחסום רשת|מכוון תנועה|פריצת מחסום|רכב ביטחון|מרדף ממונע|פגע וברח|נהיגה בזמן פסילה|עצור מסוכן|כבילת עצורים|בריחת עצור|הוצאה לפועל|חקירת יכולת|צו מזונות|בדיקת מסוף|פסול דין|צו אשפוז|אשפוז בכפייה|נעדר|חפ\"ק|כלבי גישוש|יחידת חילוץ|תרסיס פלפל|טייזר|רשות הרבים|רעש בלתי סביר|כניסה בכוח|תקיפה סתם|חבלה של ממש|נסיבות מחמירות|חבלה חמורה|תקיפת שוטר|חוק ההתיישנות|הטרדה מאיימת|פקיד סעד|צו הגנה|מוות ברשלנות|שלילת קבע|פריצה|התפרצות|שוד|רצח|הסגת גבול|דו\"ח עיכוב|דו\"ח מעצר|כבילה|עצור|מתחמק ממעצר|נמלט ממשמורת חוקית|עבריין נמלט|דרוש חקירה|אבדה יקרת ערך|אבדה בעלת ערך ריגשי|מציאה|ניידת סנונית|ראיות פורנזיות|יסוד סביר לחשד|יסוד סביר לחשש|מניעת עבירות|סגירת תא שטח|תצפית בכיסוי|תצפית לילית|היערכות מוקדמת|גילוי עבירות|העלמת ראיות|שיבוש הליכי חקירה|משמר הגבול|חוק יסוד כבוד האדם וחירותו|שמירה על החוק|שירות|מתלונן|אירוע דחוף|הערכת מצב|תמונת מצב|הפסקת עבירה|הצלת חיים|עצור מסוג מיוחד|צו חיפוש|צו הבאה|נעדר בסיכון גבוה|נכס|איום|הפעלת כח|חבלה ממשית|אונס|מעשה מגונה|חדירה אסורה|אלימות בין בני זוג|המתה בקלות דעת|גרימת מוות ברשלנות|היזק לרכוש|שבל\"ר|במזיד|שלא כדין|בלי הסכמת הבעלים|פורץ|נכנס|מתפרץ|דו\"ח תפיסה וסימון|ראש משמרת|קצין שיטור וקהילה|מתנדב משטרה|שוטר חובה|היישר|סל\"ת|חבירה|שידור כללי|רות עבור|מד\"א|כב\"ה|כיתת כוננות|ת.ד|חומ\"ס|נט\"ן|קוד פעמון|תו\"ל מתאבד|תנאים מגבילים|מעצר בית|גל ראשון|ניידת 401|רק\"ל|שב\"ח|ניסיון שוד|ניסיון רצח|אבטחת כוחות|סוחר משנה|חוליה|עבריין מוכר|שוד בנסיבות מחמירות|גרימת רעש|הפרדה|כניסה לחצרים|מעוכב|כח סביר|חיפוש בהסכמה|יס\"ל|הסכמה מדעת|חיפוש ללא צו|רשות היחיד|זכות לפרטיות|קבילות ראיות|פסילת ראיות|צו בית משפט|עילה למתן צו|חשוד|עדים|מחזיק המקום|צוות חיפוש|סביבת ביצוע|זירה|סריקה|הזדהות|סירוב לחתום|חיפוש על הגוף|חיפוש בגוף|מרדף|גורם ההפתעה|הגעה סמויה|אמתלה בכניסה|ריכוז נוכחים|שימוש בכוח|הכנסה לסטטוס|איתור ראיות|הסבר זכויות|סימון מוצגים|דו\"ח חיפוש|רשימת מוצגים|תודעה ראייתית|תודעת מודיעין|עבר פלילי|חומר חקירה|אמל\"ח|תצפית|מארב|מעצר|הכשרה|משימה מבצעית|עציץ חשוד|חשוד מפוחד|סירוב לחיפוש|ויתור על פרטיות|פיזור ראיות|תיק פ.א|תעלומה|תיעוד|קטטה|שימוש בסמכות|עובר אורח|פקודת מבצע|ערנות מבצעית|פעילות סמויה|אירוע מתגלגל|גישה מבצעית|זיהוי ודאי|ניצול שטח|תצפית מרחוק|תצפית מקרוב";

  // הסרת כפילויות + ניקוי רווחים מיותרים
  var arr = Array.from(new Set(src.split("|").map(s => s.trim()).filter(Boolean)));

  // ערבוב Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  remStr = arr.join("|");
  player.SetVar("RemainingWords_1", remStr);
}

/* --- פיצול לתור הנותר --- */
var remaining = remStr.split("|").filter(Boolean);
if (remaining.length === 0) {
  player.SetVar("RemainingWords_1", "");
  return;
}

/* --- שליפת המילה הבאה --- */
var word = remaining.shift();

/* --- תיקון מספרים ב־RTL --- */
var displayWord = word.replace(/(\d[\d\s.,:\/-]*)/g, "\u2066$1\u2069");

/* --- עדכון תצוגה ומצב בסטוריליין --- */
player.SetVar("CurrentWord", displayWord);
player.SetVar("RemainingWords_1", remaining.join("|"));
}

window.Script255 = function()
{
  var player = GetPlayer();
var word = player.GetVar("Word");

window.db.ref("rooms/" + window.room + "/word").set(word);
}

window.Script256 = function()
{
  var player = GetPlayer();

/* --- אם ה־RemainingWords_1 ריק: בונים תור חדש מעורבב (חד-פעמי לכל סבב) --- */
var remStr = (player.GetVar("RemainingWords_1") || "").trim();
if (!remStr) {

  // רשימת המקור המעודכנת: מושגי חוק, משפט וסמכויות שוטר
  var src = "האדם הסביר|ביצוע בצוותא|סיוע לעבירה|קשירת קשר|פשע|עוון|אחריות פלילית|יסוד עובדתי|יסוד נפשי|מחשבה פלילית|כוונה מיוחדת|עבירת חטא|שוד מזוין|מעשה מגונה|אי-הפללה עצמית|עסקת טיעון|מעשה גלוי|חזקת האחריות|אבות הפסול|מלכת הראיות|זכות השתיקה|משפט זוטא|שיטת תחקור בלתי הוגנת|איום באלימות|טובת הנאה מוחשית|חקירת לילה|תחקור דורסני|מסמך מזויף|סנגוריה ציבורית|משיכת כתב אישום|פסילת ראיה|הלכת יששכרוב|פקודת הראיות|חזקה שבחוק|חזקה שבעובדה|חזקה תכופה|חזקת השליטה|ספק סביר|כשרות עדים|חקירה נגדית|דיות הראיות|מקור חיצוני|שחזור האירוע|ראיה ישירה|ראיה נסיבתית|תיק נסיבתי|מבחן הקבילות|מבחן הרלוונטיות|מבחן המהימנות|מבחן המשקל|ראיה מקורית|שכיב מרע|טביעת אצבע|בדיקת פוליגרף|חוקר ילדים|שכרות כפויה|שכרות מודעת|שכרות מכוונת|הגנה עצמית|זוטי דברים|צו של רשות|נטל ההוכחה|תצפית סמויה|תצפית גלויה|תצפית סטטית|מערכת הפל\"א|אפוטרופוס|זירת עבירה|זימון לחקירה|יועץ משפטי|קצין אג\"מ|חוקר נוער|עד מדינה|חילוץ בני ערובה|שלילת רישיון|נהג פסול|כתב אישום|תיק חקירה|האזנת סתר|חקירה סמויה|חקירה גלויה|שוחד|חטיפה|עדות ראייה|סוכן סמוי|סוכן כפול|מבצע אכיפה|פיזור הפגנה|גביית עדות|תשאול|ליווי עצור|איכות הראיה|ראיה חותכת|פסיכוזה|זכות לייצוג|איום מרומז|פיתוי מוחשי|חוק המעצרים|הליך הוגן|רשלנות|עבירת ניסיון|תחבולה|סיוע|חובת האזהרה|אגף מבצעים|אסון מעלות|רכוש גנוב|קוד אתי|שלטון החוק|טוהר המידות|ממלכתיות|מוקד שליטה|משמרת אדומה|משמרת ירוקה|אירוע תגובה|סכנת חיים|אירוע קיצון|זמן תגובה|בידוד זירה|סרט סימון זירה|תיאום עמדות|חסימת צירים|דו\"ח פעולה|מחסום סדור|מחסום תגובה|חסימה חפוזה|תצפית מדלגת|תצפית מתוכננת|תצפית חפוזה|תצפית ישירה|מחסום אזעקה|מחסום פגיון|מחסום חומה|מחסום רשת|מכוון תנועה|פריצת מחסום|רכב ביטחון|מרדף ממונע|פגע וברח|נהיגה בזמן פסילה|עצור מסוכן|כבילת עצורים|בריחת עצור|הוצאה לפועל|חקירת יכולת|צו מזונות|בדיקת מסוף|פסול דין|צו אשפוז|אשפוז בכפייה|נעדר|חפ\"ק|כלבי גישוש|יחידת חילוץ|תרסיס פלפל|טייזר|רשות הרבים|רעש בלתי סביר|כניסה בכוח|תקיפה סתם|חבלה של ממש|נסיבות מחמירות|חבלה חמורה|תקיפת שוטר|חוק ההתיישנות|הטרדה מאיימת|פקיד סעד|צו הגנה|מוות ברשלנות|שלילת קבע|פריצה|התפרצות|שוד|רצח|הסגת גבול|דו\"ח עיכוב|דו\"ח מעצר|כבילה|עצור|מתחמק ממעצר|נמלט ממשמורת חוקית|עבריין נמלט|דרוש חקירה|אבדה יקרת ערך|אבדה בעלת ערך ריגשי|מציאה|ניידת סנונית|ראיות פורנזיות|יסוד סביר לחשד|יסוד סביר לחשש|מניעת עבירות|סגירת תא שטח|תצפית בכיסוי|תצפית לילית|היערכות מוקדמת|גילוי עבירות|העלמת ראיות|שיבוש הליכי חקירה|משמר הגבול|חוק יסוד כבוד האדם וחירותו|שמירה על החוק|שירות|מתלונן|אירוע דחוף|הערכת מצב|תמונת מצב|הפסקת עבירה|הצלת חיים|עצור מסוג מיוחד|צו חיפוש|צו הבאה|נעדר בסיכון גבוה|נכס|איום|הפעלת כח|חבלה ממשית|אונס|מעשה מגונה|חדירה אסורה|אלימות בין בני זוג|המתה בקלות דעת|גרימת מוות ברשלנות|היזק לרכוש|שבל\"ר|במזיד|שלא כדין|בלי הסכמת הבעלים|פורץ|נכנס|מתפרץ|דו\"ח תפיסה וסימון|ראש משמרת|קצין שיטור וקהילה|מתנדב משטרה|שוטר חובה|היישר|סל\"ת|חבירה|שידור כללי|רות עבור|מד\"א|כב\"ה|כיתת כוננות|ת.ד|חומ\"ס|נט\"ן|קוד פעמון|תו\"ל מתאבד|תנאים מגבילים|מעצר בית|גל ראשון|ניידת 401|רק\"ל|שב\"ח|ניסיון שוד|ניסיון רצח|אבטחת כוחות|סוחר משנה|חוליה|עבריין מוכר|שוד בנסיבות מחמירות|גרימת רעש|הפרדה|כניסה לחצרים|מעוכב|כח סביר|חיפוש בהסכמה|יס\"ל|הסכמה מדעת|חיפוש ללא צו|רשות היחיד|זכות לפרטיות|קבילות ראיות|פסילת ראיות|צו בית משפט|עילה למתן צו|חשוד|עדים|מחזיק המקום|צוות חיפוש|סביבת ביצוע|זירה|סריקה|הזדהות|סירוב לחתום|חיפוש על הגוף|חיפוש בגוף|מרדף|גורם ההפתעה|הגעה סמויה|אמתלה בכניסה|ריכוז נוכחים|שימוש בכוח|הכנסה לסטטוס|איתור ראיות|הסבר זכויות|סימון מוצגים|דו\"ח חיפוש|רשימת מוצגים|תודעה ראייתית|תודעת מודיעין|עבר פלילי|חומר חקירה|אמל\"ח|תצפית|מארב|מעצר|הכשרה|משימה מבצעית|עציץ חשוד|חשוד מפוחד|סירוב לחיפוש|ויתור על פרטיות|פיזור ראיות|תיק פ.א|תעלומה|תיעוד|קטטה|שימוש בסמכות|עובר אורח|פקודת מבצע|ערנות מבצעית|פעילות סמויה|אירוע מתגלגל|גישה מבצעית|זיהוי ודאי|ניצול שטח|תצפית מרחוק|תצפית מקרוב";

  // הסרת כפילויות + ניקוי
  var arr = Array.from(new Set(src.split("|").map(s => s.trim()).filter(Boolean)));

  // ערבוב Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  remStr = arr.join("|");
  player.SetVar("RemainingWords_1", remStr);
}

/* --- פיצול לתור הנותר --- */
var remaining = remStr.split("|").filter(Boolean);
if (remaining.length === 0) {
  // סיום המאגר
  player.SetVar("RemainingWords_1", "");
  return;
}

/* --- שליפת המילה הבאה --- */
var word = remaining.shift();

/* --- תיקון RTL (מספרים וסימנים בכיוון הנכון) --- */
var displayWord = word.replace(/(\d[\d\s.,:\/-]*)/g, "\u2066$1\u2069");

/* --- עדכון המשתנים ב-Storyline --- */
player.SetVar("CurrentWord", displayWord);
player.SetVar("RemainingWords_1", remaining.join("|"));
}

window.Script257 = function()
{
  var player = GetPlayer();
var word = player.GetVar("Word");

window.db.ref("rooms/" + window.room + "/word").set(word);
}

window.Script258 = function()
{
  window.db.ref("rooms/"+window.room+"/timer").set({
start: Date.now(),
duration: 60
});
}

window.Script259 = function()
{
  window.db.ref("rooms/"+window.room+"/timer").set({
start: Date.now(),
duration: 60
});
}

window.Script260 = function()
{
  var player = GetPlayer();

/* --- אם ה־RemainingWords_1 ריק: בונים תור חדש מעורבב (חד-פעמי לכל סבב) --- */
var remStr = (player.GetVar("RemainingWords_1") || "").trim();

if (!remStr) {

  // רשימת המושגים המעודכנת: סמכויות, משפט ומשטרה
  var src = "האדם הסביר|ביצוע בצוותא|סיוע לעבירה|קשירת קשר|פשע|עוון|אחריות פלילית|יסוד עובדתי|יסוד נפשי|מחשבה פלילית|כוונה מיוחדת|עבירת חטא|שוד מזוין|מעשה מגונה|אי-הפללה עצמית|עסקת טיעון|מעשה גלוי|חזקת האחריות|אבות הפסול|מלכת הראיות|זכות השתיקה|משפט זוטא|שיטת תחקור בלתי הוגנת|איום באלימות|טובת הנאה מוחשית|חקירת לילה|תחקור דורסני|מסמך מזויף|סנגוריה ציבורית|משיכת כתב אישום|פסילת ראיה|הלכת יששכרוב|פקודת הראיות|חזקה שבחוק|חזקה שבעובדה|חזקה תכופה|חזקת השליטה|ספק סביר|כשרות עדים|חקירה נגדית|דיות הראיות|מקור חיצוני|שחזור האירוע|ראיה ישירה|ראיה נסיבתית|תיק נסיבתי|מבחן הקבילות|מבחן הרלוונטיות|מבחן המהימנות|מבחן המשקל|ראיה מקורית|שכיב מרע|טביעת אצבע|בדיקת פוליגרף|חוקר ילדים|שכרות כפויה|שכרות מודעת|שכרות מכוונת|הגנה עצמית|זוטי דברים|צו של רשות|נטל ההוכחה|תצפית סמויה|תצפית גלויה|תצפית סטטית|מערכת הפל\"א|אפוטרופוס|זירת עבירה|זימון לחקירה|יועץ משפטי|קצין אג\"מ|חוקר נוער|עד מדינה|חילוץ בני ערובה|שלילת רישיון|נהג פסול|כתב אישום|תיק חקירה|האזנת סתר|חקירה סמויה|חקירה גלויה|שוחד|חטיפה|עדות ראייה|סוכן סמוי|סוכן כפול|מבצע אכיפה|פיזור הפגנה|גביית עדות|תשאול|ליווי עצור|איכות הראיה|ראיה חותכת|פסיכוזה|זכות לייצוג|איום מרומז|פיתוי מוחשי|חוק המעצרים|הליך הוגן|רשלנות|עבירת ניסיון|תחבולה|סיוע|חובת האזהרה|אגף מבצעים|אסון מעלות|רכוש גנוב|קוד אתי|שלטון החוק|טוהר המידות|ממלכתיות|מוקד שליטה|משמרת אדומה|משמרת ירוקה|אירוע תגובה|סכנת חיים|אירוע קיצון|זמן תגובה|בידוד זירה|סרט סימון זירה|תיאום עמדות|חסימת צירים|דו\"ח פעולה|מחסום סדור|מחסום תגובה|חסימה חפוזה|תצפית מדלגת|תצפית מתוכננת|תצפית חפוזה|תצפית ישירה|מחסום אזעקה|מחסום פגיון|מחסום חומה|מחסום רשת|מכוון תנועה|פריצת מחסום|רכב ביטחון|מרדף ממונע|פגע וברח|נהיגה בזמן פסילה|עצור מסוכן|כבילת עצורים|בריחת עצור|הוצאה לפועל|חקירת יכולת|צו מזונות|בדיקת מסוף|פסול דין|צו אשפוז|אשפוז בכפייה|נעדר|חפ\"ק|כלבי גישוש|יחידת חילוץ|תרסיס פלפל|טייזר|רשות הרבים|רעש בלתי סביר|כניסה בכוח|תקיפה סתם|חבלה של ממש|נסיבות מחמירות|חבלה חמורה|תקיפת שוטר|חוק ההתיישנות|הטרדה מאיימת|פקיד סעד|צו הגנה|מוות ברשלנות|שלילת קבע|פריצה|התפרצות|שוד|רצח|הסגת גבול|דו\"ח עיכוב|דו\"ח מעצר|כבילה|עצור|מתחמק ממעצר|נמלט ממשמורת חוקית|עבריין נמלט|דרוש חקירה|אבדה יקרת ערך|אבדה בעלת ערך ריגשי|מציאה|ניידת סנונית|ראיות פורנזיות|יסוד סביר לחשד|יסוד סביר לחשש|מניעת עבירות|סגירת תא שטח|תצפית בכיסוי|תצפית לילית|היערכות מוקדמת|גילוי עבירות|העלמת ראיות|שיבוש הליכי חקירה|משמר הגבול|חוק יסוד כבוד האדם וחירותו|שמירה על החוק|שירות|מתלונן|אירוע דחוף|הערכת מצב|תמונת מצב|הפסקת עבירה|הצלת חיים|עצור מסוג מיוחד|צו חיפוש|צו הבאה|נעדר בסיכון גבוה|נכס|איום|הפעלת כח|חבלה ממשית|אונס|מעשה מגונה|חדירה אסורה|אלימות בין בני זוג|המתה בקלות דעת|גרימת מוות ברשלנות|היזק לרכוש|שבל\"ר|במזיד|שלא כדין|בלי הסכמת הבעלים|פורץ|נכנס|מתפרץ|דו\"ח תפיסה וסימון|ראש משמרת|קצין שיטור וקהילה|מתנדב משטרה|שוטר חובה|היישר|סל\"ת|חבירה|שידור כללי|רות עבור|מד\"א|כב\"ה|כיתת כוננות|ת.ד|חומ\"ס|נט\"ן|קוד פעמון|תו\"ל מתאבד|תנאים מגבילים|מעצר בית|גל ראשון|ניידת 401|רק\"ל|שב\"ח|ניסיון שוד|ניסיון רצח|אבטחת כוחות|סוחר משנה|חוליה|עבריין מוכר|שוד בנסיבות מחמירות|גרימת רעש|הפרדה|כניסה לחצרים|מעוכב|כח סביר|חיפוש בהסכמה|יס\"ל|הסכמה מדעת|חיפוש ללא צו|רשות היחיד|זכות לפרטיות|קבילות ראיות|פסילת ראיות|צו בית משפט|עילה למתן צו|חשוד|עדים|מחזיק המקום|צוות חיפוש|סביבת ביצוע|זירה|סריקה|הזדהות|סירוב לחתום|חיפוש על הגוף|חיפוש בגוף|מרדף|גורם ההפתעה|הגעה סמויה|אמתלה בכניסה|ריכוז נוכחים|שימוש בכוח|הכנסה לסטטוס|איתור ראיות|הסבר זכויות|סימון מוצגים|דו\"ח חיפוש|רשימת מוצגים|תודעה ראייתית|תודעת מודיעין|עבר פלילי|חומר חקירה|אמל\"ח|תצפית|מארב|מעצר|הכשרה|משימה מבצעית|עציץ חשוד|חשוד מפוחד|סירוב לחיפוש|ויתור על פרטיות|פיזור ראיות|תיק פ.א|תעלומה|תיעוד|קטטה|שימוש בסמכות|עובר אורח|פקודת מבצע|ערנות מבצעית|פעילות סמויה|אירוע מתגלגל|גישה מבצעית|זיהוי ודאי|ניצול שטח|תצפית מרחוק|תצפית מקרוב";

  // הסרת כפילויות + ניקוי
  var arr = Array.from(new Set(src.split("|").map(s => s.trim()).filter(Boolean)));

  // ערבוב Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  remStr = arr.join("|");
  player.SetVar("RemainingWords_1", remStr);
}

/* --- פיצול לתור הנותר --- */
var remaining = remStr.split("|").filter(Boolean);

if (remaining.length === 0) {
  player.SetVar("RemainingWords_1", "");
  return;
}

/* --- שליפת המילה הבאה --- */
var word = remaining.shift();

/* --- תיקון מספרים ב־RTL --- */
var displayWord = word.replace(/(\d[\d\s.,:\/-]*)/g, "\u2066$1\u2069");

/* --- עדכון תצוגה ומצב --- */
player.SetVar("CurrentWord", displayWord);
player.SetVar("RemainingWords_1", remaining.join("|"));
}

window.Script261 = function()
{
  var player = GetPlayer();
var currentWord = player.GetVar("CurrentWord");

// שליחת הפקודה לענן - המילה והסטטוס "Start"
firebase.database().ref('gameState/').set({
  word: currentWord,
  status: "Start"
});
}

};
