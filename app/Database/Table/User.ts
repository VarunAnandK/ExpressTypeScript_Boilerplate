import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseTable } from "./BaseTable";

@Entity()
export class user extends BaseTable {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

}