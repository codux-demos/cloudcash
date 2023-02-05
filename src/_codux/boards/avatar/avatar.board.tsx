import { createBoard } from '@wixc3/react-board';
import { Avatar } from '../../../components/avatar/avatar';
import { Doc } from '../../../util-components/documentation/doc';
import { DocHeader } from '../../../util-components/documentation/doc-header';
import { DocSection } from '../../../util-components/documentation/doc-section';
import profilePic from '../../../assets/images/profile-pics/john.jpg';

export default createBoard({
    name: '📒 Avatar',
    Board: () => {
        return (
            <Doc>
                <DocHeader title="Avatar" />
                <DocSection
                    title="Default avatar"
                    description="No userName or profilePic provided"
                    contentLayout="inline"
                >
                    <Avatar userName={'ddd rrr xx dff'} />
                </DocSection>
                <DocSection
                    title="Initials"
                    description={
                        <div>
                            With userName, no profilePic. Initials will be
                            generated according to first letter of first and
                            last word.
                            <ol>
                                <li>
                                    <code>{`userName='John'`}</code>
                                </li>
                                <li>
                                    <code>{`userName='John Doe'`}</code>
                                </li>
                                <li>
                                    <code>{`username='John Williams Doe'`}</code>{' '}
                                    – no representation for {`"Williams"`} in
                                    initials
                                </li>
                            </ol>
                        </div>
                    }
                    contentLayout="inline"
                >
                    <Avatar userName="John" />
                    <Avatar userName="John Doe" />
                    <Avatar userName="John Williams Doe" />
                </DocSection>
                <DocSection
                    title="Profile picture"
                    description={
                        <div>
                            profilePic set
                            <ol>
                                <li>
                                    <code>{`profilePic="profile-pics/john.jpg"`}</code>
                                </li>
                                <li>
                                    <code>{`profilePic="profile-pics/john.jpg"`}</code>
                                    <code>{`userName="John"`}</code>
                                    {` – userName will not be used because profilePic is provided`}
                                </li>
                            </ol>
                        </div>
                    }
                    contentLayout="inline"
                >
                    <Avatar profilePic={profilePic} />
                    <Avatar profilePic={profilePic} userName="John" />
                </DocSection>
            </Doc>
        );
    },
    environmentProps: {
        canvasWidth: 816,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowHeight: 640,
    },
});
