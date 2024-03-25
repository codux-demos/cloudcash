import { WorkerPerson } from '../worker-person/worker-person';
import styles from './union-objects.module.scss';
import classNames from 'classnames';

export interface UnionObjectsProps {
    className?: string;
    children?: React.ReactNode;
}

interface SimpleEmployee {
    name: string;
    age: number;
    managersName: string;
}

interface Manager {
    name: string;
    age: number;
    employees: SimpleEmployee[];
}

export const UnionObjects = ({ className }: UnionObjectsProps) => {
    const workers: (SimpleEmployee | Manager)[] = [
        {
            name: 'Mia',
            age: 35,
            employees: [
                { name: 'Ann', age: 25, managersName: 'Mia' },
                { name: 'Lily', age: 30, managersName: 'Mia' },
            ],
        },
        { name: 'Ann', age: 25, managersName: 'Mia' },
        { name: 'Lily', age: 30, managersName: 'Mia' },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            {workers.map((worker) => (
                <WorkerPerson key={worker.name} workerKey={worker.name} workerProps={worker} />
            ))}
        </div>
    );
};
