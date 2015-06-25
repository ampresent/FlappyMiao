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
			background.scaleX *= Constants.Scale;
			background.scaleY *= Constants.Scale;
            this.addElement(background);

			
            var stick = new egret.gui.UIAsset;
            stick.source = "mr.stick";
            stick.y = 903*Constants.Scale;
            stick.x = 0*Constants.Scale;
			stick.scaleX *= Constants.Scale;
			stick.scaleY *= Constants.Scale;
            this.addElement(stick);

            this.start_button = new egret.gui.UIAsset();
            this.start_button.source = "mr.round";
			this.start_button.x = 300 * Constants.Scale;
			this.start_button.y = 300 * Constants.Scale;
			this.start_button.scaleX /= Constants.Scale;
			this.start_button.scaleY /= Constants.Scale;
            this.start_button.anchorOffsetX = 300*Constants.Scale;
            this.start_button.anchorOffsetY = -150*Constants.Scale;
            this.addElement(this.start_button);

            var curtain = new egret.Shape;
            curtain.graphics.beginFill(0x000000,1);
            curtain.graphics.drawRect(0,0,Constants.screenWidth,Constants.screenHeight);
            curtain.graphics.endFill();
            this.curtainObj = new egret.gui.UIAsset;
            this.curtainObj.source = curtain;
            this.addElement(this.curtainObj);
            this.curtainObj.alpha = 0;
			
        }
    }

}
