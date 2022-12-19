import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className="nav-wrapper">
                <div className="container ">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-brand wrapper-category">
                            <i className="fa-regular fa-square icon-category"></i>
                            <span>Categories</span>
                            <i className="fa-solid fa-chevron-down icon-category"></i>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item nav-item-text active">
                                    <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nav-item-text">
                                    <Link className="nav-link" to="/">Pages</Link>
                                </li>

                                <li className="nav-item nav-item-text">
                                    <Link className="nav-link" to="/">User Account</Link>
                                </li>

                                <li className="nav-item nav-item-text">
                                    <Link className="nav-link" to="/">Vendor Account</Link>
                                </li>

                                <li className="nav-item nav-item-text">
                                    <Link className="nav-link" to="/">Concact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;