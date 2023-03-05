import { Avatar } from '../avatar/avatar';
import Card from '../card/card';
import { IconButton } from '../icon-button/icon-button';
import styles from './new-transaction.module.scss';
import profileAnn from '../../assets/images/profile-pics/ann.jpg';
import profileMonica from '../../assets/images/profile-pics/monica.jpg';
import profileJohn from '../../assets/images/profile-pics/john.jpg';
import profileMike from '../../assets/images/profile-pics/mike.jpg';

export const NewTransaction = () => {
    const users = [
        {
            userName: 'Ann',
            profilePic: profileAnn,
        },
        {
            userName: 'Monica',
            profilePic: profileMonica,
        },
        {
            userName: 'John',
            profilePic: profileJohn,
        },
        {
            userName: 'Mike',
            profilePic: profileMike,
        },
    ];
    return (
        <Card>
            <Card.Title>New Transaction</Card.Title>
            <Card.Content className={styles.destinations}>
                {users.map(({ userName, profilePic }, index) => (
                    <div className={styles.user} key={index}>
                        <Avatar
                            className={styles.profilePic}
                            profilePic={profilePic}
                            userName={userName}
                        />
                        <span className={styles.userName}>{userName}</span>
                    </div>
                ))}
                <div className={styles.addUser}>
                    <IconButton
                        className={styles.addButton}
                        glyph="add"
                        size="small"
                        onClick={() =>
                            alert('Placeholder: New transaction flow')
                        }
                    />
                    <span className={styles.userName}>Add</span>
                </div>
            </Card.Content>
        </Card>
    );
};
