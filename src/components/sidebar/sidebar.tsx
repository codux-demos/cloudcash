import classNames from 'classnames';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';
import logo from '../../assets/images/logo.svg';
import upgradeTeaser from '../../assets/images/illustrations/sidebar-footer-upgrade.svg';
import styles from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
    children?: React.ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={logo} alt="Cloudcash logo" />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="insights" aria-hidden />
                    Overview
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="list" aria-hidden />
                    Transactions
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="creditCard" aria-hidden />
                    Cards
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="draft" aria-hidden />
                    Invoices
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="verified" aria-hidden />
                    Goals
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Settings
                </Nav.Item>
            </Nav>
            <div className={styles.footer}>
                <img
                    src={upgradeTeaser}
                    className={styles.footerIllustration}
                    aria-hidden
                    alt=""
                />
                <span className={styles.footerText}>
                    Give your money awesome space in cloud
                </span>
                <Button onClick={() => alert('Navigate to upgrade flow')}>
                    Upgrade to Premium
                </Button>
            </div>
        </div>
    );
};
