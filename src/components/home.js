import React from 'react';
import "./home.css";
import Header from './header/header';
import Footer from './footer/Footer';
import myArticls from './myArticls';
import i18n from "i18next";
import { useTransition,initReactI18next,Trans } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
// import About from './about';
import {Link} from 'react-router-dom'

function Home() {

  
  return (
    <div>
      <Header/>
       <section className="home" id="home">
        <div className="home-text container">
            <h2 className="home-title">Trend Blogger</h2>
            <span className="home-subtitle">Your source of great content</span>
        </div>
    </section>

    <section className="about container" id="about">
        <div className="contentBx">
            <h2 className="titleText">Catch up with the trending topics</h2>
            <p className="title-text">
                trending topics we can the best employers that love to be creative and give time to make the products perfectly , the price of our products is the best for you to get a perfect product with a perfect price, we make different products but the most of it is from rafia and smarand,
                <br/> it take a lot of time to make it perfect all that just to please our dear client that trust our product and we will always do our best to give them the best products.
            </p>
            <Link to="/About" className="btn2">Read more</Link>
        </div>
        <div className="imgBx">
            <img src="images/about.png" alt="" className="fitBg"/>
        </div>
    </section>

    <div className="post-filter container">
        <span className="filter-item active-filter" data-filter="all">All</span>
        <span className="filter-item" data-filter="tech">Tech</span>
        <span className="filter-item" data-filter="food">Food</span>
        <span className="filter-item" data-filter="news">Sports</span>
    </div>
    
    <div className="post container">
       {myArticls.map((el)=>
       <div key={el.id}>
        <div className="post-box tech" >
            <img src={el.image} alt="" className="post-img"/>
            <h2 className="category">{el.category}</h2>
            <Link to={`/Single/${el.id}`} className="post-title">{el.posttitle}</Link>
            <span className="post-date">{el.postdate}</span>
            <p className="post-description">{el.postdescription}</p>
            <div className="profile">
                <img src={el.profileimg} alt="" className="profile-img"/>
                <span className="profile-name">{el.profilename}</span>
            </div>
        </div>
     </div>  
        )}
    </div>
    <Footer/>
    </div>
  )
}
export default Home