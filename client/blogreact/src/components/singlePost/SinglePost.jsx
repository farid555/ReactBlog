import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="images/posts.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span> Autho: <b> Farid</b></span>
                    <span> Date: 1 day ago</span>
                </div>
                <p className="singlePostDecr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aliquam distinctio modi minima
                culpa laborum similique dignissimos perferendis molestiae! Quasi pariatur sequi cum facere illo earum,
                distinctio repudiandae incidunt vero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aliquam distinctio modi minima
                culpa laborum similique dignissimos perferendis molestiae! Quasi pariatur sequi cum facere illo earum,
                     distinctio repudiandae incidunt vero!</p>
            </div>
        </div>
    )
}
