/**
 * Created by wuyihao2 on 7/30/14.
 */

module game{
    export class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator{
        public static NAME:string = "ApplicationMediator";
        public constructor(viewComponent:any){
            super(ApplicationMediator.NAME, viewComponent);

			var self = this;	//为了使回调函数使用dash，必须让它知道这个Mediator的存在，因为添加监听器的主体是最上层的容器：stage
			this.main.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){		//使用stage的原因是最上层容器，具有最广泛的作用范围
				self.dash();
			},self);
        }
        private lastMoveTime:number = 0;
        private dash(){
			if (CommonData.isRunning){
				if ((egret.getTimer()-this.lastMoveTime)>=Constants.interval){
					this.sendNotification(GameCommand.GAME_BIRDDASH);
					this.lastMoveTime = egret.getTimer();
				}
			}else{
				this.sendNotification(GameCommand.GAME_RESET);
			}
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
