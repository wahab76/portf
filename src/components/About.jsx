import React from 'react'

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:h-screen" id="about">
        <div className="al md:w-[50%]">
            <h1 className="text-3xl md:text-5xl font-medium">About Me</h1>
            <p className="text-lg md:text-2xl mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio, reprehenderit facilis quod fugit illo maxime? Iusto velit fuga maxime laboriosam, illo repudiandae odio, facere, error quam a autem nihil aperiam hic et aliquam porro rerum fugit numquam dolorum consequuntur! Sit adipisci accusamus exercitationem ab molestias obcaecati, magni impedit quos?</p>
            <button className="p-4 text-lg md:text-2xl mt-3 bg-blue-300 hover:bg-blue-200">Resume</button>

        </div>
        <div className="ar w-[60%] md:w-[20%] bg-green-200 p-4">
            <h1 className="text-2xl md:text-3xl font-medium">My Skills</h1>
            <ul className="text-xl mt-3">
                <li><a href=""></a>HTML</li>
                <li><a href=""></a>CSS</li>
                <li><a href=""></a>Javascript</li>
                <li><a href=""></a>Java</li>
                <li><a href=""></a>Figma</li>
                <li><a href=""></a>Tailwind CSS</li>
                <li><a href=""></a>React</li>
                <li><a href=""></a>GitHub</li>
            </ul>

        </div>
    </div>
  )
}

export default About