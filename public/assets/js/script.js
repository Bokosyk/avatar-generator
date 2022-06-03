const path = require('path');

window.onload = function () {

    function getFilename(fullPath) {
        return fullPath.replace(/^.*[\\\/]/, '');
    }

    // WIP
    var maleCharBase = new Image()
    var malecharBaseNum = Math.floor(Math.random() * 5) + 1 // Change according to # of base files
    var maleCharBaseName = getFilename("Assets/maleChar/base/malebase" + malecharBaseNum + ".png")
    // WIP
    console.log(maleCharBaseName)
    maleCharBase.src = path.dirname('/Assets/maleChar/base/malebase1.png')
    console.log(maleCharBaseName.src)

    maleCharBase.onload = function () {
        buildMaleChar();
    }

    function buildMaleChar() {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        canvas.width = 512;
        canvas.height = 512;

        //Necessary if parts need to be adjusted if files are not centered
        // ctx.drawImage(maleCharBase, ((512-maleCharBase.width)/2), 50)
    }






}