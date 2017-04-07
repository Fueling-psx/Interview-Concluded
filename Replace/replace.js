	var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}';
	var employee = {
	    name: 'XiaoMing', 
	    age: 11,
	    job: {
	        jobName: 'designer',
	        jobLevel: 'senior'
	    }
	};
	var getRepArray = function(_self) {
		var repStr = /\$\{[a-zA-Z0-9._]*\}/g;
		var repArray = _self.match(repStr);
		return repArray;
	}
	Object.prototype.getReplace = function(obj) {
		var _self = this;
		var	employeeArray = getRepArray(_self); 
		// 替换
		for(var i=0;i<employeeArray.length;i++) {
			var repKey = /[a-zA-Z.]+/;
			var key = repKey.exec(employeeArray[i]);
			// 判断空串
			if(key)  key = key[0];
			else  return "该信息错误或缺少匹配该信息的属性值！";

			if(key.indexOf("."))  key = key.split(".");
			if(obj.hasOwnProperty(key[0])) {
				var value = obj[key[0]];
				if(key[1])  value = value[key[1]];
				_self = _self.replace(employeeArray[i], value);		
			} 
			else  return "该信息错误或缺少匹配该信息的属性值！";
		}
		return _self;
	}

	Object.prototype.render = function(obj) {
		var str = this.getReplace(obj);
		return str;
	}
	var result = greeting.render(employee);
	console.log(result);