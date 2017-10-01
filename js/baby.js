var babyObj=function () {
    this.x
    this.y
    this.angle
    this.babyEyeTimer
    this.babyEyeCount
    this.babyEyeInterval
    this.babyTailTimer
    this.babyTailCount
    this.babyFadeTimer
    this.babyFadeCount
    this.babyFadeInterval
    this.babyEye=new Image()
    this.babyBody=new Image()
    this.babyTail=new Image()
}
babyObj.prototype.init=function () {
    this.x=canWidth/2-50
    this.y=canHeight/2-50
    this.angle=0;
    this.babyTailTimer=0
    this.babyTailCount=0
    this.babyEyeTimer=0
    this.babyEyeCount=0
    this.babyFadeTimer=0
    this.babyFadeCount=0
    this.babyFadeInterval=300
    this.babyEyeInterval=Math.random()*1500+2000
    this.babyEye.src="./src/babyEye0.png"
    this.babyBody.src="./src/babyFade0.png"
    this.babyTail.src="./src/babyTail0.png"
}
babyObj.prototype.draw=function (){
    //tail
    this.babyTailTimer+=deltaTime
    if(this.babyTailTimer>50){
        this.babyTailCount++
        if(this.babyTailCount===8){
            this.babyTailCount=0
        }
        this.babyTail=babyTail[this.babyTailCount]
        this.babyTailTimer=0
    }
    //  eye
    this.babyEyeTimer+=deltaTime
    if(this.babyEyeTimer>this.babyEyeInterval){
        this.babyEyeCount=(this.babyEyeCount+1)%2
        this.babyEyeTimer%=this.babyEyeInterval
        if(this.babyEyeCount==1){
            this.babyEyeInterval=200
        }else{
            this.babyEyeInterval=Math.random()*2500+1000
        }
        this.babyEye=babyEye[this.babyEyeCount]

    }
    //Fade
    this.babyFadeTimer+=deltaTime
    if(this.babyFadeTimer>this.babyFadeInterval){
        this.babyFadeTimer%=this.babyFadeInterval
        this.babyFadeCount++
        if(this.babyFadeCount>19){
            this.babyFadeCount=19
            data.gameOver=true
        }
        this.babyBody=babyFade[this.babyFadeCount]
    }
    var deltaY=mom.y-this.y
    var deltaX=mom.x-this.x
    this.x=lerpDistance(mom.x,this.x,0.98)
    this.y=lerpDistance(mom.y,this.y,0.98)
    var beta=Math.atan2(deltaY,deltaX) // -PI-PI
    this.angle=lerpAngle(beta,this.angle,0.6)
    ctx1.save()
    ctx1.translate(this.x,this.y)
    ctx1.rotate(this.angle+Math.PI)
    ctx1.drawImage(this.babyBody, -this.babyBody.width/2,-this.babyBody.height/2)
    ctx1.drawImage(this.babyTail, -this.babyTail.width/2+24,-this.babyTail.height/2)
    ctx1.drawImage(this.babyEye, -this.babyEye.width/2,-this.babyEye.height/2)
    ctx1.restore()
}
