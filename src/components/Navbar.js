import React from 'react'
import Link from 'gatsby-link'

import Logo from 'Logo.js'

const Navbar = () => (
	<header id="header-site" className="lower">
		<div className="container">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item">
					<Logo/>
				</Link>
			</div>
		</div>
	</header>
)

export default Navbar
