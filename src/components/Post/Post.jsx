import styles from "./Post.module.css"

function Post({date, author, text}) {
    const element = (
        <div className={styles.container}>
                {date ? <h3 className={styles.date}>{date}</h3> : ""}
                <p className={styles.text}>
                    <span className={styles.author}>{author ? author : "N/A"}: </span>
                    {text ? text : "No text"}
                </p>
        </div>
    );

    return element;
}

export default Post;