var fruitObj=function () {
    this.alive=[]
    this.orange=new Image()
    this.blue=new Image()
    this.x=[]
    this.y=[]
    this.l=[]
    this.spd=[]
    this.aneID=[]
    this.fruitType=[]
}
fruitObj.prototype.num=20
fruitObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false
        this.born(i)
        this.l[i]=0
        this.spd[i]=Math.random()*0.01+0.005
    }
    this.orange.src="./src/fruit.png"
    this.blue.src="./src/blue.png"
}
fruitObj.prototype.draw=function () {
    var pic
    for(var i=0;i<this.num;i++) {
        if(this.alive[i]===true) {
            if (this.l[i] <= 14) {
                this.x[i]=ane.headx[this.aneID[i]]
                this.l[i] += this.spd[i] * deltaTime
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime
            }
            if(this.fruitType[i]==='blue') {
               pic=this.blue
            }else{
                pic=this.orange
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] / 2, this.y[i] - this.l[i] / 2, this.l[i], this.l[i])
            if (this.y[i] < 10) {
                this.alive[i] = false
            }
        }
    }
}
fruitObj.prototype.born=function (i) {
        this.alive[i]=true
        this.aneID[i]=Math.floor(Math.random()*ane.num)
        this.x[i]=ane.headx[this.aneID[i]]
        this.y[i]=ane.heady[this.aneID[i]]
        this.l[i]=0
        var random=Math.random()
        if(random<0.2) {
            this.fruitType[i] = 'blue'
        }else{
            this.fruitType[i]='orange'
        }
}
fruitObj.prototype.dead=function (i) {
    if(this.alive[i]){
        this.alive[i]=false
    }else{
        return
    }

}
function fruitMonitor() {
    var num=0
    for(var i=0;i<fruits.num;i++){
        if(fruits.alive[i]){
            num++
        }
        if(num<=15){
            sendFruit()
        }
    }
}
function sendFruit() {
    for(var i=0;i<fruits.num;i++){
        if(!fruits.alive[i]){
            fruits.born(i)
            return
        }
    }
}