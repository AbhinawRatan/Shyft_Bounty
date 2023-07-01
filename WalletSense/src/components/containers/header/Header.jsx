import React from 'react';
import people from '../../assets/people.png';
import ai2 from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className='gradient__text  font-bold'>  Unleash<br />your creativity <br />with Wallet Sense</h1>
      <p className='gradient__text2'>Managing your finances should be effortless and empowering, with a hint of quirkiness. WalletSense offers a comprehensive suite of personalized tools to help  <br />you take control of your money with confidence and <br />a touch of whimsy.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100+ people have already used Wallet Sense</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} />
    </div>
  </div>
);

export default Header;
