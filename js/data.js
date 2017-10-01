dataObj=function () {
    this.fruitNum=0
    this.double=1
    this.score=0
    this.gameOver=false
    this.alpha=0
}
dataObj.prototype.draw=function () {
    var w=can1.width
    var h=can1.height

    if(data.gameOver){
        this.alpha=this.alpha+deltaTime*0.001
        if(this.alpha>1){
            this.alpha=1
        }
        ctx1.save()
        ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")"
        ctx1.font="40px Verdana"
        ctx1.textAlign="center"
        ctx1.fillText("GAME OVER",w*0.5,h*0.5)
        ctx1.restore()
    }

    ctx1.fillText("SCORE:"+this.score,w*0.5,h-20)
}
dataObj.prototype.addScore=function () {
    this.score+=this.fruitNum*100*this.double
    this.fruitNum=0
    this.double=1
}