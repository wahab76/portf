import React, {useState} from 'react'

function Nav() {
    const [open, setOpen] = useState(false);
    const togg = () => {
        setOpen(!open);
    }
  return (
    <>
    <nav className="bg-amber-400 flex items-center justify-around p-4">
        <div className="logo text-2xl md:text-4xl font-bold">a.WR</div>
        <div className="nl hidden md:flex gap-[50px] text-md md:text-xl">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

        </div>
        <div className="bt flex md:hidden" onClick={togg}>{open? "Close" : "Menu"}</div>
        
    </nav>
    {open && (<div className="nl flex bg-amber-400 py-6 items-center flex-col md:hidden gap-[50px] text-md md:text-xl">
        <a href="#home" onClick={togg}>Home</a>
        <a href="#about" onClick={togg}>About</a>
        <a href="#projects" onClick={togg}>Projects</a>
        <a href="#contact" onClick={togg}>Contact</a>

    </div>)}
    </>
  )
}

export default Nav