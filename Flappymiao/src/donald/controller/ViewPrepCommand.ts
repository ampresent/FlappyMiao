

module game {

    export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{

        public constructor(){
            super();
        }
        public execute(notification:puremvc.INotification):void{
//			var main:AppContainer = notification.getBody() as AppContainer;
//			facade.registerMediator( new ApplicationMediator(main) );
        }
    }
}