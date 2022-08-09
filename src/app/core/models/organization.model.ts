enum DocType{
    UBL="UBL 2.1",
    Edifact="Edifact"
};
enum AccPoint{
    Omnizon="Omnizon",
    Own="Own"
};
export class Organization{
    public id?:any;
    public docType?:DocType;
    public accPoint?:AccPoint;
    public accRoute?:string;
    constructor(public oib:string,public adresa:string,public drzava:string,public email:string, public logo:string){}
}

// {
//     Account:
// •       naziv firme : string
// •       email : string
// •       lozinka : string
// •       potvrda lozinke : string
// •       pristajem na uvjete : boolean
 
 
// Dodatni podaci za unos organizacije I XA
 
 
// XA informacije:
// •       Array [Document info]
 
 
// Document info:
// •       doc type : string
// •       direction: string
// •       source firma
// •       destination firma
// }