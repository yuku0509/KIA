/* eslint-disable */
class SiteApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

        :host {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, sans-serif;
          background-color: #fff;
          position: relative;
        }

        /* --- ▼ ローディング画面のスタイル ▼ --- */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: #0B1E3D; /* ネイビー */
          z-index: 99999; /* 最前面 */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        /* ロード完了後に消すためのクラス */
        .loading-screen.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loading-logo {
          font-family: 'Oswald', sans-serif;
          font-size: 80px;
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          animation: logoFadeIn 0.8s ease forwards;
        }

        .loading-bar-container {
          width: 240px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .loading-bar {
          width: 0%;
          height: 100%;
          background-color: #FF6600; /* オレンジ */
          transition: width 0.1s linear;
        }

        .loading-percent {
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          color: #FF6600;
          letter-spacing: 0.1em;
        }

        @keyframes logoFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* --- ▲ ローディング画面ここまで ▲ --- */


        /* --- メインコンテンツ（最初は隠しておく） --- */
        .app-wrapper {
          opacity: 0;
          transition: opacity 1.0s ease;
        }
        .app-wrapper.visible {
          opacity: 1;
        }

        .app-wrapper > * {
          display: block;
          width: 100%;
          margin-bottom: 0;
        }
        
        /* 念のため余白ゼロ設定 */
        topphoto-section, story-section, business-section,
        lifestyle-section, company-section, contact-section,
        site-header, site-footer {
          margin-bottom: 0 !important;
        }
      </style>

      <div class="loading-screen" id="loadingScreen">
        <div class="loading-logo">KIA</div>
        <div class="loading-bar-container">
          <div class="loading-bar" id="loadingBar"></div>
        </div>
        <div class="loading-percent" id="loadingPercent">0%</div>
      </div>

      <div class="app-wrapper" id="appWrapper">
        <site-header></site-header>
        
        <topphoto-section id="section-top"></topphoto-section>
        <story-section     id="section-story"></story-section>
        <business-section  id="section-business"></business-section>
        <lifestyle-section id="section-lifestyle"></lifestyle-section>
        <company-section   id="section-company"></company-section>
        <contact-section   id="section-contact"></contact-section>

        <site-footer></site-footer>
      </div>
    `;

    // JSファイルの読み込み開始
    this.loadScripts([
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-header.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/topPhoto-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/story-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/business-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/lifeStyle-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/company-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/contact-section.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-footer.js'
    ]);

    // ▼▼▼ ローディングアニメーションの実行 ▼▼▼
    this.runLoadingAnimation();
  }

  loadScripts(urls) {
    urls.forEach(url => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = false; 
        document.head.appendChild(script);
      }
    });
  }

  // ローディングアニメーションのロジック
  runLoadingAnimation() {
    const screen = this.shadowRoot.getElementById('loadingScreen');
    const bar = this.shadowRoot.getElementById('loadingBar');
    const percent = this.shadowRoot.getElementById('loadingPercent');
    const content = this.shadowRoot.getElementById('appWrapper');

    let progress = 0;
    
    // 0%から100%までカウントアップさせるタイマー
    const interval = setInterval(() => {
      // 少しランダムに進めることでリアルっぽさを出す
      progress += Math.floor(Math.random() * 5) + 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // 100%になったら少し待ってからフェードアウト
        setTimeout(() => {
          screen.classList.add('hidden'); // ローディングを隠す
          content.classList.add('visible'); // 中身を表示する
        }, 500);
      }

      // 画面更新
      bar.style.width = `${progress}%`;
      percent.textContent = `${progress}%`;

    }, 30); // 30msごとに更新（速度調整はここ）
  }
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}