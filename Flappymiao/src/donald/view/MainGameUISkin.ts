/**
 * Created by wuyihao2 on 8/2/14.
 */
module game {

    export class MainGameUISkin extends egret.Skin {
        private static _skinParts:Array<string> = ["hamburger1","hamburger2","background","birdUI"];

        public get skinParts():Array<string>{
            return MainGameUISkin._skinParts;
        }
        public constructor() {
            super();
        }
        public hamburger1:egret.UIAsset;
        public hamburger2:egret.UIAsset;
        public background:egret.UIAsset;
        public birdUI:BirdUI;

        public createChildren():void{
            super.createChildren();
            //egret.Logger.info("createChildren");

            //背景
            this.background = new egret.UIAsset();
            this.background.source = "mr.sweats";
            this.addElement(this.background);

            //汉堡1
            this.hamburger1 = new egret.UIAsset();
            this.hamburger1.source = "mr.hamburger";
            this.hamburger1.anchorOffsetY = Constants.mainHeight / 2;
            this.addElement(this.hamburger1);

            this.hamburger2 = new egret.UIAsset();
            this.hamburger2.source = "mr.hamburger";
            this.hamburger2.anchorOffsetY = Constants.mainHeight / 2;
            this.addElement(this.hamburger2);

            this.birdUI = new BirdUI();
            this.addElement(this.birdUI);
        }
    }
}