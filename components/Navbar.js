import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = ()=>{
  return (<div className={styles.navbar}>
        <div className={styles.links}>
        <Link href="/">home</Link>
        <Link href="/mainpage">mainpage</Link>
        <Link href="/sobre">sobre</Link>  
        </div>
    </div>)
}
export default Navbar