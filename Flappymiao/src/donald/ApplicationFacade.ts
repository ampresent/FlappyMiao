/**
 * Created by wuyihao2 on 7/30/14.
 */
module game{

    export class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade{

        public constructor(){
            super();
        }
        public static STARTUP:string = "startup";

        public static getInstance():ApplicationFacade{
            if (this.instance == null) this.instance = new ApplicationFacade();
            return <ApplicationFacade><any> (this.instance);//????????????????????????
        }

        public initializeController():void{
            super.initializeController();
            //egret.Logger.info("initializeController");
            this.registerCommand(ApplicationFacade.STARTUP, StartupCommand);
        }

        public startUp(rootView:egret.DisplayObjectContainer):void{
            //egret.Logger.info("startUp");
            this.sendNotification(ApplicationFacade.STARTUP,rootView);
            this.removeCommand(ApplicationFacade.STARTUP);
        }
    }
}