export class Category{
    constructor(
        public category_ID:number,
        public category_Name:string,
        public cityID:number,
        public isParent:boolean,
        public description:string
    ){
    }
}