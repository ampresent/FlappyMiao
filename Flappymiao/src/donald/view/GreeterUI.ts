/**
 * Created by wuyihao2 on 7/30/14.
 */

module game {
    export class GreeterUI extends egret.SkinnableContainer{

        public start_button:egret.UIAsset;
        public curtainObj:egret.UIAsset;

        public constructor(){
            super();
            this.skinName = GreeterUISkin;
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.UIEvent):void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new GreeterMediator(this) );
        }

    }
}