import React from "react";
import Navbar from './components/Navbar'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chats from "./components/Chats";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-full bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {

    const [user] = useAuthState(auth)
    // console.log(user)
  return (
    <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          <Navbar/>
          {/* Chat Component*/}
          {user ? <Chats/> : null}
        </section>
    </div>
  );
}

export default App;
