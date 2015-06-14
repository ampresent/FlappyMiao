/**
 * Created by wuyihao2 on 7/30/14.
 */

module game{

    export class GameContainer extends egret.UIStage{
        public mainGameUI:MainGameUI;
        public mainMenuUI:MainMenuUI;
        public blackmask:egret.UIAsset;
        public greeterUI:GreeterUI;
        public gameOverUI:GameOverUI;
        public constructor(){
            super();
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE, this.createCompleteEvent,this);
        }

        private createCompleteEvent(event:egret.UIEvent):void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE,this.createCompleteEvent,this);
            ApplicationFacade.getInstance().registerMediator(new ApplicationMediator(this));

            //ApplicationFacade.getInstance().sendNotification(GameCommand.GAME_RESET);
        }

        public createChildren():void{
            super.createChildren();
            //egret.Logger.info("GameContainer_createChildren");

            this.mainGameUI = new MainGameUI();
            this.mainGameUI.y = Constants.menuHeight + 1;
            //this.mainGameUI.mask = this.mainMenuUI;
            this.addElement(this.mainGameUI) ;

            this.mainMenuUI = new MainMenuUI();
            this.mainMenuUI.height = Constants.menuHeight;
            this.addElement(this.mainMenuUI);

            var _bm:egret.Shape = new egret.Shape();
            _bm.graphics.beginFill(0x000000,1);
            _bm.graphics.drawRect(0,0,Constants.screenWidth,Constants.screenHeight);
            _bm.graphics.endFill();

            this.blackmask = new egret.UIAsset;
            this.blackmask.source = _bm;
            this.blackmask.alpha = 1;
            this.addElement(this.blackmask);

            this.greeterUI = new GreeterUI();
            this.addElement(this.greeterUI);

            this.gameOverUI = new GameOverUI();
            this.gameOverUI.y = 350;
            //this.gameOverUI.alpha = 10;
            this.gameOverUI.visible = false;
            this.addElement(this.gameOverUI);
        }
    }
}