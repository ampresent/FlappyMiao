/**
 * Created by wuyihao2 on 7/30/14.
 */

module game{
    export class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator{
        public static NAME:string = "ApplicationMediator";
        public constructor(viewComponent:any){
            super(ApplicationMediator.NAME, viewComponent);

            if (!egret.Browser.getInstance().isMobile){
                var self = this;
                document.addEventListener("keydown",function(event:KeyboardEvent){
                    switch (event.keyCode){
                        case 38:
                            self.dash();
                            break;
                    }
                });  //????document????????????????在这调用别的函数，就会出现找不到的错误
            }
            else{
                this.main.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDownHandle, this); //??????????????????????
            }
        }
        private lastMoveTime:number = 0;
        private dash(){
            if (CommonData.isRunning && (egret.getTimer()-this.lastMoveTime)>=Constants.interval){
                this.sendNotification(GameCommand.GAME_BIRDDASH);
                this.lastMoveTime = egret.getTimer();
            }
        }
        private mouseDownHandle(event:egret.TouchEvent):void{

        }


        public listNotificationInterests():Array<any>{
            return [
                GameCommand.GAME_OVER,
                GameCommand.GAME_RESET
            ];
        }

        public handleNotification(notification:puremvc.INotification):void{
            var data:any = notification.getBody();
            switch(notification.getName())
            {
                case GameCommand.GAME_OVER:
                    egret.Tween.get(this.main.blackmask).to({alpha:0.3},500);
                    this.main.gameOverUI.visible = true;
                    egret.Tween.get(this.main.gameOverUI).to({alpha:1},500);
                    //this.main.blackmask.alpha = 1;
                    //egret.Tween.get(this.main.blackmask),to({alpha:50},1000);
                    break;
                case GameCommand.GAME_RESET:
                    var self = this.main;

                    egret.Tween.get(this.main.gameOverUI).to({alpha:0},500);
                    egret.Tween.get(this.main.greeterUI).to({alpha:0},500);
                    egret.Tween.get(this.main.blackmask).to({alpha:0},500).call(function(){
                        self.gameOverUI.visible = false;
                        self.greeterUI.visible = false;
                    });
            }
        }


        public get main():GameContainer{
            return <GameContainer><any> (this.viewComponent);
        }
    }
}