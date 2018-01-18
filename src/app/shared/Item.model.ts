export class Item{
    constructor(public name:String, public price :number,public _id:string,public _v:string) {
        this.name = name;
        this.price = price;
        this._id = _id ;
        this._v= _v;
    }
}