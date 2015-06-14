/**
 * Created by wuyihao2 on 8/30/14.
 */

module game{
    export class ObjectPool {
        private static pool:Object = {};
        private list:Array<any>;
        private className:string;

        public constructor(className:string){
            this.className = className;
            this.list = [];
        }

        public borrowObject():any{
            if (this.list.length > 0) {
                return this.list.shift();
            }
            var clazz:any = egret.getDefinitionByName(this.className);
            return new clazz();
        }

        public returnObject(value:any):void {
            this.list.push(value);
        }

        public static getPool(className:string):ObjectPool{
            if (!ObjectPool.pool[className]) {
                ObjectPool.pool[className] = new ObjectPool(className);
            }
            return ObjectPool.pool[className];
        }
    }
}