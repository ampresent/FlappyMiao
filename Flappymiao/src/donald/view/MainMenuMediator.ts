/**
 * Created by wuyihao2 on 8/14/14.
 */
module game {

    export class MainMenuMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME:string = "MainMenuMediator";

        public constructor(viewComponent:any) {
            super(MainMenuMediator.NAME, viewComponent);
            //this.mainGameUI.resetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startButtonClick, this);
        }
/*
        public startButtonClick(event:egret.TouchEvent):void {
            this.sendNotification(GameCommand.GAME_RESET);
        }*/

        public listNotificationInterests():Array<any>{
            return [
                GameCommand.GAME_KILL,
                GameCommand.GAME_SCORE,
                GameCommand.GAME_RESET
            ];
        }

        public handleNotification(notification:puremvc.INotification):void {
            var data:any = notification.getBody();
            switch (notification.getName()) {
                case GameCommand.GAME_KILL:
                    this.mainMenuUI.label_life.text = ("× " + CommonData.life.toString());
                    //egret.Logger.info(CommonData.life.toString());
                    break;
                case GameCommand.GAME_SCORE:
                    this.mainMenuUI.label_score.text = CommonData.score.toString();
                    break;
                case GameCommand.GAME_RESET:
                    this.mainMenuUI.label_life.text = ("× " + CommonData.life.toString());
                    this.mainMenuUI.label_score.text = CommonData.score.toString();
                    break;
            }
        }

        public get mainMenuUI():MainMenuUI{
            return <MainMenuUI><any> (this.viewComponent);
        }
    }
}