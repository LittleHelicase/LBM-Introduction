
function cornerInitialize(size , pos) {
	if(pos.x > 0.3 * size.width && pos.y < 0.7*size.height){
		return [Math.round(Math.random()*2.7),
			Math.round(Math.random()*2.7),
			Math.round(Math.random()*2.7),
			Math.round(Math.random()*2.7)];
	} else {
        return [Math.round(Math.random()*0.7),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6)];
		return [0,0,0,0];
	}
}

function allRandom(){
	return [Math.round(Math.random()*0.7),
			Math.round(Math.random()*0.7),
			Math.round(Math.random()*0.7),
			Math.round(Math.random()*0.7)];
}
function oneLine(size, pos){
    if(pos.y==Math.floor(0.5*size.height)){
        return  [1,1,0,0];
    }
    else{
        return [0,0,0,0];
    }
}
function centerBlock(size, pos){
    var minSize = (size.height < size.width) ? size.height : size.width;
    var blockWidth = minSize * 0.2
    if(pos.y > 0.5*size.height - blockWidth
    && pos.y < 0.5*size.height + blockWidth
    && pos.x > 0.5*size.width - blockWidth
    && pos.x < 0.5*size.width + blockWidth)
        return [1,1,1,1];
    //return [0,0,0,0];
    return [Math.round(Math.random()*0.7),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6)];
}

function distWhere(pos, where){
    var dist = Math.sqrt((pos.x - where.x)*(pos.x - where.x) +
        (pos.y - where.y)*(pos.y - where.y));
    return dist;
}

function centerSphere(size, pos){
    var minSize = (size.height < size.width) ? size.height : size.width;
    var blockWidth = minSize * 0.2
    var dist1 = distWhere(pos, {x:size.width*0.3, y:size.height*0.5});
    var dist2 = distWhere(pos, {x:size.width*0.7, y:size.height*0.5});
    dist2 = 10000000;
    if(dist1 < blockWidth || dist2 < blockWidth)
        return [1,1,1,1];
    return [0,0,0,0];
    return [Math.round(Math.random()*0.7),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6),
                Math.round(Math.random()*0.6)];
}

function left(size, pos){
    if(pos.x == pos.y)
        return [0,1,0,0];
    return [0,0,0,0]
}
