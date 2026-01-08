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

        /* --- ローディング画面 --- */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: #0B1E3D; /* ネイビー */
          z-index: 99999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        .loading-screen.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* 文字を重ねるためのコンテナ */
        .loading-logo-container {
          position: relative;
          display: inline-block; /* 文字サイズにフィットさせる */
          margin-bottom: 10px;
          opacity: 0;
          transform: translateY(20px);
          animation: logoFadeIn 0.8s ease forwards;
        }

        /* 共通フォント設定 */
        .logo-text {
          font-family: 'Oswald', sans-serif;
          font-size: 80px;
          font-weight: 700;
          letter-spacing: 0.1em;
          line-height: 1;
        }

        /* ベース（白）: これがコンテナの高さを確保する */
        .logo-base {
          position: relative;
          color: #fff;
          z-index: 1;
        }

        /* 重ねる文字（オレンジ） */
        .logo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #FF6600; /* オレンジ */
          z-index: 2;
          
          /* ▼ここがポイント: 右側を100%カットしておく（左から表示させる準備） */
          clip-path: inset(0 100% 0 0);
          
          transition: clip-path 0.1s linear; 
        }

        /* パーセント表示 */
        .loading-percent {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600;
          letter-spacing: 0.1em;
          margin-top: 5px;
          opacity: 0;
          animation: logoFadeIn 0.8s ease 0.2s forwards;
        }

        @keyframes logoFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* メインコンテンツ */
        .app-wrapper {
          opacity: 0;
          transition: opacity 1.0s ease 0.5s;
        }
        .app-wrapper.visible {
          opacity: 1;
        }

        .app-wrapper > * {
          display: block;
          width: 100%;
          margin-bottom: 0;
        }
        
        topphoto-section, story-section, business-section,
        lifestyle-section, company-section, contact-section,
        site-header, site-footer {
          margin-bottom: 0 !important;
        }
      </style>

      <div class="loading-screen" id="loadingScreen">
        <div class="loading-logo-container">
          <div class="logo-text logo-base">KIA</div>
          <div class="logo-text logo-overlay" id="logoOverlay">KIA</div>
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

  runLoadingAnimation() {
    const screen = this.shadowRoot.getElementById('loadingScreen');
    const logoOverlay = this.shadowRoot.getElementById('logoOverlay');
    const percent = this.shadowRoot.getElementById('loadingPercent');
    const content = this.shadowRoot.getElementById('appWrapper');

    let progress = 0;
    
    const interval = setInterval(() => {
      // 進捗速度（ランダムに1〜3ずつ増える）
      progress += Math.floor(Math.random() * 3) + 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          screen.classList.add('hidden');
          content.classList.add('visible');
        }, 800);
      }

      // ▼▼▼ 修正: 左から右へワイプ ▼▼▼
      // inset(上 右 下 左)
      // 右側を (100 - progress)% だけカットする = 左側から progress% 分だけ見える
      logoOverlay.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;
      
      percent.textContent = `${progress}%`;

    }, 40); // 速度調整
  }
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}