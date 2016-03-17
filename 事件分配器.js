var U = {
	$: function(id){
		'use strict'
		if(typeof id == 'string'){
			return document.getElementById(id);
		}
	},

	/*
		为对象添加文本
		1）id是所要添加对象的ID
		2）message是所要添加的文本内容
	*/
	setText: function(id,message){
		'use strict'
		if((typeof id == 'string') && (typeof message == 'string')){
			var output = this.$(id);//var output = U.$(id)
		}
		if(!output) return false;
		if( output.textContent !== 'undefined'){
			output.textContent = message;
		}else{
			output.innerText = message;
		}
		return true;
	}

	/*
		为对象添加事件监听器
		1）obj 是要添加的对象
		2）type 是所监听事件的类型
		3）fn 是监听事件所要执行的函数
		4）bool是是否让事件冒泡，默认为false
	*/
	addEvent: function(obj,type,fn,bool){
		'use strict'
		if(typeof bool == 'undefined'){
			bool = false;
		}
		if(obj&&obj.addEventListener){
			obj.addEventListener(type,fn,bool);
		}else if(obj&&obj.attachEvent){
			obj.attachEvent('on' + type, fn);
		}
	}
	/*
		为对象移除事件监听器
		1）obj 是要移除的对象
		2）type 是所移除的监听事件的类型
		3）fn 是所移除监听事件要执行的函数
		4）bool是在设置时所设定的布尔值，默认为false（请谨慎确认再填true）
	*/
	removeEvent: function(obj,type,fn,bool){
		'use strict'
		if(typeof bool == 'undefined'){
			bool = false;
		}
		if(obj&&obj.removeEventListener){
			obj.removeEventListener(type,fn,bool);
		}else if(obj&&obj.detachEvent){
			obj.detachEvent('on'+type,fn);
		}
	}
};


