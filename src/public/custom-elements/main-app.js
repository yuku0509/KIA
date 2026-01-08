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

        /* ロゴのコンテナ（重ね合わせの基準） */
        .loading-logo-container {
          position: relative;
          width: 140px; /* 文字幅に合わせて調整 */
          height: 90px; /* 文字高さに合わせて調整 */
          margin-bottom: 10px;
          opacity: 0;
          transform: translateY(20px);
          animation: logoFadeIn 0.8s ease forwards;
        }

        /* ベースの白い文字と、重なるオレンジの文字 */
        .logo-base, .logo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-family: 'Oswald', sans-serif;
          font-size: 80px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-align: center;
          line-height: 1;
        }

        /* ベースは白 */
        .logo-base {
          color: #fff;
          z-index: 1;
        }

        /* 上に重なるオレンジ（初期は隠れている） */
        .logo-overlay {
          color: #FF6600; /* オレンジ */
          z-index: 2;
          /* clip-pathで表示領域を制御。初期は上端を100%カットして見えなくする */
          clip-path: inset(100% 0 0 0);
          /* JSでの変更を滑らかにつなぐ */
          transition: clip-path 0.1s linear; 
        }

        /* 数字のデザイン（バーを消したので少し調整） */
        .loading-percent {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600; /* 数字もオレンジで統一 */
          letter-spacing: 0.1em;
          margin-top: 5px;
          opacity: 0; /* ロゴと同時にふわっと出す */
          animation: logoFadeIn 0.8s ease 0.2s forwards; /* 少し遅らせて表示 */
        }

        @keyframes logoFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* --- ▲ ローディング画面ここまで ▲ --- */


        /* メインコンテンツ（フェードイン用） */
        .app-wrapper {
          opacity: 0;
          transition: opacity 1.0s ease 0.5s; /* 少し遅らせてメインを表示 */
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
          <div class="logo-base">KIA</div>
          <div class="logo-overlay" id="logoOverlay">KIA</div>
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

  // ▼▼▼ アニメーションロジックの変更 ▼▼▼
  runLoadingAnimation() {
    const screen = this.shadowRoot.getElementById('loadingScreen');
    // バーの代わりに、オレンジ色の重ね文字を取得
    const logoOverlay = this.shadowRoot.getElementById('logoOverlay');
    const percent = this.shadowRoot.getElementById('loadingPercent');
    const content = this.shadowRoot.getElementById('appWrapper');

    let progress = 0;
    
    const interval = setInterval(() => {
      // 進捗のスピード調整（少しゆっくりめにしてみる）
      progress += Math.floor(Math.random() * 3) + 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // 完了後少し待ってからフェードアウト
        setTimeout(() => {
          screen.classList.add('hidden');
          content.classList.add('visible');
        }, 800);
      }

      // ▼▼▼ ここがポイント！ ▼▼▼
      // progress(%) に合わせて、オレンジ色の文字の表示領域（clip-path）を変化させる
      // inset(上 右 下 左) なので、「上」を (100 - progress)% ずつ削っていくイメージ
      logoOverlay.style.clipPath = `inset(${100 - progress}% 0 0 0)`;
      
      // 数字の更新
      percent.textContent = `${progress}%`;

    }, 50); // 更新間隔
  }
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}