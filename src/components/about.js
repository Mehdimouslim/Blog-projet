import React from 'react'
import "./home.css";
import {useNavigate} from 'react-router-dom'

// import {Link} from 'react-router-dom'
import Header from './header/header';
import Footer from './footer/Footer';
function About() {
    const Navigate = useNavigate()

    // const styleButton = {
    //     display: 'block',
    //     marginBottom: '5px',
    //     width: '100%',
    //     borderRadius:"6px"
    // }
    const GoToPageHome = () => {
        Navigate("/")
    }
  return (
    <div>
         <Header/>
        <section className="about container" id="about">
        <div className="contentBx">
            <h2 className="titleText">Catch up with the trending topics</h2>
            <p className="title-text">
                trending topics we can the best employers that love to be creative and give time to make the products perfectly , the price of our products is the best for you to get a perfect product with a perfect price, we make different products but the most of it is from rafia and smarand,
                <br/> it take a lot of time to make it perfect all that just to please our dear client that trust our product and we will always do our best to give them the best products.
                trending topics we can the best employers that love to be creative and give time to make the products perfectly , the price of our products is the best for you to get a perfect product with a perfect price, we make different products but the most of it is from rafia and smarand,
                <br/> it take a lot of time to make it perfect all that just to please our dear client that trust our product and we will always do our best to give them the best products.
            </p>
        </div>
        <div className="imgBx">
            <img src="images/about.png" alt="" className="fitBg"/>
        </div>
        {/* <Link to='/'>Back</Link> */}
        

    </section>
    <button onClick={GoToPageHome} className="btn2">Go to the home page</button>
    <Footer/>
    </div>
  )
}

export default About