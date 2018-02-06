var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

    // ctx.beginPath();
    // ctx.arc(200, 200, 30, 0, Math.PI*2, false);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    //objeto que guarda todas las imagenes... solo por comodidad
    var images = {
        bg:"http........"
    };

    var board

    function Board(){
        this.x=0;
        this.y=0;
        this.width= canvas.width;
        this.height = canvas.height;
        this.img= new Image();
        this.img.src = images.bg
        this.img.onload =function(){
            this.draw();
        }.bind(this);
        
//muy importante draw
        this.draw=function{
            ctx.drawImage(this.img, this.x, this.y);
        }

    }

    //Main functions
    function startGame(){
         board
    }
    var board=new Board();