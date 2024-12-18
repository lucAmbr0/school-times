import React from "react";
import Button from '../Button/Button';
import styles from './ButtonTable.module.css';

function ButtonTable() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Button
            text="Done"
            variant="filled"
            iconName="check"
            onClick={() => {
              console.log("Clicked!");
            }}
          />
          <Button text="Done" variant="outlined" iconName="check" />
          <Button text="Done" variant="clear" iconName="check" />
        </div>
        <div>
          <Button
            text="Done"
            variant="filled"
            onClick={() => {
              console.log("Clicked!");
            }}
          />
          <Button text="Done" variant="outlined" />
          <Button text="Done" variant="clear" />
        </div>
        <div>
          <Button
            variant="filled"
            iconName="check"
            onClick={() => {
              console.log("Clicked!");
            }}
          />
          <Button variant="outlined" iconName="check" />
          <Button variant="clear" iconName="check" />
        </div>
      </div>
    </>
  );
}

export default ButtonTable;