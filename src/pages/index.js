// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
//import Profile from './components/gallery'
//import Profile from './qcomps/profile_mistake'
//import FirstComp from './qcomps/firstcomp'
//import Profile from './components/profile_props'
//import Profile from './qcomps/gallery_props'

//import Bios from './qcomps/bios'
//import Todos from './qcomps/todos'

//import Holder from './components/square'

//import Profile from './components/props_item'

import Profile from './qcomps/props_item'
export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
    </div>
  )
}
// any tags starts with a lower case letter, are assume to be a in-built html tag.
// while the upper-case first letter can means a customized tag.
