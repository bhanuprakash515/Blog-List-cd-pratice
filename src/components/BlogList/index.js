import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="un-order-list-container">
      {blogsList.map(eachBlgItem => (
        <BlogItem eachBlog={eachBlgItem} key={eachBlgItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
