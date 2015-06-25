/**
 * Created by wuyihao2 on 8/2/14.
 */
module game {

    export class MainGameUISkin extends egret.gui.Skin {
        private static _skinParts:Array<string> = ["hamburger1","hamburger2","background","birdUI"];

        public get skinParts():Array<string>{
            return MainGameUISkin._skinParts;
        }
        public constructor() {
            super();
        }
        public hamburger1:egret.gui.UIAsset;
        public hamburger2:egret.gui.UIAsset;
        public background:egret.gui.UIAsset;
        public birdUI:BirdUI;

        public createChildren():void{
            super.createChildren();
            //egret.Logger.info("createChildren");

            //背景
            this.background = new egret.gui.UIAsset();
            this.background.source = "mr.sweats";
			this.background.height = Constants.mainHeight;
			this.background.width = Constants.screenWidth*2;
			//this.background.scaleX *= Constants.Scale;
			//this.background.scaleY *= Constants.Scale;
            this.addElement(this.background);

            //汉堡1
            this.hamburger1 = new egret.gui.UIAsset();
            this.hamburger1.source = "mr.hamburger";
            this.hamburger1.height = Constants.mainHeight*2;
            this.hamburger1.width = 140*Constants.Scale;
			this.hamburger1.anchorOffsetY = Constants.mainHeight/2;
			console.log(Constants.screenHeight)
			console.log(Constants.menuHeight);
            this.addElement(this.hamburger1);

            this.hamburger2 = new egret.gui.UIAsset();
            this.hamburger2.source = "mr.hamburger";
            this.hamburger2.height = Constants.mainHeight*2;
            this.hamburger2.width = 140*Constants.Scale;
			this.hamburger2.anchorOffsetY = Constants.mainHeight/2;
            this.addElement(this.hamburger2);

            this.birdUI = new BirdUI();
            this.addElement(this.birdUI);
        }
    }
}
