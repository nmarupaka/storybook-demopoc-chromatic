import React from "react";
import styles from './Box.module.scss';

function BoxBt({children}){
    return <div className={styles.BoxBt}>{children}</div>
};

export default BoxBt;