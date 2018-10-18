// This is the Link API
import Link from 'next/link' 
import Header from '../components/Header'   

   const Index = () => (
        <div>
            <Header />
            <Link href="/about">
              <button>About Page</button>
            </Link>
            <p>Hello Next.js</p>
        </div>
    )

    export default Index 
