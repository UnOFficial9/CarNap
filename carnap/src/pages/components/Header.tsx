import { Link, Links } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="w-100 d-flex text-white px-4"
                style={{
                    minHeight: '150px', backgroundColor: '#002e4d', position: 'relative',
                    width: '100%'
                }}>

               
                <div className="col-md-3 d-flex  d-flex justify-content-start align-items-center ps-0 justify-content-around offset-md-1">
                    <Link to={'/'}><img
                        src="/images/Logo.png"
                        alt="CarNap Logo"
                        style={{
                            height: window.innerWidth > 768 ? '150px' : '120px',
                            width: 'auto',
                            zIndex: 10,
                            objectFit: 'contain',
                        }}
    
                    /></Link>
                    
                </div>

                {/* Текст */}
                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start px-4" style={{ padding: '20px]' }}>
                    <div className='d-flex w-100'>
                        <div> <Link to={"/"}>
                            <h2 className="fw-bold"
                            style={{
                                fontSize: 'clamp(14px, 4vw, 28px)'
                            }}>CAR NAP | СТО, Автосервіс Київ</h2></Link>
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center px-4">
                    <Link to={'/orderCall'} className="btn btn-outline-light px-4 py-2" >Запис Online</Link>
                </div>
            </div>
            <div className="w-100 bg-light border-bottom">
                <nav className="d-flex justify-content-center py-2 gap-3 flex-wrap">
                    {/* Заглушка, чтобы текст меню не залез под логотип на десктопе */}
                    <div className="d-none d-lg-block" ></div>
                    <Link to={'/services'}>Послуги</Link>
                    <Link to={'/contacts'}>Контакти</Link>
                    <Link to={'/aboutus'}>Про нас</Link>
                </nav>
            </div>
        </div>)
}
export default Header