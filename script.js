window.onload = function () {

    var maleCharBase = new Image()
    var malecharBaseNum = Math.floor(Math.random() * 1) + 1 // Change according to # of base files
    var maleCharBaseName = "malebase" + malecharBaseNum + ".png"
    maleCharBase.src = maleCharBaseName

    maleCharBase.onload=function()
    {
        buildMaleChar();
    }

    function buildMaleChar()
    {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        canvas.width=512;
        canvas.height=512;

        //Necessary if parts need to be adjusted if files are not centered
        // ctx.drawImage(maleCharBase, ((512-maleCharBase.width)/2), 50)
    }






}