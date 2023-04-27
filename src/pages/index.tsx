import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useState } from 'react'
import Message from './Message';

export default function Home() {
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const handleClick = () => {
    setIsAlertVisible(pre => !pre)
  };

  return (
    <div>
      <button onClick={handleClick}>点击我</button>
      {isAlertVisible && <Message type="success" content="Ddd"/>}
      
    </div>
  );
}