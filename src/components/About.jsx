import React from 'react'
import './tailwind.css'

export default ({title = '', subtitle = ''}) => (
  <div class="flex flex-col text-center w-full pb-1 pt-32">
    <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">{subtitle}</h2>
    <h1 class="sm:text-3xl font-black text-2xl font-medium title-font text-gray-900">{title}</h1>
  </div>
)