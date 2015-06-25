/**
 * Created by wuyihao2 on 7/31/14.
 */

module game{

    export class MainGameMediator extends puremvc.Mediator implements puremvc.IMediator{
        public static NAME:string = "MainGameMediator";

        public constructor(viewComponent:any){
            super(MainGameMediator.NAME,viewComponent);
        }

        public listNotificationInterests():Array<any>{
            return [
                GameCommand.GAME_PIPEMOVED
            ];
        }

        public handleNotification(notification:puremvc.INotification):void{
            var data:any = notification.getBody();
            switch(notification.getName())
            {
                case GameCommand.GAME_PIPEMOVED:
                    this.mainGameUI.hamburger1.x = data.x1;
                    this.mainGameUI.hamburger1.y = data.y1;
                    this.mainGameUI.hamburger2.x = data.x2;
                    this.mainGameUI.hamburger2.y = data.y2;
                    this.mainGameUI.background.x = data.x4;
            }
        }

        public get mainGameUI():MainGameUI{
            return <MainGameUI><any> (this.viewComponent);
        }
    }
}
