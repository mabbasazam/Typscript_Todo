import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("todos")
export class Todo {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "boolean", default: false })
  completed!: boolean;

  @Column({ type: "varchar", length: 255, nullable: true })
  projectName?: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  contact?: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  email?: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  name?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
