import {formatDate} from "../../helpers/formatDate.ts";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
        <h1 className="font-bold text-4xl ">NewsLine</h1>
            <p className={styles.data}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;