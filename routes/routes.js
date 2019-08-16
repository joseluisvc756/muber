const DriversController = require ('../controllers/drivers_controller');

module.exports = (app) =>{
	// watch for incoming request of method GET
	// to route http://<host>:3050/api
	app.get('/api', DriversController.greeting);
	//	res.send({hi: 'there' });
	//});
	app.post('/api/drivers', DriversController.create);
	app.put('api/drivers/:id', DriversController.edit);
	app.delete('api/drivers/:id', DriversController.delete);
	app.get('/api/drivers', DriversController.index);
};