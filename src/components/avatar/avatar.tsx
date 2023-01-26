import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './avatar.module.scss';

interface AvatarProps {
    className?: string;
    profilePic?: string | null;
    userName?: string | null;
    children?: React.ReactNode;
}

export const Avatar = ({
    className,
    profilePic,
    userName,
    children,
}: AvatarProps) => {
    const showInitials = !profilePic && typeof userName === 'string';
    const initials = showInitials && getInitials(userName);
    const showDefaultUserPic = !profilePic && !showInitials;
    return (
        <div
            className={classNames(
                styles.root,
                {
                    [styles.profilePic]: profilePic,
                },
                className
            )}
            style={
                typeof profilePic === 'string'
                    ? { backgroundImage: `url("${profilePic}")` }
                    : undefined
            }
        >
            {showInitials && <span>{initials}</span>}
            {showDefaultUserPic && <Icon glyph="person" size="small" />}
        </div>
    );
};

const getInitials = (userName: string) => {
    var names = userName.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};
