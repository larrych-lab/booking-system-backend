import homeController from "../controllers/index_controller.js";
import createController from "../controllers/create_controller.js";
import updateController from "../controllers/update_controller.js";
import deleteController from "../controllers/delete_controller.js";

const port = 3000;
const routers = (app)=> {
    app.get('/api/v1/home', homeController);
    app.post('/api/v1/create',createController);
    app.patch('/api/v1/update',updateController);
    app.delete('/api/v1/delete',deleteController);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

export default routers;