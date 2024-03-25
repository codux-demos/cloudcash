import type { Manager, SimpleEmployee } from '../union-objects/union-objects';
import styles from './worker-person.module.scss';
import classNames from 'classnames';


export interface WorkerProps {
    className?: string;
    workerKey: string;
    workerProps: SimpleEmployee | Manager;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkerPerson = ({
    className,
    workerKey,
    workerProps,
}: WorkerProps) => {
    return (
        <div key={workerKey} className={classNames(styles.root, className)}>
            <div key={workerProps.name} className={styles.gridItem}>
                <h2>Name: {workerProps.name}</h2>
                <h3>Title: {workerProps.title}</h3>
                <h4>Age: {workerProps.age}</h4>
                <br/>
                {workerProps.hasOwnProperty('employees') ? <h6>Employs:</h6> : <h6>Manager:</h6>}
                <ul>
                    {workerProps.hasOwnProperty('employees') ? (
                        (workerProps as Manager).employees.map(({ name }) => (
                            <li key={name}>
                                <p>Name: {name}</p>
                            </li>
                        ))
                    ) : (
                        <li>
                            <p>
                                Managers name:{' '}
                                {(workerProps as SimpleEmployee).managersName}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
