/**
 * Created by wuyihao2 on 8/1/14.
 */
module game{
    export class BirdProxy extends puremvc.Proxy implements puremvc.IProxy{
        public static NAME:string = "BirdProxy";
        private rel_height:number = 0;
        private velocity:number = 0;
        public constructor(){
            super(BirdProxy.NAME);
        }

        public reset():void{
            this.rel_height = 0;
            this.velocity = 0;
        }

        public timeout(scale:number):void{
            /*if (this.velocity>0 && this.velocity + Constants.accelerate*scale <=0)
                this.sendNotification(GameCommand.GAME_BIRDDASHED);*/
            this.velocity += Constants.accelerate*scale;
            this.rel_height += this.velocity*scale;
            this.sendNotification(GameCommand.GAME_BIRDMOVED,this.rel_height);
            //egret.Logger.info("bird  " + this.rel_height.toString());
        }

        public birddash():void{
            //if (this.velocity < 0)
                this.velocity = Constants.dash;
            /*else
                this.velocity += Constants.dash;*/
        }

        public get pos():egret.Point{
            return new egret.Point(Constants.birdx,this.rel_height);
        }
    }
}