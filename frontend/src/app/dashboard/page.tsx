import Link from 'next/link'
import style from './page.module.css'

export default function Dashboard(){
    return <Link className={style.link} href="/">Home</Link>
}