import Link from 'next/link'
import style from './style.module.css'

export default function Aside(){
    return(
        <div className={style.aside}>
            <Link href="/">Orbit</Link>
        </div>
    )
}