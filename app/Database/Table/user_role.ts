import { BaseTable } from "./BaseTable";
import { Column, Entity } from "typeorm";

@Entity()
export class user_role extends BaseTable {
    @Column()
    name: string;

    @Column()
    landing_page: string;
}