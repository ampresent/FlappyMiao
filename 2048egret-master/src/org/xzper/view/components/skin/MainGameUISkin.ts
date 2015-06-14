module game {

    export class MainGameUISkin extends egret.Skin{

        public constructor(){
            super();
        }

        /**
         * 和主机组件匹配的皮肤部件
         */
        private static _skinParts:Array<string> = [
            "tileGroup","contentGroup"
        ];

        public get skinParts():Array<string>{//这个很关键，但是为什么没有特殊显示出来??????????????????????????
            return MainGameUISkin._skinParts;
        }

        /**
         * 游戏底背景
         */
        private backUIAsset:egret.UIAsset;

        /**
         * 背景格子容器
         */
        private backGroundGroup:egret.Group;

        /**
         * 格子容器
         */
        public tileGroup:egret.Group;

        /**
         * 内容
         */
        public contentGroup:egret.Group;

        private gap:number = 16;
        public createChildren():void
        {
            super.createChildren;
            this.backUIAsset = new egret.UIAsset();
            this.backUIAsset.source = "source.background";
            //使用九宫格
            this.backUIAsset.scale9Grid = new egret.Rectangle(20, 20, 65, 65);
            this.backUIAsset.width = CommonData.size*(TileUI.size + this.gap) + this.gap;
            this.backUIAsset.height = this.backUIAsset.width;
            this.addElement(this.backUIAsset);

            //使用格子布局
            var layout:egret.TileLayout = new egret.TileLayout();
            layout.columnCount = layout.rowCount = CommonData.size;
            layout.horizontalGap = layout.verticalGap = this.gap;
            this.backGroundGroup = new egret.Group();
            this.backGroundGroup.x = this.backGroundGroup.y = this.gap;
            this.backGroundGroup.layout = layout;
            this.addElement(this.backGroundGroup);
            this.initBackGround(CommonData.size);

            this.tileGroup = new egret.Group();
            this.tileGroup.x = this.tileGroup.y = this.gap;
            this.addElement(this.tileGroup);

            this.contentGroup = new egret.Group();
            this.contentGroup.percentHeight = this.contentGroup.percentWidth = 100;
            this.contentGroup.touchEnabled = false;
            this.addElement(this.contentGroup);
        }

        /**
         * 初始化背景
         */
        private initBackGround(size:number):void{
            //背景格子
            var tile:egret.UIAsset;
            var totalNum:number = size * size;
            for(var i:number = 0;i < totalNum ; i++)
            {
                tile = new egret.UIAsset();
                tile.width = tile.height = TileUI.size;
                tile.source = "source.backtile";
                this.backGroundGroup.addElement(tile);
            }
        }

    }
}