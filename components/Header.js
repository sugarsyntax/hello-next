import Link from 'next/link'

const linkStyle = { 
    listStyleType: "none",
    textDecoration: "none",
    color: "#b3b177",
    fontSize: "3.5rem"
}

const titleName = {
    margin: 0,
    width: "100%",
    fontSize: "10rem",
    letterSpacing: "1.5rem",
    textAlign: "center"
}

const flexNav = {
  color: "b3b177",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  marginTop: "3rem"
}

const Header  = () => (
    <div>
      <h1 style={titleName}>
        <span style={{ color:"#fb9999" }}>J</span>
        <span style={{ color:"#fc9ca7" }}>a</span>
        <span style={{ color:"#fc9fb4" }}>c</span>
        <span style={{ color:"#fda2c2" }}>q</span>
        <span style={{ color:"#b3b177" }}>u</span>
        <span style={{ color:"#68bf2b" }}>e</span>
        <span style={{ color:"#59d11d" }}>l</span>
        <span style={{ color:"#49e40f" }}>l</span>
        <span style={{ color:"#3af601" }}>i</span>
        <span style={{ color:"#72eb74" }}>n</span>
        <span style={{ color:"#aadfe7" }}>e</span>
      </h1>
      <nav style={flexNav}>
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
      </nav>
    </div>
)

export default Header