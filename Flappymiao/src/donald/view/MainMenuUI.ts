/**
 * Created by wuyihao2 on 8/14/14.
 */

module game{
    export class MainMenuUI extends egret.gui.SkinnableContainer{

        public label_life:egret.gui.Label;
        public label_score:egret.gui.Label;

        public constructor(){
            super();
            this.skinName = MainMenuUISkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent,this);
        }

        public createCompleteEvent():void{
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent,this);
            ApplicationFacade.getInstance().registerMediator( new MainMenuMediator(this) );

        }
    }
}