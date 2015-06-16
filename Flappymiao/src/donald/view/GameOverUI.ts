/**
 * Created by wuyihao2 on 7/30/14.
 */

module game {
    export class GameOverUI extends egret.gui.SkinnableContainer{

        public tryagin_button:egret.gui.UIAsset;
        public constructor(){
            super();
            this.skinName = GameOverUISkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.gui.UIEvent):void{
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new GameOverMediator(this) );
        }

    }
}