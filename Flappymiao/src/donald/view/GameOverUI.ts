/**
 * Created by wuyihao2 on 7/30/14.
 */

module game {
    export class GameOverUI extends egret.SkinnableContainer{

        public tryagin_button:egret.UIAsset;
        public constructor(){
            super();
            this.skinName = GameOverUISkin;
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.UIEvent):void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new GameOverMediator(this) );
        }

    }
}