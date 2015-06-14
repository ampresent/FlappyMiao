/**
 * Created by wuyihao2 on 8/7/14.
 */

module game {

    export class BirdMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME:string = "BirdMediator";

        public constructor(viewComponent:any){
            super(BirdMediator.NAME,viewComponent);//这里写错了！！！不要混淆！
        }

        public listNotificationInterests():Array<any>{
            return [
                GameCommand.GAME_BIRDMOVED,
                GameCommand.GAME_BIRDDASH,
                //GameCommand.GAME_BIRDDASHED
            ];
        }
        public handleNotification(notification:puremvc.INotification):void{
            var data:number = notification.getBody();
            //egret.Logger.info("BirdMediator.handleNotification");
            switch(notification.getName())
            {
                case GameCommand.GAME_BIRDMOVED:
                    this.birdUI.y = data/Constants.BirdScale;
                    break;
                case GameCommand.GAME_BIRDDASH:
                    this.birdUI.armature.animation.gotoAndPlay("jump");
                    break;
            }
        }

        public get birdUI():BirdUI{
            return <BirdUI><any> (this.viewComponent);
        }
    }
}