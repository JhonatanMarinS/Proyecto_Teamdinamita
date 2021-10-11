import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout1 =( {children} ) =>{
    return(
        <div className='mainMaePro'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout1