import React from 'react';
import Feature from '../../feature/Feature';
import './what.css';

const What = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Wallet Sense" text="The ultimate financial management platform powered by Shyft API. Effortlessly manage finances, access on-chain data, make informed investments, and track debts. Take control of your financial journey with confidence and ease.
" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Shyft Api" text="WalletSense + Shyft API: Seamless integration, real-time on-chain data, advanced financial management. Empowering users to achieve financial goals." />
      <Feature title="Solana" text="WalletSense harnesses Solana's speed, scalability, and security to deliver a seamless financial management experience with real-time data and efficient transactions." />
      <Feature title="Wallet Connect" text="Using WalletConnect, our project allows seamless sign-in by securely connecting users' mobile wallets to the platform, enhancing convenience and security." />
    </div>
  </div>
);

export default What;
