/**
 * Created by wuyihao2 on 7/30/14.
 */

module game{
    export class GameCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
        public constructor(){
            super();
        }
        public static NAME:string = "GameCommand";
        public static GAME_RESET:string = "game_reset";
        public static GAME_TIMEOUT:string = "game_timeout";
        public static GAME_BIRDDASH:string = "game_birddash";
        public static GAME_PIPEMOVED:string = "game_pipemoved";
        public static GAME_BIRDMOVED:string = "game_birdmoved";
        public static GAME_KILL:string = "game_kill";
        public static GAME_SCORE:string = "game_score";
        public static GAME_OVER:string = "game_over";
        //public static GAME_BIRDDASHED:string = "game_birddashed";

        public register():void {
            this.facade.registerCommand(GameCommand.GAME_RESET, GameCommand); //注册游戏重置消息
            this.facade.registerCommand(GameCommand.GAME_TIMEOUT, GameCommand); //定时任务
            this.facade.registerCommand(GameCommand.GAME_BIRDDASH, GameCommand); //鸟飞
            this.facade.registerCommand(GameCommand.GAME_PIPEMOVED, GameCommand);
            this.facade.registerCommand(GameCommand.GAME_BIRDMOVED, GameCommand);
            this.facade.registerCommand(GameCommand.GAME_KILL, GameCommand);
            this.facade.registerCommand(GameCommand.GAME_SCORE, GameCommand);
            this.facade.registerCommand(GameCommand.GAME_OVER, GameCommand);
            //this.facade.registerCommand(GameCommand.GAME_BIRDDASHED, GameCommand);
        }

        public execute( notification:puremvc.INotification ):void{
            var gameProxy:GameProxy = <GameProxy><any> (this.facade.retrieveProxy(GameProxy.NAME));//?????????
            var birdProxy:BirdProxy = <BirdProxy><any> (this.facade.retrieveProxy(BirdProxy.NAME));
            var pipeProxy:PipeProxy = <PipeProxy><any> (this.facade.retrieveProxy(PipeProxy.NAME));
            var data:any = notification.getBody();
            switch (notification.getName()){
                case GameCommand.GAME_RESET:
                    //egret.Logger.info("GAME_RESET");
                    gameProxy.reset();
                    birdProxy.reset();
                    pipeProxy.reset();
                    break;
                case GameCommand.GAME_TIMEOUT:
                    //egret.Logger.info("GAME_TIMEOUT");
                    birdProxy.timeout(<number><any>data);
                    pipeProxy.timeout(<number><any>data);
                    //bonusProxy.timeout(<number><any>data);
                    break;
                case GameCommand.GAME_BIRDDASH:
                    birdProxy.birddash();
                    break;
                case GameCommand.GAME_PIPEMOVED:
                    //碰撞检测
                    if (gameProxy.confict_test(birdProxy.pos,pipeProxy.pos)){
                        gameProxy.die();
                    }
                    break;
                case GameCommand.GAME_KILL:
                    birdProxy.reset();
                    pipeProxy.reset();
                    break;
            }
        }
    }
}