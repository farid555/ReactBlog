import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topicon fab fa-facebook-square"></i>
                <i className="topicon fab fa-instagram-square"></i>
                <i className="topicon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>

                </ul>
            </div>
            <div className="topRight">

                <img
                    className="topImage" src="images/imgss.jpg" title="A banana image" alt="test" />
                <i className="topSearchicon fas fa-search"></i>
            </div>
        </div>
    )


}
