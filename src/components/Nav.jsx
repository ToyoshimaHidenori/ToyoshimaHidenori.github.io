import React from 'react'
// import styles  from './Heading.css'
import './tailwind.css'

export default () => (
	<nav class="flex shadow-2xl items-center justify-between flex-wrap bg-green-600 p-3">
  		<div class="flex items-center flex-shrink-0 text-white mr-6">
    		<span class="font-semibold text-xl tracking-tight">Toyoshima Hidenori's website</span>
  		</div>
		<div class="block lg:hidden">
			<button onClick={() => {document.getElementById("nav").classList.toggle("hidden")}} class="focus:border-green-500 flex items-center px-3 py-2 bg-green-500 shadow-lg rounded-lg text-teal-200 border-green-200 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
		<div id='nav' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:show xl:show">
			<div class="text-sm lg:flex-grow">
				<a href="https://twitter.com/Toyoshima_Hi" class="block mt-4 lg:inline-block lg:mt-0 p-2 text-green-200 hover:text-white mr-4">
					<svg class="fill-current inline-block mr-1 h-8 w-8" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"></path></g></svg>
					 
				</a>
				<a href="https://www.facebook.com/ToyoshimaHidenori" class="block mt-4 lg:inline-block lg:mt-0 p-2 text-green-200 hover:text-white mr-4">
					<svg class="fill-current inline-block mr-1 h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
					
				</a>
				<a href="https://github.com/ToyoshimaHidenori/ToyoshimaHidenori.github.io" class="block mt-4 lg:inline-block lg:mt-0 p-2 text-green-200 hover:text-white mr-4">
					<svg class="fill-current inline-block mr-1 h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					 
				</a>
				<a href="https://github.com/ToyoshimaHidenori/ToyoshimaHidenori.github.io" class="block mt-4 lg:inline-block lg:mt-0 p-2 text-green-200 hover:text-white">
					Blog
				</a>
			</div>
			<div>
				<a href="https://github.com/ToyoshimaHidenori/" class="bg-green-700 inline-block text-sm px-4 py-2 shadow leading-none rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">Contact</a>
			</div>
		</div>
	</nav>
)

