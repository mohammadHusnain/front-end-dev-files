import React1, { useEffect } from "react"

const Navbar = ({color}) => {
useEffect(() => {
 alert('color was changed')
}, [color])



  return (
    <div>
      i am a Navbar of {color} colour hehe
    </div>
  )
}

export default Navbar
