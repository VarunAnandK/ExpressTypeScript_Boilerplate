
import * as UserController from './Controller/UserController';

export const AppRoutes = [
    { path: '/api/UserList', method: "get", action: UserController.List },
    { path: '/api/UserInsert', method: "post", action: UserController.Insert },
    { path: '/api/UserUpdate', method: "post", action: UserController.Update },
    { path: '/api/UserDelete/:id', method: "get", action: UserController.Delete }
]