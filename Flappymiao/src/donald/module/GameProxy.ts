module game {

    export class GameProxy extends puremvc.Proxy implements puremvc.IProxy {
        public static NAME:string = "GameProxy";
        public mark:number = 0;
        public life:number = 3;
        public constructor(){
            super(GameProxy.NAME);
        }
        public reset():void{
            this.mark = 0;
            CommonData.isRunning = true;
            CommonData.life = 3;
            CommonData.score = 0;
            egret.Ticker.getInstance().register(this.timeOutEvent, this);
        }

        public timeOutEvent(advancedTime):void{
            this.sendNotification(GameCommand.GAME_TIMEOUT,advancedTime/1000);
        }
        public confict_test(bird:egret.Point,pipe:egret.Point):boolean{
            bird.x /= Constants.BirdScale;
            bird.y /= Constants.BirdScale;
            return Math.abs(pipe.x-bird.x)<Constants.birdWeidth &&
                (pipe.y - Constants.pipeHeight/2 >= bird.y  - Constants.birdHeight/2
                ||pipe.y + Constants.pipeHeight/2 <= bird.y + Constants.birdHeight/2)
                ||bird.y > Constants.mainHeight/2 - Constants.birdHeight/2
                ||bird.y < -Constants.mainHeight/2 + Constants.birdHeight/2;
        }
        public die():void{
            CommonData.life -= 1;
            this.sendNotification(GameCommand.GAME_KILL);
            if (CommonData.life == 0)
            {
                CommonData.isRunning = false;
                this.sendNotification(GameCommand.GAME_OVER);
                egret.Ticker.getInstance().unregister(this.timeOutEvent,this);
            }
        }
    }
}
