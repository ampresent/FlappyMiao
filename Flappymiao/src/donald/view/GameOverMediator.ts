/**
 * Created by wuyihao2 on 7/31/14.
 */

module game{

    export class GameOverMediator extends puremvc.Mediator implements puremvc.IMediator{
        public static NAME:string = "GameOverMediator";

        public tryagainButtonClick():void{
            this.gameOverUI.tryagin_button.source = "mr.button2";
            var self = this;
            egret.setTimeout(function(){
                self.gameOverUI.tryagin_button.source = "mr.button1";
            }, this, 500);
            this.sendNotification(GameCommand.GAME_RESET);
        }
        /*
        public listNotificationInterests():Array<any>{
            return [
                GameCommand.GAME_OVER
            ];
        }

        public handleNotification(notification:puremvc.INotification):void{
            var data:any = notification.getBody();
            switch(notification.getName())
            {
                case GameCommand.GAME_OVER:

            }
        }*/

        public constructor(viewComponent:any){
            super(GameOverMediator.NAME,viewComponent);
            this.gameOverUI.tryagin_button.addEventListener(egret.TouchEvent.TOUCH_TAP , this.tryagainButtonClick, this);
        }


        public get gameOverUI():GameOverUI{
            return <GameOverUI><any> (this.viewComponent);
        }
    }
}