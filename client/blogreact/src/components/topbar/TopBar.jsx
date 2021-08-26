import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topicon fab fa-facebook-square"></i>
                <i className="topicon fab fa-instagram-square"></i>
                <i className="topicon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/"  >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="write"  >WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>

                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className="topImage" src="images/imgss.jpg" title="A banana image" alt="test" />
                ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                            </Link>
                            </li >
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                            </Link>
                            </li>
                        </ul>
                    )}

                <i className="topSearchicon fas fa-search"></i>
            </div>
        </div>
    )


}
