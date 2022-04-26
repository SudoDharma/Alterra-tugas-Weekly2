import styles from "./style.module.css"

const Section = ({data}) => {
    return(
        <div className={styles.container}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <h3>Screenshots: </h3>
            <div className={styles.image_container}>
                {data.img.map((image, imageIdx) => (
                    <img src={image} alt="screenshot" key={imageIdx}/>
                ))}
            </div>
        </div>
    )
}

export default Section