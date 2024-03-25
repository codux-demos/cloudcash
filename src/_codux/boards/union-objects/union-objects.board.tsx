import { createBoard } from '@wixc3/react-board';
import { UnionObjects } from '../../../components/union-objects/union-objects';

export default createBoard({
    name: 'UnionObjects',
    Board: () => <UnionObjects />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 446,
    },
});
