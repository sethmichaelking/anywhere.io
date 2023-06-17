import React from 'react'
import supabase
 from '../config/supabaseClient';

function Home() {
    console.log(supabase)
  return (
    <div>
        The home page
    </div>
  )
}

export default Home