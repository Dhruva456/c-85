canvas = new fabric.Canvas("myCanvas")
playerx = 10
playery = 10
blockwidth = 30
blockheight = 30
playerobject = ""
blockobject = ""

function playerupdate() {
    fabric.Image.fromURL("player.png", function (img) {
        playerobject = img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140)
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject)
    });
}
playerupdate()

function blockUpdate(neew_image) {
    fabric.Image.fromURL(neew_image, function (img) {
        blockobject = img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockobject)
    });
}
blockUpdate("wall.jpg")