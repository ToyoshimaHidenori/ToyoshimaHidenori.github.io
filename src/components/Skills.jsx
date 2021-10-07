import React from 'react'
import './tailwind.css'
import About from './About.jsx'

const Dot = (props) => (
  <a>
    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </span>
    {props.children}
  </a >
)

export default () => (
<section id='skills' class="text-gray-600 body-font">
  <About title="Skills" subtitle="Webアプリとかデータ分析とか"/>
  <div class="container px-5 pb-24 pt-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Web</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <Dot>React</Dot>
          <Dot>HTML</Dot>
          <Dot>CSS</Dot>
          <Dot>Node.js</Dot>
          <Dot>Typescript</Dot>
          <Dot>PostgreSQL</Dot>
          <Dot>PHP</Dot>
          <Dot>Go</Dot>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Data Analysis</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <Dot>Python</Dot>
          <Dot>Numpy</Dot>
          <Dot>NetworkX</Dot>
          <Dot>Shell Script</Dot>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Tools</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <Dot>Docker</Dot>
          <Dot>Git</Dot>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Others</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <Dot>C++</Dot>
          <Dot>Java</Dot>
          <Dot>Arduino</Dot>
          <Dot>Firebase</Dot>
        </nav>
      </div>
    </div>
  </div>
</section>
)