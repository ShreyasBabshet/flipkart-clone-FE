import Search from "../Search/Search";
import styles from "./Header.module.scss";
// import { HeaderProps } from "./Header.types.ts"
import logo from "../../images/logo.png";
const Header: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <div
          onClick={() => {
            //   navigate("/");
          }}
          className={styles.LogoContainer}
        >
          <img className={styles.Logo} src={logo} alt="" />
        </div>
        <Search />
        <div className={styles.RightContainer}>
          <div className={styles.NavButtons}>
            <p>Hello,</p>
            <p>Guest</p>
          </div>
          <div className={styles.NavButtons}>
            <p>Return,</p>
            <p>& Orders</p>
          </div>
          <div className={styles.Cart}>
            {/* <img src={cart} alt="" /> */}
            <p>{0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
