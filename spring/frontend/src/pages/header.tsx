import '../App.css';
import Navigation from './navigation';
import Searchbar from "./searchbar";
function Header() {
    return (
        <>
            <div className="bg-dark sticky-top">
                <div className="head">
                    <Navigation />
                </div>
                <div className="head-item">
                    <Searchbar />
                </div>
            </div>
        </>
    );
}

export default Header;
