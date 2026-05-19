import reactImg from './assets/react.svg'
import './Header.css'

function Message(){
    return(
        <>
            <div className='React'>
                <img src={reactImg} className="base" width="50" height="50" alt="" />
            </div>

            <div className='Home'>
                <a href="">HOME</a>



                <a href="">CONTACTOS</a>
            </div>
        </>
    )
}


export default Message