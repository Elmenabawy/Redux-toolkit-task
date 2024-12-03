import React from 'react'
import PostsList from "../features/posts/PostsList";
import AddPost from "../Components/Forms/AddPost"
function HomePage() {
  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          <div className="col-lg-8">
            <PostsList />
          </div>
          <div className="col-lg-4">
            <AddPost />
          </div>
        </div>
        
        
      </div>
    </>
    
  )
}

export default HomePage
