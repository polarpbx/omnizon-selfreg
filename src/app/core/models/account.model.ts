export class Account{
    public id?:any;
    constructor(public naziv:string,public email:string,public lozinka:string,public potvrdaLozinke:string, public accept:boolean){}
}