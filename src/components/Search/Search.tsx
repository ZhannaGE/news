
import styles from './styles.module.css';

const Search = ({keywords, setKeywords}) => {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}/>
        </div>
    )
}

export default Search
