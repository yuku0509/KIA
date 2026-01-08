/* eslint-disable */
class ContactApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // スタイル定義（ベーススタイル）
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
        
        .app-wrapper > * {
          display: block;
          width: 100%;
        }

        /* ヘッダーとフッターの余白調整 */
        site-header { margin-bottom: 0; }
        site-footer { margin-top: 0; }
      </style>

      <div class="app-wrapper">
        <site-header></site-header>
        
        <contact-form-section></contact-form-section>

        <site-footer></site-footer>
      </div>
    `;

    // 必要なスクリプトを読み込む
    this.loadScripts([
      // 共通パーツ
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-header.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-footer.js',
      
      // ★今回作ったお問い合わせフォームのJS（GitHubのパスに合わせてください）
      'https://yuku0509.github.io/KIA/src/public/custom-elements/contact-form-section.js' 
    ]);
  }

  loadScripts(urls) {
    urls.forEach(url => {
      // 重複読み込み防止
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = false; 
        document.head.appendChild(script);
      }
    });
  }
}

// タグ名を contact-app に定義
if (!customElements.get('contact-app')) {
  customElements.define('contact-app', ContactApp);
}