import styles from "./Search.module.scss";
import { SearchProps } from "./Search.types.ts";
import searchIcon from "../../images/search1.png";

const Search: React.FC = () => {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SeachIconContainer}>
        <img src={searchIcon} alt="" />
      </div>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
