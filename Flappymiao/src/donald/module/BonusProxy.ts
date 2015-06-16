/**
 * Created by wuyihao2 on 8/30/14.
 */

module game{
    class BonusProxy extends puremvc.Proxy implements puremvc.IProxy{
        public static NAME:string = "BonusProxy";

        public constructor(){
            super(BonusProxy.NAME);
        }

        public timeout(advanceTime:number):void{
            if (Math.random() < Constants.showRate * advanceTime){
                this.createBonus();
            }
        }

        public createBonus():void{
            var newbonus:BonusUI = ObjectPool.getPool("game.BonusUI").borrowObject();
        }
    }
}
