import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">

                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="images/farid.png" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <lable>Username</lable>
                    <input type="text" placeholder="Safak" />
                    <lable>Email</lable>
                    <input type="text" placeholder="safak@gmail.com" />
                    <lable>Password</lable>
                    <input type="Password" />
                    <button className="settingsSubmit">Update</button>

                </form>


            </div>
            <Sidebar />


        </div>
    )
}
