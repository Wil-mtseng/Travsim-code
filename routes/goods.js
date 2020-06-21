const goodsRoutes = (app, fs) => {
	
	//Read available request
	app.get('/getAvailable', async(req, res) =>{
		
		try{
			// Reads goods.json file 
			fs.readFile('./db/goods.json', 'utf8', (req, goods)=> {		
			console.log(goods);
			res.send(JSON.parse(goods));
			res.end();
		 })

		} catch(e){
			console.log(e);
		}	
	});


	// Post limit request
	app.post('/setLimit/:id', async(req, res) =>{
		try{
			fs.readFile('./db/goods.json', 'utf8', (req, goods)=> {
				const goodsId = req.body.id;
				goods[goodsId] = JSON.parse(req.body.goods)
				console.log(req.body)
			})

			fs.writeFile('./db/goods.json',JSON.stringify(goods, null, 2), (err) =>{
				if(err){
					throw err
				};
				console.log(goods);
				res.status(200).send(`goods id:${goodsId} limit has been set`) 
			})

		} catch(e){
			console.log(e)
		}
	})
};


module.exports = goodsRoutes;
