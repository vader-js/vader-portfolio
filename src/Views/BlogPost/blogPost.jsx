import React from 'react'
import './blogPost.css'
import { Post } from '../../assets/Data/data'
import { IoLink } from "react-icons/io5";

export default function BlogPost() {
  return (
    <main className='postContainer' id='blog'>
        <section className="headPost">
        <p>
          <span></span>Blog
        </p>
        <h2>Post</h2>
      </section>
      <section className="postBody">
        {Post.map(post=>{
            return (
                <div className="post" key={post.id}>
                    <div className="post_img">
                        <img src={post.image} alt="blogpost" />
                    </div>
                    <div className="postbody">
                        <aside>
                        <div className="tag">
                            {post.desc.map(desc=> <span key={desc}>{desc}</span>)}
                        </div>
                        <div className="link">
                            <a href={post.link} target="_blank">
                                <IoLink size={30} />
                            </a>
                        </div>
                        </aside>
                    </div>
                </div>
            )
        })}
      </section>
    </main>
  )
}
