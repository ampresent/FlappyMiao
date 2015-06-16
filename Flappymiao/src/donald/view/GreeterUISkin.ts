/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class GreeterUISkin extends egret.gui.Skin{
        /*private static _skinParts:Array<string> = ["label_life","life","label_score","score"];
         public get skinParts():Array<string>{
         return MainMenuUISkin._skinParts;
         }*/

        private static _skinParts:Array<string> = ["start_button","curtainObj"];
        public start_button:egret.gui.UIAsset;
        public curtainObj:egret.gui.UIAsset;
        public get skinParts():Array<string>{
            return GreeterUISkin._skinParts;
        }

        public constructor(){
            super();
        }

        public createChildren():void{
            var background = new egret.gui.UIAsset;
            background.source = "mr.foody";
            this.addElement(background);

            var stick = new egret.gui.UIAsset;
            stick.source = "mr.stick";
            stick.y = 903;
            stick.x = 0;
            this.addElement(stick);

            this.start_button = new egret.gui.UIAsset();
            this.start_button.source = "mr.round";
            this.start_button.anchorOffsetX = 300;
            this.start_button.anchorOffsetY = 300;

            this.start_button.x = 300;
            this.start_button.y = 900;
            this.addElement(this.start_button);


            var curtain = new egret.Shape;
            curtain.graphics.beginFill(0x000000,1);
            curtain.graphics.drawRect(0,0,Constants.screenWidth,Constants.screenHeight);
            curtain.graphics.endFill();
            this.curtainObj = new egret.gui.UIAsset;
            this.curtainObj.source = curtain;
            this.addElement(this.curtainObj);
            this.curtainObj.alpha = 0;
/*

            var la = new egret.gui.Label;
            la.text = "wefwf";
            la.size = 40;
            this.addElement(la);*/
        }
    }

}