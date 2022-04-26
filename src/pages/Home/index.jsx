import styles from "./style.module.css"

import { Outlet } from "react-router-dom"

import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"

const Home = () => {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Sidebar/>
            <div className={styles.outlet_container}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home