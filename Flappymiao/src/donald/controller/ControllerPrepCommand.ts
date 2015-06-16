/**
 * Created by wuyihao2 on 7/30/14.
 */

module game{
    export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        public constructor() {
            super();
        }

        public execute(notification:puremvc.INotification):void {
            (new GameCommand()).register();
        }
    }
}