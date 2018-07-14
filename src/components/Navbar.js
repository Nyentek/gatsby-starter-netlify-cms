import React from 'react'
import Link from 'gatsby-link'

import { Logo } from './Logo.js'

const Navbar = () => (
	<header id="header-site" className="lower">
		<a id="header-logo" className="header-logo" href="http://nyentek.com">
			<Logo/>
		</a>
	</header>
)

export default Navbar
