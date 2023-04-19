import React from 'react'
import './blogPost.css'
import { Post } from '../../assets/Data/data'
import { IoLink } from "react-icons/io5";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function BlogPost() {
  return (
    <main className='postContainer' id='blog'>
        <section className="headPost">
        <p>
          <span></span>Blog
        </p>
        <h2>Post</h2>
      </section>
      <InView threshold={0}>
        {({ inView, ref }) => (
          <motion.section
          initial={{ opacity: 0, x:"50vw" }}
          animate={inView ? { opacity: 1, x:0 } : { opacity: 0, x:"50vw" }}
          transition={{ duration: 1 }}
          ref={ref}
          className="postBody">
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
        </motion.section>
        )}
      </InView>
      
    </main>
  )
}
