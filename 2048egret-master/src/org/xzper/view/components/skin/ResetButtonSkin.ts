/**
 * Created by xzp on 2014/6/17.
 */

module game

{
    export class ResetButtonSkin extends egret.Skin{

        public constructor(){
            super();
            this.states = ["up","down","disabled"];
        }

        private uiAsset:egret.UIAsset;

        public createChildren():void{
            super.createChildren();
            this.uiAsset = new egret.UIAsset();
            this.uiAsset.percentHeight = this.uiAsset.percentWidth = 100;
            this.addElement(this.uiAsset);
        }

        public commitCurrentState():void{
            super.commitCurrentState();
            switch (this.currentState){
                case "up":
                    this.uiAsset.source = "source.resetButton_up";
                    break;
                case "down":
                    this.uiAsset.source = "source.resetButton_over";
                    break;
                case "disabled":
                    this.uiAsset.source = "source.resetButton_over";
                    break;
            }
        }
    }
}