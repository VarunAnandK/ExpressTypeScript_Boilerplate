import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseTable } from "./BaseTable";

@Entity()
export class User extends BaseTable {

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    user_name: string;

    @Column()
    password: string;

}