import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Home() {
  return (
    <div>
      {
        [1,2,3,4].map((id) => (
          <Link className='block h-12 w-16 bg-blue-400 my-8' href={`/user/${id}`} key={id}>{id}eee|| </Link>
        ))
      }
      <Button variant="contained" color="primary"> ddd</Button>
      <Alert >dd</Alert>
      <Checkbox {...label} />
    </div>
  )
}