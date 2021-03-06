import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entity";
import { Tag } from "./tags.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createDateTime: Date;

  @Column({ type: "text", default: null })
  title: string;

  @Column({ type: "text", default: null })
  text: string;

  @ManyToOne(type => User, user => user.notes)
  user: User;

  @ManyToMany(type => User, user => user.id)
  @JoinTable()
  like: User[];

  @ManyToMany(type => Tag, tag => tag.id)
  @JoinTable()
  tag: Tag[];
}
