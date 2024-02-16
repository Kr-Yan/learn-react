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

//import Profile from './qcomps/props_item'


//02/12
//import List from './components/list_plain.js'
//import List from './components/list_keys.js'

//import List from './qcomps/list_keys_id.js'
//import Recipe from './qcomps/recipes.js'

//import Button from './components/button.js'
//import Button from './qcomps/menuBar.js'

//import Button from './components/whyState.js'
//import Button from './components/state.js'
//import Button from './qcomps/state.js'
//import PersonData from './components/stateObj.js'


//02/14
//import Button from './qcomps/stuckForms.js'
//import Button from './qcomps/thankYouCrash.js'
//import Form from './components/snapshot2.js'
//import Form from './components/queueUpdates.js'
//import Form from './qcomps/shoppingCart.js'
//import Form from './components/updObjects.js'
import Form from './qcomps/updObjectsForm.js'
export default function Home() {
  return (
    <div className={styles.main}>
        <PersonData />
    </div>
  )
}
// any tags starts with a lower case letter, are assume to be a in-built html tag.
// while the upper-case first letter can means a customized tag.
