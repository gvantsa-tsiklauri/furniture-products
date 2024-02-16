import React from "react";
import './style.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
class Mtavarinawili extends React.Component {
    render() {
        return (
            <>
            <div className="container-fluid py-4 mt-4 d-flex justify-content-center">
                <div className="row main w-100 gy-4" >
                    <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                        <div className="container p-3">
                            <span className="object-title">Chaise Molle</span> <br />
                            <span className="object-price">$18.00</span>
                        </div>
                        <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                            <img alt="furniture" src={img1} className="image"></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                        <div className="container p-3">
                            <span className="object-title">Chaise Molle</span> <br />
                            <span className="object-price">$18.00</span>
                        </div>
                        <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                            <img alt="furniture" src={img2} className="image"></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                        <div className="container p-3">
                            <span className="object-title">Chaise Molle</span> <br />
                            <span className="object-price">$18.00</span>
                        </div>
                        <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                            <img alt="furniture" src={img3} className="image"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4 mt-4 d-flex justify-content-center">
            <div className="row main w-100 gy-4" >
                <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                    <div className="container p-3">
                        <span className="object-title">Chaise Molle</span> <br />
                        <span className="object-price">$18.00</span>
                    </div>
                    <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                        <img alt="furniture" src={img4} className="image"></img>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                    <div className="container p-3">
                        <span className="object-title">Chaise Molle</span> <br />
                        <span className="object-price">$18.00</span>
                    </div>
                    <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                        <img alt="furniture" src={img5} className="image mt-5"></img>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 px-4 d-flex justify-content-center position-relative cols">
                    <div className="container p-3">
                        <span className="object-title">Chaise Molle</span> <br />
                        <span className="object-price">$18.00</span>
                    </div>
                    <div className="z-2 img w-100 d-flex align-items-center justify-content-center">
                        <img alt="furniture" src={img6} className="image mt-5"></img>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default Mtavarinawili;
