/**
 * Created by wuyihao2 on 7/30/14.
 */

module game {
    export class MainGameUI extends egret.SkinnableContainer{

        public hamburger1:egret.UIAsset;
        public hamburger2:egret.UIAsset;
        public background:egret.UIAsset;

        public constructor(){
            super();
            this.skinName = MainGameUISkin;
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.UIEvent):void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new MainGameMediator(this) );
        }

        //partAdded????????????????????????
    }
}