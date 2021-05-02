var canvas=new fabric.Canvas("myCanvas");
var player_X=10;
var player_Y=10;

var block_width=30;
var block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}

function newImg(getImg){
fabric.Image.fromURL(getImg,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_width.scaleToWidth(block_width);
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}