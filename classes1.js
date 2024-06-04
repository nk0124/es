

class Rect{
    constructor (h,w){
        this.height=h; this.width=w;
    }
    
    calcArea(){
        return this.height*this.width;
    }

    
    set width(x){
        this._width=x;
    }
    
    set height(x){
        this._height=x;
    }
    
    get width(){
        return this._width
    }

    get height(){
        return this._height
    }
}
