import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="images/post.jpg" alt="" />
            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
            </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.Ratione animi autem magnam quaerat nihil tempore.
                Vitae porro, cumque architecto, soluta voluptates
                laborum sed quisquam quam aut voluptate excepturi
                veniam molestiae!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ratione animi autem
                magnam quaerat nihil tempore. Vitae porro, cumque
                architecto, soluta voluptates laborum sed quisquam
                quam aut voluptate excepturi veniam molestiae!Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione animi autem magnam quaerat nihil tempore.
                Vitae porro, cumque architecto, soluta voluptates
                laborum sed quisquam quam aut voluptate excepturi
                veniam molestiae!
            </p>
        </div>
    )
}
