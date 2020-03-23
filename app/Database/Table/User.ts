import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { BaseTable } from "./BaseTable";
import { user_role } from "./user_role";

@Entity()
export class user extends BaseTable {

    @OneToOne(type => user_role, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "user_role_id" })
    user_role: user_role;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    api_token: string;
}