import { createBoard } from '@wixc3/react-board';
import { WorkerPerson } from '../../../components/worker-person/worker-person';

const people = [
    {
        title: 'baby',
        name: 'Ella',
        age: 0.8,
        employees: [
            { title: 'parent', name: 'Efrat', age: 36, managersName: 'Ella' },
            { title: 'parent', name: 'Shay', age: 35, managersName: 'Ella' },
        ],
    },
    { title: 'parent', name: 'Efrat', age: 36, managersName: 'Ella' },
    { title: 'parent', name: 'Shay', age: 35, managersName: 'Ella' },
];

export default createBoard({
    name: 'Worker',
    Board: () => {
        return (
            <>
                {people.map((person) => (
                    <WorkerPerson
                        key={person.name}
                        workerKey={person.name}
                        workerProps={person}
                    />
                ))}
            </>
        );
    },
    isSnippet: true,
});
