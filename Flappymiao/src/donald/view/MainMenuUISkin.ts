/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class MainMenuUISkin extends egret.gui.Skin{
        private static _skinParts:Array<string> = ["label_life","label_score"];
        public get skinParts():Array<string>{
            return MainMenuUISkin._skinParts;
        }

        public label_life:egret.gui.Label;
        public label_score:egret.gui.Label;
        public constructor(){
            super();
        }

        public createChildren():void{
            var background = new egret.gui.UIAsset;
            background.source = "mr.milk";
            this.addElement(background);

            var icon_life = new egret.gui.UIAsset;
            icon_life.source = "mr.pudding";
            icon_life.x = 0;
            icon_life.y = 75;
            icon_life.height = 80;
            icon_life.width = 91;
            this.addElement(icon_life);

            this.label_life = new egret.gui.Label;
            this.label_life.text = "× 3";
            this.label_life.x = 180;
            this.label_life.textColor = 0x666666;
            this.label_life.y = 75;
            this.label_life.size = 80;
            this.addElement(this.label_life);

            var icon_star = new egret.gui.UIAsset;
            icon_star.source = "mr.star";
            icon_star.x = Constants.screenWidth/2 + 1;
            icon_star.y = 75;
            icon_star.height = 80;
            icon_star.width = 80;
            this.addElement(icon_star);

            this.label_score = new egret.gui.Label;
            this.label_score.text = "0";
            this.label_score.x = 580;
            this.label_score.textColor = 0x666666;
            this.label_score.y = 75;
            this.label_score.size = 80;
            this.addElement(this.label_score);
        }
    }

}