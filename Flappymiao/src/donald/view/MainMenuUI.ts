/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class MainMenuUI extends egret.SkinnableContainer{

        public label_life:egret.Label;
        public label_score:egret.Label;

        public constructor(){
            super();
            this.skinName = MainMenuUISkin;
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE, this.createCompleteEvent,this);
        }

        public createCompleteEvent():void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE, this.createCompleteEvent,this);
            ApplicationFacade.getInstance().registerMediator( new MainMenuMediator(this) );

        }
    }
}