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
        /* ベーススタイル */
        :host {
          display: block;
          width: 100%;
          overflow: hidden;
          font-family: "Helvetica Neue", Arial, sans-serif;
          position: relative;
          z-index: 10;
        }
        
        .top-life {
          position: relative;
          padding: 80px 0; /* 余白を少し広げました */
          background-color: #fff;
          z-index: 1;
        }

        .l-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10; 
        }

        /* --- タイトル周りのデザイン修正 --- */
        .top-life__heading {
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
          text-align: center; /* 全体を中央寄せ */
        }

        /* 見出し：LifeStyle（英語） */
        .top-life__en-title {
          display: block;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600; /* アクセントカラー（オレンジ） */
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 15px;
          font-family: 'DIN', sans-serif; /* もしあれば欧文フォント */
        }

        /* 中見出し：挑戦が日常になる世界 */
        .top-life__jp-title {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.4;
          margin: 0 0 30px;
          color: #111;
        }

        /* 本文エリア */
        .top-life__descWrap {
          max-width: 800px; /* 横に広がりすぎないように制限 */
          margin: 0 auto;   /* 中央配置 */
        }
        .top-life__desc {
          font-size: 15px; /* 少し読みやすく大きく */
          line-height: 2.0; /* 行間を広めに */
          color: #333;
          margin: 0;
          text-align: left; /* 文章自体は左揃え（中央揃えが良ければ center に） */
          display: inline-block; /* 左揃えにしつつ、ブロック全体を中央に置くテクニック */
        }

        /* 流れる文字（Marquee） */
        .top-life__marqueeWrap {
          position: absolute;
          top: 100px;
          left: 0;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0.05;
          pointer-events: none;
          z-index: 0; 
        }
        .top-life__marquee {
          display: inline-block;
          font-size: 120px;
          font-weight: bold;
          padding-left: 50px;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* 記事リスト */
        .top-life__content {
          position: relative;
          z-index: 20;
        }
        .top-life__postList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          position: relative;
          z-index: 20;
        }
        
        .top-life__postItem {
          background: #fff;
          position: relative;
          z-index: 20;
        }

        .top-life__postImgWrap {
          position: relative; 
          width: 100%;
          margin-bottom: 20px;
          z-index: 20;
        }

        .top-life__postImg,
        .top-life__postVideo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        
        /* 再生ボタンのオーバーレイ */
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0,0,0,0.3);
          
          cursor: pointer;
          z-index: 999; 
          pointer-events: auto;
          transition: opacity 0.3s;
        }

        .play-icon {
          width: 60px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.2s;
          pointer-events: none; 
        }
        
        .video-overlay:hover .play-icon {
          transform: scale(1.1);
          background-color: #fff;
        }

        .play-triangle {
          width: 0;
          height: 0;
          border-left: 20px solid #333;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          margin-left: 4px;
        }

        .top-life__postIntro {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
          display: block;
        }
        .top-life__postTitle {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 15px;
          line-height: 1.5;
        }
        .top-life__postDesc {
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          margin-bottom: 20px;
        }

        .c-btn1 {
          display: inline-flex;
          align-items: center;
          color: #111;
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          border-bottom: 1px solid #111;
          padding-bottom: 5px;
        }
        
        @media (max-width: 768px) {
          .top-life__postList {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .top-life__jp-title {
            font-size: 24px;
          }
          .top-life__marquee {
            font-size: 80px;
          }
          .top-life__desc {
            font-size: 14px;
            text-align: left; /* スマホは左揃えが読みやすい */
          }
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
            <span class="top-life__marquee">KickInAnswer KickInAnswer KickInAnswer KickInAnswer</span>
            <span class="top-life__marquee">KickInAnswer KickInAnswer KickInAnswer KickInAnswer</span>
          </div>

          <div class="top-life__content">
            <div class="top-life__postList">
              
              <div class="top-life__postItem">
                <div class="top-life__postImgWrap">
                  <video 
                    class="top-life__postVideo" 
                    id="myVideo"
                    src="https://video.wixstatic.com/video/db070e_45cef772d5264cf9b4ee53cbe3270b66/1080p/mp4/file.mp4" 
                    playsinline
                    muted
                  ></video>

                  <div class="video-overlay" id="playBtn">
                    <div class="play-icon">
                      <div class="play-triangle"></div>
                    </div>
                  </div>
                </div>

                <div class="top-life__postContent">
                  <h4 class="top-life__postTitle">モナコ旅行</h4>
                  <p class="top-life__postDesc">仕事でモナコへ行きました</p>
                </div>
              </div>

              <div class="top-life__postItem">
                <div class="top-life__postImgWrap">
                  <img class="top-life__postImg" src="https://corp.tential.jp/wp-content/themes/tential/assets/img/top/life/life-item2.jpg" alt="">
                </div>
                <div class="top-life__postContent">
                  <h4 class="top-life__postTitle">バスケットボール</h4>
                  <p class="top-life__postDesc">幼い頃からバスケが趣味です</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;

    const video = this.shadowRoot.getElementById('myVideo');
    const playBtn = this.shadowRoot.getElementById('playBtn');

    if (video && playBtn) {
      playBtn.addEventListener('click', () => {
        video.muted = false;
        video.controls = true;
        playBtn.style.display = 'none';
        video.play();
      });
    }
  }
}

if (!customElements.get('lifestyle-section')) {
  customElements.define('lifestyle-section', lifeStyleSection);
}