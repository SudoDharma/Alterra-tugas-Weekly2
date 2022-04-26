import styles from "./style.module.css"

import { Link } from "react-router-dom"

import {data} from "../../data"

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <ul>
                {data.map((section, sectionIdx) => (
                    <Link to={section.path} key={sectionIdx}>
                        <li>{section.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar