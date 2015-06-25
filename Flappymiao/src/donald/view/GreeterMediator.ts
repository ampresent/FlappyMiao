/**
 * Created by wuyihao2 on 7/31/14.
 */

module game{

    export class GreeterMediator extends puremvc.Mediator implements puremvc.IMediator{
        public static NAME:string = "MainGameMediator";

        public startButtonClick():void{
            this.greeterUI.start_button.source = "mr.round2";
			this.greeterUI.start_button.scaleX *= Constants.Scale;
			this.greeterUI.start_button.scaleY *= Constants.Scale;
            this.sendNotification(GameCommand.GAME_RESET);

            egret.Tween.get(this.greeterUI.start_button).to({rotation:360},1000);
/*
            var self = this;
            egret.Tween.get(this.greeterUI.curtainObj).to({alpha:1},1000).call(function(){
                ApplicationFacade.getInstance().sendNotification(GameCommand.GAME_RESET);
                self.greeterUI.visible = false;
                egret.Tween.get(self.greeterUI.curtainObj).to({alpha:0},500);
            });
            //this.greeterUI.visible = false;*/
        }

        public constructor(viewComponent:any){
            super(GreeterMediator.NAME,viewComponent);
            this.greeterUI.start_button.addEventListener(egret.TouchEvent.TOUCH_TAP , this.startButtonClick, this);
            /*
            document.addEventListener("keydown",function(event:KeyboardEvent) {
                switch (event.keyCode) {
                    case 38:
                        ApplicationFacade.getInstance().sendNotification(GameCommand.GAME_RESET);
                        break;
                }
            });*/
        }


        public get greeterUI():GreeterUI{
            return <GreeterUI><any> (this.viewComponent);
        }
    }
}
