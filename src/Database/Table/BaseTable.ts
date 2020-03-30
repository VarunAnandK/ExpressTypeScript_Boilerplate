import { PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export class BaseTable extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ type: "boolean", default: 1 })
    status: boolean;

    @Column({ type: "bigint" })
    created_by_id: number;

    @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
    created_on: Date;

    @Column({ type: "bigint", nullable: true })
    updated_by_id: number;

    @Column({ type: "datetime", nullable: true })
    updated_on: Date;
}