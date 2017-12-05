for(keys in data) {
	var obj = {};
	obj['jccode'] = keys;
	for(innerdata in data[keys]){
		if(typeof(data[keys][innerdata]) == 'string'){
			obj[innerdata] = data[keys][innerdata];
		} else {
			var weekd = [];
			for(weekdata in data[keys][innerdata]){
				data[keys][innerdata][weekdata]['weekid'] = weekdata;
				weekd.push(data[keys][innerdata][weekdata]);
            }
			obj['weekdata'] = weekd;
		}
	}
	adata.push(obj);
}
console.log(adata)