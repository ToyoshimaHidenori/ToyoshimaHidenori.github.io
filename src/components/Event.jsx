import React from 'react'
import './tailwind.css'

export default ({date = '', title = '', description = ''}) => (
<div class="flex relative pt-10 pb-10 sm:items-center w-2/3 mx-auto">
  <div class="h-full w-20 absolute inset-0 flex items-center justify-center">
    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
  </div>
  <div class="flex-shrink-0 w-20 h-20 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">{date}</div>
  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{title}</h2>
      <p class="leading-relaxed">{description}</p>
    </div>
  </div>
</div>
)