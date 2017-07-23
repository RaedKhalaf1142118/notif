export class Admin{
    constructor(
        public name:string,
        public img:string,
        public id:number,
        public category:string,
        public bio:string,
        public password?:string
    ){}
}