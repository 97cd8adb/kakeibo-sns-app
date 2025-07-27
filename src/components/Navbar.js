import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faFilePen, 
  faArrowRightToBracket 
} from '@fortawesome/free-solid-svg-icons'

const Navbar = ( {isAuth} ) => {
  return(
  <nav>
    <Link to="/">
      <FontAwesomeIcon icon={faComment} />
        タイムライン
    </Link>
    {!isAuth ? ( 
      <Link to = "/login">
        <FontAwesomeIcon icon={faArrowRightToBracket}/>
        ログイン
      </Link>
    ):(
    <>
      <Link to="/CreatePost">
        <FontAwesomeIcon icon={faFilePen}/>
        支出を投稿
      </Link>
      <Link to="/Logout">
        <FontAwesomeIcon icon={faArrowRightToBracket}/>
        ログアウト
      </Link>
    </>
    )}
  </nav>
  );
};

export default Navbar