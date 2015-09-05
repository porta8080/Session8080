function Session8080(){}

Session.id = null;

Session8080.set = function(k,v){
	if(k == '_id') return false;
    window.localStorage.setItem(k,v);
};

Session8080.setAll = function(o){
	for(var k in o) window.localStorage.setItem(k,o[k]);
}

Session8080.get = function(k){
    if(!k) return window.localStorage.getItem('_id');
    return window.localStorage.getItem(k);
};

Session8080.delete = function(k){
    window.localStorage.removeItem(k);
};

Session8080.has = function(k){
    return k in window.localStorage;
};

Session8080.hasStarted = function(k){
    return '_id' in window.localStorage;
};

Session8080.start = function(o){
    if(!Session8080.hasStarted()){
		Session.id = new Date().getTime();
        window.localStorage.setItem('_id',Session.id);		
		if(o) Session8080.setAll(o);
        return true;
    }else return false;
};

Session8080.destroy = function(){
    window.localStorage.clear();
	Session.id = null;
};
