var waveObj=function () {
    this.x=[]
    this.y=[]
    this.alive=[]
    this.r=[]
    this.color=[]
}
waveObj.prototype.num=10
waveObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false
        this.r[i]=0
    }
}
waveObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.r[i]=this.r[i]+deltaTime*0.05
            if(this.r[i]>100){
                this.alive[i]=false
            }
            var alpha=1-this.r[i]/100
            ctx1.save
            ctx1.beginPath()
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI)
            ctx1.closePath()
            ctx1.lineWidth=2
            ctx1.strokeStyle="rgba("+this.color[i]+alpha+")"
            ctx1.stroke()
            ctx1.restore()
        }
    }
}
waveObj.prototype.born=function (x,y,color) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            this.alive[i]=true
            this.r[i]=10
            this.x[i]=x
            this.y[i]=y
            this.color[i]=color
            return
        }
    }
}