import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable  } from "typeorm";
import Subject from './Subjects';
import Tests from "./Tests";

@Entity("teachers")
export default class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(() => Subject, subjects => subjects.teachers) 
    subjects: Subject[];

    @OneToMany(() => Tests, tests => tests.teacher)
    tests: Tests[]
}