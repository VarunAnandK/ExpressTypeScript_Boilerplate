
import * as User from './Controller/UserController';
import * as UserRole from './Controller/UserRoleController';
import * as Report from './Controller/ReportController';

// used to create the custome url 
export const AppRoutes = [
    { path: 'UserList', method: "get", action: User.List },
    { path: 'UserById/:id', method: "get", action: User.ById },
    { path: 'UserInsert', method: "post", action: User.Insert },
    { path: 'UserUpdate', method: "post", action: User.Update },
    { path: 'UserDelete/:id', method: "get", action: User.Delete },
    { path: 'Login', method: "post", action: User.Login },

    { path: 'UserRoleList', method: "get", action: UserRole.List },
    { path: 'UserRoleById/:id', method: "get", action: UserRole.ById },
    { path: 'UserRoleInsert', method: "post", action: UserRole.Insert },
    { path: 'UserRoleUpdate', method: "post", action: UserRole.Update },
    { path: 'UserRoleDelete/:id', method: "get", action: UserRole.Delete },

    { path: 'FirstAgmPrint', method: 'get', action: Report.FirstAgm }
]
// used to create the custome url