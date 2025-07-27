import React, { use, useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db,"posts"))
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({doc})));
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getPosts();
  },[])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id))
    window.location.href = "/"
  }

  return (
  <div className="homePage">
    {postList.map((post)=> {
      return(
      <div className="postContents" key={post.id}>
        <div className="postHeader">
          <div>{post.title}円使いました❣️</div>
        </div>
        <div className="dateKakeibo">
          {post.selectedDate}
        </div>
        <div className="categoryKakeibo">
          {post.category}にて
        </div>
        <div className="postTextContainer">{post.postText}</div>
        <div className="nameAndDeleteButton">
          <div>@{post.author.username}</div>
          {post.author.id === auth.currentUser?.uid && (
            <button onClick={() => handleDelete(post.id)}>削除</button>
          )}          
        </div>
      </div>
        )
      })}
  </div>
  );
}
