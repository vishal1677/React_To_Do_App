import { TodoItemsContext } from '../store/to-do-items-store';
import styles from './WelcomeMessage.module.css'
import { useContext, useState } from 'react';

const WelcomeMessage=({})=>{

  const {todoItems}=useContext(TodoItemsContext);
  
  return (
   todoItems.length  === 0  &&  <p className={styles.welcome}>Strive Karo aur pa loo</p>
  )
}

export default WelcomeMessage;