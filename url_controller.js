var request = require('request');


function check_url(url){
	var options = {
                url: url,
                headers: {
            'User-Agent': 'request'
                }
        };

	return new Promise(function(resolve,reject){
		request.get(options,function(err,resp,body){
			if(err){
				reject(err);
			}else{
				resolve(JSON.parse('{"body":"valid"}'));
			}
		})
	})
}

exports.url_exists = function(req,res){
	var url = req.query.url;
	console.log("Url Check",url);
	var count = 0;
	var flag=false;
	while(flag==false){
		console.log(flag, count);
		return new Promise(function(resolve,reject){
			check_url(url).then(function(result){
                        console.log(result);
                        flag=true
                        res.status(200).json({message:'valid url'})
                },function(err){
                        console.log(err);
                        count++;
                        if(count==3){
                                res.status(200).json({message:'url not valid'});
                        }
                });
		/*count++;
		if(count==3){
			res.status(200).json({message:'url not valid'});
		}	
		})*/
		/*check_url(url).then(function(result){
			console.log(result);
			flag=true
			res.status(200).json({message:'valid url'})
		},function(err){
			console.log(err);
			count++;
			if(count==3){
				res.status(200).json({message:'url not valid'});
			}
		});*/
		});	
	}
}
