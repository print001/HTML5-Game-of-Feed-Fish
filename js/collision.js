var orange="255,160,102,"
var white="255,255,255,"
function momFruitsCollision() {
    if(!data.gameOver){
        for(var i=0;i<fruits.num;i++){
            if(fruits.alive[i]){
                var l=calLength2(fruits.x[i],fruits.y[i],mom.x,mom.y)
                if(l<900){
                    wave.born(fruits.x[i],fruits.y[i],white)
                    fruits.dead(i)
                    data.fruitNum++
                    mom.bigBodyCount++
                    if(mom.bigBodyCount>7){
                        mom.bigBodyCount=7
                    }
                    if(fruits.fruitType[i]==="blue"){
                        data.double=2
                    }else{
                        data.double=1
                    }
                }
            }
        }
    }

}
function momBabyCollision() {
    var count=false
    if(data.fruitNum>0&&!data.gameOver){
        var l=calLength2(mom.x,mom.y,baby.x,baby.y)
        if(count===false){
            if(l<900){
                count=true
                wave.born(baby.x,baby.y,orange)
                baby.babyFadeCount=0
                mom.bigBodyCount=0
                data.addScore()
            }else{
                count=false
            }
        }

    }


}