
import * as UserController from './Controller/UserController';
import * as UserRoleController from './Controller/UserRoleController';


export const AppRoutes = [
    { path: 'UserList', method: "get", action: UserController.List },
    { path: 'UserById/:id', method: "get", action: UserController.ById },
    { path: 'UserInsert', method: "post", action: UserController.Insert },
    { path: 'UserUpdate', method: "post", action: UserController.Update },
    { path: 'UserDelete/:id', method: "get", action: UserController.Delete },
    { path: 'Login', method: "post", action: UserController.Login },

    { path: 'UserRoleList', method: "get", action: UserRoleController.List },
    { path: 'UserRoleById/:id', method: "get", action: UserRoleController.ById },
    { path: 'UserRoleInsert', method: "post", action: UserRoleController.Insert },
    { path: 'UserRoleUpdate', method: "post", action: UserRoleController.Update },
    { path: 'UserRoleDelete/:id', method: "get", action: UserRoleController.Delete },
]