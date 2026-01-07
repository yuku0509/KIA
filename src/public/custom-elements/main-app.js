/* eslint-disable */
class SiteApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // スタイル定義
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, sans-serif;
          background-color: #fff;
        }
        
        /* 全要素の基本設定 */
        .app-wrapper > * {
          display: block;
          width: 100%;
        }

        /* ▼▼▼ ここで余白を調整します ▼▼▼ */

        /* コンテンツのセクション間には大きめの余白(100px)を入れる */
        topphoto-section,
        story-section,
        business-section,
        lifestyle-section,
        company-section,
        contact-section {
          margin-bottom: 100px; /* ここを増減すると間隔が変わります */
        }

        /* ヘッダーはTopPhotoとくっつけたいので余白ゼロ */
        site-header {
          margin-bottom: 0;
        }

        /* フッターの下には余白はいらない */
        site-footer {
          margin-bottom: 0;
        }
        
        /* スマホ向け（画面幅が狭い時）は少し余白を詰める調整 */
        @media (max-width: 768px) {
          topphoto-section,
          story-section,
          business-section,
          lifestyle-section,
          company-section,
          contact-section {
            margin-bottom: 60px; /* スマホなら60pxくらいが適切 */
          }
        }
      </style>

      <div class="app-wrapper">
        <site-header></site-header>
        <topphoto-section></topphoto-section>
        <story-section></story-section>
        <business-section></business-section>
        <lifestyle-section></lifestyle-section>
        <company-section></company-section>
        <contact-section></contact-section>
        <site-footer></site-footer>
      </div>
    `;

    // ★スクリプト読み込み処理（ここは変更なし）
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
  }

  loadScripts(urls) {
    urls.forEach(url => {
      // 重複読み込み防止
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        // 非同期読み込み設定
        script.async = false; 
        document.head.appendChild(script);
      }
    });
  }
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}