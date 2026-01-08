/* eslint-disable */
class lifeStyleSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-lifestyle';
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500&display=swap');

        :host {
          display: block;
          width: 100%;
          overflow: hidden;
          font-family: 'Noto Sans JP', sans-serif;
          position: relative;
          z-index: 10;
        }
        
        .top-life {
          position: relative;
          padding: 120px 0;
          background-color: #fff;
          z-index: 1;
        }

        .l-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10; 
        }

        /* --- タイトル周り --- */
        .top-life__heading {
          margin-bottom: 80px; 
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .top-life__en-title {
          display: block;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 15px;
          font-family: 'Oswald', sans-serif;
        }

        .top-life__jp-title {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.4;
          margin: 0 0 30px;
          color: #111;
        }

        .top-life__descWrap {
          max-width: 800px;
          margin: 0 auto;
        }
        .top-life__desc {
          font-size: 15px;
          line-height: 2.0;
          color: #333;
          margin: 0;
          text-align: left;
          display: inline-block;
        }

        /* --- 背景の流れる文字 --- */
        .top-life__marqueeWrap {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0.03;
          pointer-events: none;
          z-index: 0; 
        }
        .top-life__marquee {
          display: inline-block;
          font-size: 120px;
          font-weight: 700;
          font-family: 'Oswald', sans-serif;
          padding-left: 50px;
          animation: marquee 30s linear infinite;
          color: #0B1E3D;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* --- ★変更点: CEO紹介への誘導エリア --- */
        .ceo-teaser {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #0B1E3D 0%, #162d50 100%);
          border-radius: 8px;
          overflow: hidden;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 80px;
          box-shadow: 0 20px 40px rgba(11, 30, 61, 0.15);
          transition: transform 0.3s ease;
        }
        
        .ceo-teaser:hover {
          transform: translateY(-5px);
        }

        .ceo-info {
          flex: 1;
          z-index: 2;
        }

        .ceo-label {
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          letter-spacing: 0.2em;
          color: #FF6600;
          margin-bottom: 20px;
          display: block;
        }

        .ceo-name-jp {
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .ceo-name-en {
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
          opacity: 0.6;
          margin-bottom: 30px;
          display: block;
          letter-spacing: 0.05em;
        }

        .ceo-message-digest {
          font-size: 14px;
          line-height: 1.8;
          opacity: 0.8;
          margin-bottom: 40px;
          max-width: 400px;
        }

        /* 詳細へ飛ぶボタン */
        .ceo-link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: 1px solid #FF6600;
          color: #FF6600;
          padding: 12px 40px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.1em;
        }
        
        .ceo-link-btn:hover {
          background-color: #FF6600;
          color: #fff;
        }

        /* 背景装飾（薄い写真などがあればここに入れますが、今回は図形で） */
        .ceo-bg-decoration {
          position: absolute;
          right: -50px;
          bottom: -50px;
          font-family: 'Oswald', sans-serif;
          font-size: 200px;
          font-weight: 700;
          color: #fff;
          opacity: 0.03;
          line-height: 1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .top-life { padding: 80px 0; }
          .top-life__heading { margin-bottom: 50px; }
          .top-life__jp-title { font-size: 24px; }
          .top-life__desc { font-size: 14px; }
          
          .ceo-teaser {
            padding: 40px 30px;
            flex-direction: column;
            text-align: center;
          }
          .ceo-info { margin-bottom: 0; }
          .ceo-message-digest { margin: 0 auto 30px; }
          .ceo-link-btn { width: 100%; box-sizing: border-box; }
          .ceo-bg-decoration { font-size: 120px; right: 0; bottom: 0; }
        }
      </style>

      <div class="top-life">
        <div class="l-container">
          
          <div class="top-life__heading">
            <span class="top-life__en-title">Life Style</span>
            <h2 class="top-life__jp-title">挑戦が日常になる世界</h2>
            
            <div class="top-life__descWrap">
              <p class="top-life__desc">
                挑戦は特別な人のためのものではありません。 <br>
                昨日までの自分を少しだけ超えてみる。その積み重ねが最高の自分へと繋がっています。<br>
                KIAは、あなたのライフスタイルに「挑戦」という彩りを加えます。 <br>
                迷いが確信に変わり、一歩が加速する。 答えがあるからこそ、もっと大胆に、もっと自由に。 <br>
                あなたの可能性は、そこから無限に広がっていきます。
              </p>
            </div>
          </div>
          
          <div class="top-life__marqueeWrap">
            <span class="top-life__marquee">KickInAnswer KickInAnswer KickInAnswer</span>
          </div>

          <div class="ceo-teaser">
            <div class="ceo-bg-decoration">CEO</div>
            <div class="ceo-info">
              <span class="ceo-label">REPRESENTATIVE</span>
              <h3 class="ceo-name-jp">谷口 純也</h3>
              <span class="ceo-name-en">JUNYA TANIGUCHI</span>
              
              <p class="ceo-message-digest">
                私の歩んできた道、そしてこれからのビジョン。<br>
                これまでの遍歴をご紹介します。
              </p>

              <a href="/about-ceo" class="ceo-link-btn">
                ABOUT CEO
              </a>
            </div>
          </div>
          </div>
      </div>
    `;
  }
}

if (!customElements.get('lifestyle-section')) {
  customElements.define('lifestyle-section', lifeStyleSection);
}