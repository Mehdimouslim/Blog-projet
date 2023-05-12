import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import myArticls from './myArticls';

function Single(props) {
  const { id } = useParams();
  let article = myArticls.find((item)=>item.id === parseInt(id))


  return (
    <div>
      <div className="post-box tech">
        <img src={article.image} alt="" className="post-img" />
        <h2 className="category">{article.category}</h2>
        <h1 className="post-title">{article.posttitle}</h1>
        <span className="post-date">{article.postdate}</span>
        <p className="post-description">{article.postdescription}</p>
        <div className="profile">
          <img src={article.profileimg} alt="" className="profile-img" />
          <span className="profile-name">{article.profilename}</span>
        </div>
      </div>
    </div>
  );
}

export default Single;
