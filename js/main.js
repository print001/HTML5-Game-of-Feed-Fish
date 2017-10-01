
var can1,can2
var ctx1,ctx2
var lastTime,deltaTime
var canWidth,canHeight
var bgPic=new Image()
var ane,fruits
var mom,baby
var babyTail=[]
var babyFade=[]
var babyEye=[]
var bigTail=[]
var mx, my
var data
var momBodyOra=[]
var momBodyBlue=[]
var wave
var dust
var dustPic=[]
window.onload =game

function game() {
    lastTime=Date.now()
    deltaTime=0
    init()
    gameLoop()
}
function init(){
    can1=document.getElementById('canvas1')
    ctx1=can1.getContext('2d')
    can2=document.getElementById('canvas2')
    ctx2=can2.getContext('2d')
    bgPic.src="./src/background.jpg"
    canWidth=can1.clientWidth
    canHeight=can1.clientHeight
    ane=new aneObj()
    ane.init()
    fruits=new fruitObj()
    fruits.init()
    mom=new momObj()
    mom.init()
    baby=new babyObj()
    baby.init()
    wave=new waveObj()
    wave.init()
    dust=new dustObj()
    dust.init()
    ctx1.fillStyle="white"
    ctx1.font="40px Verdana"
    ctx1.textAlign="center"
    for(var i=0;i<8;i++){
        babyTail[i]=new Image()
        babyTail[i].src="./src/babyTail"+i+".png"
    }
    for(var i=0;i<8;i++){
        bigTail[i]=new Image()
        bigTail[i].src="./src/bigTail"+i+".png"
    }
    for(var i=0;i<2;i++){
        babyEye[i]=new Image()
        babyEye[i].src="./src/babyEye"+i+".png"
    }
    for(var i=0;i<20;i++){
        babyFade[i]=new Image()
        babyFade[i].src="./src/babyFade"+i+".png"
    }
    for(var i=0;i<8;i++){
       momBodyOra[i]=new Image()
        momBodyBlue[i]=new Image()
        momBodyOra[i].src="./src/bigSwim"+i+".png"
        momBodyBlue[i].src="./src/bigSwimBlue"+i+".png"
    }
    for(var i=0;i<7;i++){
        dustPic[i]=new Image()
        dustPic[i].src="./src/dust"+i+".png"
    }
    data=new dataObj()
    mx=canWidth/2
    my=canHeight/2
    can1.addEventListener("mousemove",onMouseMove,false)
}

function gameLoop() {
    requestAnimationFrame(gameLoop)
    var now=Date.now()
    deltaTime=now-lastTime
    if(deltaTime>40){
        deltaTime=40
    }
    lastTime=now
    drawBackground()
    ane.draw()
    fruitMonitor()
    fruits.draw()
    ctx1.clearRect(0,0,canWidth,canHeight)
    mom.draw()
    baby.draw()
    data.draw()
    wave.draw()
    dust.draw()
    momBabyCollision()
    momFruitsCollision()

}
function onMouseMove(e) {
    if(!data.gameOver){
        if(e.offsetX||e.layerX){
            mx=e.offsetX===undefined? e.layerX:e.offsetX
            my=e.offsetY===undefined? e.layerY:e.offsetY
        }
    }

}