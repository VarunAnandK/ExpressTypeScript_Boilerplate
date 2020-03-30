import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { user_role } from '../Table/user_role'
import { user } from '../Table/user';

export default class Seed implements Seeder {
    public async run(factory: Factory, connection: Connection) {
        //User Role
        let UserRoleTable = new user_role();
        UserRoleTable.name = "Super Admin";
        UserRoleTable.landing_page = "Admin/Dashboard";
        UserRoleTable.created_by_id = 1;
        await UserRoleTable.save();
        //User Role
        let UserTable = new user();
        UserTable.name = "Super Admin";
        UserTable.user_name = "sadmin";
        UserTable.email = "abs@abs.com.sg";
        UserTable.password = "123";
        UserTable.user_role_id = 1;
        UserTable.created_by_id = 1;
        await UserTable.save();
    }
}