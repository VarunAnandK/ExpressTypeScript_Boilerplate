
import * as UserController from './Controller/UserController';


export const AppRoutes = [
    { path: 'UserList', method: "get", action: UserController.List },
    { path: 'UserById', method: "get", action: UserController.ById },
    { path: 'UserInsert', method: "post", action: UserController.Insert },
    { path: 'UserUpdate', method: "post", action: UserController.Update },
    { path: 'UserDelete/:id', method: "get", action: UserController.Delete }
]