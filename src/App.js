import React from 'react';
import './App.css';
import styled from "styled-components";
import Black from './img/black_rogo.png';
import Under from './img/under.png';
import Top from './img/Top.png';
import Portfolio from './img/PortfolioSite.png';
import Reservation from './img/ReservationSite.png';
import Shinkeisuizyaku from './img/shinkeisuizyaku.png'

const { useState } = React

/* ロード時の画面を作ろうとしました。(保留中)
window.onload = function Load({loading, setLoading}){
  return(
  <div id="topLoading">
    <div id="circle">
    </div>
  </div>
  )
}
*/

/* モーダル画面 */
function Modal({show, setShow}){
  if(show.bool){
  return(
    <div id="overlay">
      <div id="content">
        <img className="portfolioImg" src={ show.img } title={ show.title } alt= { show.title }/>
        <h3>{ show.title }</h3>
        <h4>★説明</h4>
        <p id="description">{ show.description }</p>
        <h4>★使用技術</h4>
        <p id="tec">{ show.tec }</p>
        <h4>★コンセプト</h4>
        <p id="concept">{ show.consept }</p>
        <h4>★URL</h4>
        <p id="url"><a href={ show.site }>site</a><br/>
        <a href={ show.github }>github</a><br/>
        {show.Xd && <a href={ show.Xd }>Xd</a>}</p>

        <p><button onClick={() => setShow({bool: false})}>close</button></p>
      </div>
    </div>
  )
  } else {
    return null;
  }
}

function App() {

  //ポートフォリオ画像のホバー(ここだけstyled-componentsを使用してみました)
  const [color, setColor] = useState("100%");

  const PortfolioImg = styled.img`
  position: relative;
  top: 117px;
  background-color: black;
  width: 374px;
  height: 234px;
  margin-bottom: 59px;
  transition-duration: 0.5s;
  opacity: ${color};
  @media screen and (min-width:480px){
    width: 700px;
    height: 438px;
  }
  @media screen and (min-width:1200px){
    width: 1160px;
    height: 725px;
  }
  `; 

  //モーダル画面
  const [show, setShow] = useState({
    bool: false,
    title: '',
    description: '',
    img: '',
    tec: '',
    consept: '',
    github: '',
    Xd: '',
    site: ''
  })
  const Portfoliosite = {
    bool: true,
    title: 'Portfolio Site',
    description: 'このサイトです。Reactを体験するために作りました。制作を通して、Reactについてなんとなーくの理解、stateやpropsの使い方についての理解をすこーし深められました。',
    img: Portfolio,
    tec: 'HTML5、CSS3、javascript、React、git、Adobe Xd、Adobe Ilustrator',
    consept: 'このウェブサイトを見た人に私の名前を覚えてもらい、ポートフォリオの印象を強く持ってもらうこと',
    github: 'https://github.com/kuronokazuki/Portfolio',
    Xd: 'https://xd.adobe.com/view/af4aae0e-a54c-4d22-9094-d428719533fa-fa19/'
  }

  const Shinkeisuijaku = {
    bool: true,
    title: 'Shinkeisuijaku',
    description: 'javascriptの練習で作りました。制作を通して、DOMを使用したHTML要素の操作についてなんとなく理解出来ました。',
    img: Shinkeisuizyaku,
    tec: 'HTML5、CSS3、javascript、Adobe Photoshop',
    consept: '',
    github: 'https://github.com/kuronokazuki/shinkeisuizyaku',
    site: 'https://direct-preview-63bf5a02e78885a751cf0f39.monaca.education'
  }

  const ReservationSite = {
    bool: true,
    title: 'ReservationSite',
    description: 'ハッカソンの課題でチームで制作しました。私は主にデザインとHTML、CSSを担当しました。',
    img: Reservation,
    tec: 'HTML5、CSS3、PHP、Adobe Photoshop、Adobe Xd',
    consept: '若者にも受け入れられる予約サイトにする',
    github: 'URL',
    site: 'http://ws-hackathon2022-teams03.pencilsystems.site/show_items.php',
    Xd: 'https://xd.adobe.com/view/b2c409d9-cac4-4f69-b09b-43143aa1e04d-e797/'
  }

  //ロード時の画面を作ろうとしました(保留中)
  //const [loading, setLoading] = useState(true)

  /* TOP画面構成 */
  return (
    <main id="main">
      <div id="Top">
        <div id="circle">
          <img alt="nameimage" id="Black_name" src={Black} />
        </div>
        <div id="name">
          KuronoKazuki
        </div>
        <div alt="images" id="Top_portfolio">
          PORTFOLIO
        </div>
        <div id="under">
          <img alt="Down Arrow" src={Under} />
        </div>
      </div>

      <div id="About">
        <div id="About_circle">
          <img  alt="images" id="About_Topimg" src={Top}/>
        </div>
        <span id="About_thissite">About this site</span>
        <div id="self">
          こんにちは、<br/>
          <span className="english">Kurono</span>です。
        </div>
        <div id="self_introduction">
          ここは<span className="english">Kurono</span>のポートフォリオサイトです。<br/>
          これまでに手掛けた制作物、<br/>
          身につけたスキルをまとめています。<br/>
          技術を身につけるために<br/>
          日々更新していきますので<br/>
          是非見ていってください。<br/>
        </div>
        <a href='#portfolio'><div className="button"><div id="button_text">Portforio</div></div></a>
      </div>

      <div id="About_me">
        <span id="About_me_span">About me</span>
        <div id="sikaku"></div>
        <div id="self_career">
          1994年生まれの福岡出身。大学卒業後、<br/>
          5年間事業会社で経理に従事。<br/>
          IT技術に惹かれ2022年、<br/>
          27歳で専門学校に入学。<br/>
          現在は学校で情報技術について勉強しながら、<br/>
          学外ではWeb制作やReactについても学習中。<br/>
        </div>
        {/*時間がないため保留
        <div className="button" id="skilllevel"><div id="button_text">Skill Level</div></div>
        */
        }
      </div>

      <div id="portfolio">
        <span id="portfolio_span">Portfolio</span>
        <PortfolioImg src={Portfolio} onClick={() => setShow(Portfoliosite)} onMouseEnter={() => setColor("80%")} onMouseLeave={() => setColor("100%")}></PortfolioImg>
        <span className="portfolio_span" id="span_1">Portfolio Site</span>
        <PortfolioImg src={Shinkeisuizyaku} onClick={() => setShow(Shinkeisuijaku)} onMouseEnter={() => setColor("80%")} onMouseLeave={() => setColor("100%")}></PortfolioImg>
        <span className="portfolio_span" id="span_2">Shinkeisuijaku</span>
        <PortfolioImg src={Reservation} onClick={() => setShow(ReservationSite)} onMouseEnter={() => setColor("80%")} onMouseLeave={() => setColor("100%")}></PortfolioImg>
        <span className="portfolio_span" id="span_3">Reservation site</span>
      </div>

        <Modal show={show} setShow={setShow}/>
      
      

    </main>
  )
}
export default App;
