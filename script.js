//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea = function(){
		return this._width*this._height;
	}
	
}

class Square extends Rectangle {
	constructor(side){
	super(side,side);	
	}
	getPerimeter=function(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
