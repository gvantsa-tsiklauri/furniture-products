import React from "react";
import './style.css';

class Navbari extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="navbar active" onClick={(e) => e.target.classList.toggle('active')} aria-current="page" href="#">all</a>
                                <a className="navbar" onClick={(e) => e.target.classList.toggle('active')} href="#">lamp</a>
                                <a className="navbar" onClick={(e) => e.target.classList.toggle('active')} href="#">chair</a> 
                                <a className="navbar" onClick={(e) => e.target.classList.toggle('active')} href="#">table</a> 
                                <a className="navbar" onClick={(e) => e.target.classList.toggle('active')} href="#">sofa</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbari;
