import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

    const [color, setColors] = useState('#9be3de');

    return (
        <header className="header">
            <nav>
                <div>
                    <div className="logo"></div>
                    <h1>Kim's Café Köln</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/" >Speisekarte</Link>
                    </li>
                    <li>
                        <Link to="/kontakt">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="/oeffnungszeiten">Öffnungszeiten</Link>
                    </li>
                    <li>
                        <Link to="/galerie">Galerie</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;