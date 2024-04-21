import '../App.css';
import Header from "../partComponent/header";
import Sections from "../partComponent/bodySection";
import Footer from "../partComponent/footer";

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