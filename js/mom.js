function momObj() {
    this.x
    this.y
    this.angle
    this.bigEye
    this.bigBody
    this.bigTail
    this.bigTailCount
    this.bigTailTimer
    this.bigTailInterval
    this.bigBodyCount=0
}
momObj.prototype.init=function () {
    this.x=canWidth/2
    this.y=canHeight/2
    this.angle=0
    this.bigEye=new Image()
    this.bigBody=new Image()
    this.bigTail=new Image()
    this.bigTailCount=0
    this.bigTailTimer=0
    this.bigTailInterval=250
    this.bigEye.src="./src/bigEye0.png"
    this.bigBody.src="./src/bigSwim0.png"
    this.bigTail.src="./src/bigTail0.png"
}
momObj.prototype.draw=function () {
    this.bigTailTimer+=deltaTime
    if(this.bigTailTimer>this.bigTailInterval){
        this.bigTailCount++
        this.bigTailTimer=0
        if(this.bigTailCount>7){
            this.bigTailCount=0
        }
        this.bigTail=bigTail[this.bigTailCount]
    }
    //body颜色
    if(data.double==1){
        this.bigBody=momBodyOra[this.bigBodyCount]
    }else{
        this.bigBody=momBodyBlue[this.bigBodyCount]
    }
    var deltaY=my-this.y
    var deltaX=mx-this.x
    this.x=lerpDistance(mx,this.x,0.99)
    this.y=lerpDistance(my,this.y,0.99)
    var beta=Math.atan2(deltaY,deltaX) // -PI-PI
    this.angle=lerpAngle(beta,this.angle,0.6)
    ctx1.save()
    ctx1.translate(this.x,this.y)
    ctx1.rotate(this.angle+Math.PI)
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5)
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5)
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5)
    ctx1.restore()
}