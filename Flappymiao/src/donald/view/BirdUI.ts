/**
 * Created by wuyihao2 on 8/7/14.
 */

module game {
    export class BirdUI extends egret.UIAsset{

        public constructor(){
            super();
            this.addEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        //public armatureDisplay:any;

        public armature:any;
        public createCompleteEvent(event:egret.UIEvent):void{
            this.removeEventListener(egret.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator( new BirdMediator(this) );

            var skeletonData = RES.getRes("skeleton_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");

            var factory = new dragonBones.factorys.EgretFactory();
            factory.addSkeletonData(dragonBones.objects.DataParser.parseSkeletonData(skeletonData));
            factory.addTextureAtlas(new dragonBones.textures.EgretTextureAtlas(texture, textureData));

            this.armature = factory.buildArmature("littlepig");
            var armatureDisplay = this.armature.getDisplay();
            armatureDisplay.scaleX *= Constants.BirdScale;
            armatureDisplay.scaleY *= Constants.BirdScale;
            this.source = armatureDisplay;
            dragonBones.animation.WorldClock.clock.add(this.armature);
            //this.anchorOffsetX = -100;
            this.anchorOffsetY = -Constants.mainHeight/2;
            this.x = Constants.birdWeidth/2;
            this.y = 0;//Constants.screenHeight/2;

            /*
            this.scaleX = 1;
            this.scaleY = 1;
            //this.rotation = 30;
            //this._scaleX = -0.8;
            */
            this.armature.animation.gotoAndPlay("fly");
            var self = this;
            egret.Ticker.getInstance().register(function (advancedTime) {
                dragonBones.animation.WorldClock.clock.advanceTime(advancedTime / 1000);
            }, this);
        }
    }
}