import styles from './Container.module.css';

function Container ({ children }){
    return(
        <section classNme={styles.Container}>
            {children}
        </section>
    )
}

export default Container;