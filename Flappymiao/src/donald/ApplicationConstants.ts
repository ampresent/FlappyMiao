/**
 * Created by wuyihao2 on 8/1/14.
 */
module game{
    export class Constants{//?????????????????????????????
        public static dash = -200				* 0.8875;
        public static accelerate = 400			* 0.8875;
        public static pipev = 300				* 0.8875;
        public static menuHeight = 160			* 0.8875;
        //public static timeout = 10;//毫秒
        public static screenWidth = 721.12676056338028169014 *0.8875;
        public static screenHeight = 1280		* 0.8875;
        public static mainHeight = 1120			* 0.8875;
        public static interval = 50;
        public static pipeHeight = 249			* 0.8875;
        public static birdx = 5					* 0.8875;
        public static birdWeidth = 81			* 0.8875;
        public static birdHeight = 67.431631049919375		*0.8875;
        public static hamburgerWidth = 180		* 0.8875;
        public static BirdScale = 0.35;
        public static showRate = 0.01;
		public static Scale = 0.8875;

		/*
		public constructor(){
		//if (!egret.Browser.getInstance().isMobile)
			Constants.dash				*= Constants.Scale;
			Constants.accelerate		*= Constants.Scale;
			Constants.pipev 			*= Constants.Scale;
			Constants.pipeHeight 		*= Constants.Scale;
			Constants.birdx 			*= Constants.Scale;
			Constants.birdWeidth 		*= Constants.Scale;
			Constants.birdHeight 		*= Constants.Scale;
			Constants.hamburgerWidth	*= Constants.Scale;

			Constants.menuHeight		*= Constants.Scale;
			Constants.screenWidth		*= Constants.Scale;
			Constants.screenHeight		*= Constants.Scale;
			Constants.mainHeight = Constants.screenHeight - Constants.menuHeight;
		}*/
    }
}
