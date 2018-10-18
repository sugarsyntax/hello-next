import Link from 'next/link'

const linkStyle = {
    margin: 15 
}

const Header  = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="portforlio">
          <a style={linkStyle}>Portfolio</a>
        </Link>
        <Link href="contact">
          <a style={linkStyle}>Contact</a>
        </Link>
    </div>
)

export default Header