export class User{
    constructor(
        public user_ID:number,
        public user_name:string,
        public user_password:string,
        public ntf_num_per_day:number,
        public user_email:string,
        public user_region:string,
        public user_phone:string,
        public user_Type:number,
        public user_img:string
    ){}
}