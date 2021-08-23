import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME</span>
                <img className="sidebarImg" src="images/farid.png" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto provident sapiente voluptatum similique dolorum
                    unde libero
                 </p>
                <div className="sidebarItem">
                    <span className="sidebarTitle"> CATEGORIES </span>
                    <ul className="sidebarList">
                        <li className="siderbarListItem">Life</li>
                        <li className="siderbarListItem">Music</li>
                        <li className="siderbarListItem">Style</li>
                        <li className="siderbarListItem">Sports</li>
                        <li className="siderbarListItem">Tech</li>
                        <li className="siderbarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle"> FOLLOW US </span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>

                    </div>
                </div>
            </div>
        </div>




    )
}
