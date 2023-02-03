export class Mensaje{
    reseptor:String;
    emisor:String;
    text:String;
    
    constructor(reseptor:String,emisor:String,text:String){
        this.reseptor=reseptor;
        this.emisor=emisor;
        this.text=text;
    }
}