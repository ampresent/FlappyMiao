/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class GameOverUISkin extends egret.gui.Skin{

        private static _skinParts:Array<string> = ["tryagin_button"];
        public tryagin_button:egret.gui.UIAsset;
        public get skinParts():Array<string>{
            return GameOverUISkin._skinParts;
        }

        public constructor(){
            super();
        }

        public createChildren():void{
            var background = new egret.gui.UIAsset;
            this.addElement(background);
            background.source = "mr.gameover";
            background.scaleX *= 1.59;
            background.scaleY *= 1.59;
            background.scaleX *= Constants.Scale;
            background.scaleY *= Constants.Scale;

            this.tryagin_button = new egret.gui.UIAsset();
            this.tryagin_button.source = "mr.button1";
            this.tryagin_button.anchorOffsetX = 0;
            this.tryagin_button.anchorOffsetY = 0;
            this.tryagin_button.scaleX *= 0.3;
            this.tryagin_button.scaleY *= 0.3;
            this.tryagin_button.scaleX *= Constants.Scale;
            this.tryagin_button.scaleY *= Constants.Scale;
            this.tryagin_button.x = 220*Constants.Scale;
            this.tryagin_button.y = 320*Constants.Scale;
            this.addElement(this.tryagin_button);
        }
    }

}
