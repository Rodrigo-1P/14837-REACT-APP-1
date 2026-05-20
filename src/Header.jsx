import './Header.css'
import reactImg from './assets/react.svg'

function Header(){
    return(
        <div>
            <logo><img src={reactImg} alt="React Img" /></logo>
            <nav>
                <a href="/home">HOME</a>
                <a href="/contactos">CONTACTOS</a>
            </nav>
        </div>
    )
}


export default Header