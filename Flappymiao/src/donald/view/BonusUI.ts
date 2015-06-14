/**
 * Created by wuyihao2 on 8/30/14.
 */

module game{
    class BonusUI extends egret.UIAsset {
        public constructor() {
            super();
            this.source = "mr.bonus";
            this.x = Math.random() * Constants.screenWidth;
            this.y = Math.random() * Constants.screenHeight;
        }
    }
}