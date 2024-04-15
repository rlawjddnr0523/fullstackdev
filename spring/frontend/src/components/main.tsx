import '../App.css';
import Header from "../pages/header";
import Sections from "../pages/bodySection";
import Footer from "../pages/footer";

function FinalExport() {
    return (
        <div className="bg-dark text-light-emphasis" data-bs-theme='dark'>
            <div className='head'><Header /></div>
            <div className='main'>{Sections()}</div>
            {/*<div className='foot'><Footer /></div>*/}
        </div>
    );
}

export default FinalExport;