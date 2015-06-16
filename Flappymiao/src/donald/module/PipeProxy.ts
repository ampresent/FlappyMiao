/**
 * Created by wuyihao2 on 8/1/14.
 */
module game{
    export class PipeProxy extends puremvc.Proxy implements puremvc.IProxy{
        public static NAME:string = "PipeProxy";
        private pipe1_x:number = 0;
        private pipe1_y:number = 0;
        private pipe2_x:number = 0;
        private pipe2_y:number = 0;
        private background_x:number = 0;
        public constructor(){
            super(PipeProxy.NAME);
        }
        public reset():void{
            this.pipe1_x = Constants.screenWidth;
            this.pipe1_y = (Math.random()-0.5)*Constants.mainHeight*0.8;
            this.pipe2_x = Constants.screenWidth * 2;
            this.pipe2_y = (Math.random()-0.5)*Constants.mainHeight*0.8;

            //egret.Logger.info(Math.random()-0.5);
        }

        public timeout(scale:number):void{
            this.pipe1_x -= Constants.pipev * scale;
            this.pipe2_x -= Constants.pipev * scale;
            this.background_x -= Constants.pipev * scale;
            if (this.pipe1_x <= -Constants.hamburgerWidth){
                this.pipe1_x = this.pipe2_x;
                this.pipe1_y = this.pipe2_y;
                this.pipe2_x = Constants.screenWidth*2-Constants.hamburgerWidth;
                this.pipe2_y = (Math.random()-0.5)*Constants.mainHeight*0.8;

                CommonData.score += 1;
                this.sendNotification(GameCommand.GAME_SCORE);
            }
            if (this.background_x < -Constants.screenWidth)
                this.background_x = 0;

            this.sendNotification(GameCommand.GAME_PIPEMOVED,{x1:this.pipe1_x,y1:this.pipe1_y,x2:this.pipe2_x,y2:this.pipe2_y,x4:this.background_x});
        }

        public get pos():egret.Point{
            return new egret.Point(this.pipe1_x,this.pipe1_y);
        }
    }
}