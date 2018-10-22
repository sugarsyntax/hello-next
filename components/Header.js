import Link from 'next/link'

const linkStyle = { 
    listStyleType: "none",
    textDecoration: "none",
    color: "#8eb3f4",
    fontSize: "3.5rem",
    fontFamily: "VSR OSD MONO"
}

const titleName = {
    margin: 0,
    width: "100%",
    fontSize: "10rem",
    letterSpacing: "1.3rem",
    textAlign: "center",
    fontFamily: "Futura"
}

const flexNav = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  margin: "5rem 6rem 3rem 6rem",
  letterSpacing: "0.6rem"
}

const Header  = () => (
    <div>
      <Link href="/">
      <h1 style={titleName}>
      <div>
        <span style={{ color: "#ff6ad5" }}>J</span>
        <span style={{ color: "#ec6ddb" }}>a</span>
        <span style={{ color: "#da71e2" }}>c</span>
        <span style={{ color: "#c774e8" }}>q</span>
        <span style={{ color: "#ba80f4" }}>u</span>
        <span style={{ color: "#ad8cff" }}>e</span>
        <span style={{ color: "#a08ff7" }}>l</span>
        <span style={{ color: "#9492f0" }}>l</span>
        <span style={{ color: "#8795e8" }}>i</span>
        <span style={{ color: "#8eb3f4" }}>n</span>
        <span style={{ color: "#94d0ff" }}>e</span>
      </div>
      </h1>
      </Link>
      <nav style={flexNav}>
        <Link href="about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="portfolio">
          <a style={linkStyle}>Portfolio</a>
        </Link>
        <Link href="contact">
          <a style={linkStyle}>Contact</a>
        </Link>
      </nav>
    </div>
)

export default Header