import React from 'react'

import styles from './Footer.css'
import './tailwind.css'

export default () => (
	<footer class="content-center text-center bg-green-600 p-6 text-white " className={styles.footer}>
		<small><svg class="fill-current inline-block mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"/></svg>2020 <a href='https://github.com/ToyoshimaHidenori/ToyoshimaHidenori.github.io' className={styles.a}>
		Toyoshima Hidenori</a></small>
	</footer>
)