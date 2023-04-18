import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from"../../assets/images/frizka.png"

export const Navbar = () => {
    return(
        <div className={styles.containerNavbar}>
        <img 
        src={imgLogo} 
        alt="Este es el logo de la página" />
        <ul style={{display: "flex", gap: "30px"}}>
        <li>Bandoleras</li>
        <li>Riñoneras</li>
        <li>Bolsos</li>
        <li>Mochilas</li>
        <li>Sobres</li>
        </ul>
        <CartWidget/>

        </div>
    );
};