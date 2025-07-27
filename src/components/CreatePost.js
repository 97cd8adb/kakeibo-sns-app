import React, { useEffect, useState } from 'react'
import "./CreatePost.css"
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db,"posts"),{
      selectedDate: selectedDate,
      title: title,
      category: category,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigate("/");
  };

  useEffect(() => {
    if(!isAuth){
      navigate("/login");
    }
  },[]);

  return (
   <div className="createPostPage">
    <div className="postContainer">
      <h1>使ったお金を公表🎶</h1>
    <div className="whenThisPost">
      <div>使った日付</div>
      <input
       type="date" // 日付選択UIを表示
       onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
    <div className="inputPost">
      <div>使った金額</div>
        <input
        type="number"
        placeholder="使った金額を記入"
        onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    <div className="postCategory">
      <div>カテゴリ</div>
        <select
         onChange={(e) => setCategory(e.target.value)}
        >
        <option value="">カテゴリを選択してください</option>
        <option value="ランチ">ランチ</option>
        <option value="ディナー">ディナー</option>
        <option value="ごほうび">ごほうび</option>
        <option value="ドラッグストア">ドラッグストア</option>
        <option value="100円ショップ">100円ショップ</option>
        </select>
      </div>
    <div className="inputPost">
      <div>買った商品の紹介や感想</div>
        <textarea
         placeholder="買った商品の紹介や感想を記入"
         onChange={(e) => setPostText(e.target.value)}
         maxLength={140}
        ></textarea>
      </div>
    <button className="postButton" onClick={createPost}>
      みんなに教える❣️</button>
    </div>
  </div>
  )
}

export default CreatePost