import React from 'react'

function Home() {
  return (
    <div className="flex h-screen md:flex-row flex-col items-center justify-around" id="home">
        <div className="hl md:w-[50%] md:p-0 p-2">
            <h1 className="text-4xl md:text-6xl font-semibold">ABDUL WAHAB REHAN</h1>
            <p className="mt-2 text-lg md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam placeat at, minus ratione provident nulla in labore cumque ipsum maxime aliquam alias ducimus numquam quaerat blanditiis. At inventore, ex impedit doloremque ad, odit, repellendus eius nostrum eligendi dolorum assumenda?</p>
            <button className="p-4 bg-blue-200 hover:bg-blue-100 mt-4 text-lg md:text-2xl">Know More</button>
        </div>
        <div className="hr w-[30%] flex items-center justify-center font-semibold text-7xl">Front End Developer</div>
    </div>
  )
}

export default Home