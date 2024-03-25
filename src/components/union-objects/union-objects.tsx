import { WorkerPerson } from '../worker-person/worker-person';
import styles from './union-objects.module.scss';
import classNames from 'classnames';

export interface UnionObjectsProps {
    className?: string;
    children?: React.ReactNode;
}

export interface SimpleEmployee {
    title: string;
    name: string;
    age: number;
    managersName: string;
}

export interface Manager {
    title: string;
    name: string;
    age: number;
    employees: SimpleEmployee[];
}

export const UnionObjects = ({ className }: UnionObjectsProps) => {
    const workers: (SimpleEmployee | Manager)[] = [
        {
            title: 'manager',
            name: 'Mia',
            age: 35,
            employees: [
                {title:'employer', name: 'Ann', age: 25, managersName: 'Mia' },
                { title:'employer',name: 'Lily', age: 30, managersName: 'Mia' },
            ],
        },
        { title:'employer', name: 'Ann', age: 25, managersName: 'Mia' },
        { title:'employer',name: 'Lily', age: 30, managersName: 'Mia' },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            {workers.map((worker) => (
                <WorkerPerson key={worker.name} workerKey={worker.name} workerProps={worker} />
            ))}
        </div>
    );
};
