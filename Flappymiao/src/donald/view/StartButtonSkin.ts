/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class StartButtonSkin extends egret.Skin{

        public constructor(){
            super();
            this.states = ["up","down"];
        }

        private stick:egret.UIAsset;
        private round:egret.UIAsset;

        public createChildren():void{
            super.createChildren();
            this.round = new egret.UIAsset();
            this.addElement(this.round);
        }

        public commitCurrentState():void{
            super.commitCurrentState();
            var self = this;
            switch (this.currentState)
            {
                case "down":
                    this.round.source = "mr.round2";
                    break;
                case "up":
                    this.round.source = "mr.round";
                    break;
            }
        }
    }

}