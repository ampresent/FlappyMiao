/**
 * Created by wuyihao2 on 7/30/14.
 */

module game {
    export class MainGameUI extends egret.gui.SkinnableContainer{

        public hamburger1:egret.gui.UIAsset;
        public hamburger2:egret.gui.UIAsset;
        public background:egret.gui.UIAsset;

        public constructor(){
            super();
            this.skinName = MainGameUISkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.gui.UIEvent):void{
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new MainGameMediator(this) );
        }

        //partAdded????????????????????????
    }
}