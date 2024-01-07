import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li>
      <div className="each-blog-container">
        <h1 className="blog-item-heading">{title} </h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
      <hr className="line-break" />
    </li>
  )
}

export default BlogItem
