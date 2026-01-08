/* eslint-disable */
class PrivacyApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // スタイル定義（メインアプリと同じベーススタイル）
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

        /* ヘッダーとフッターの余白調整（必要に応じて） */
        site-header {
          margin-bottom: 0;
        }
        site-footer {
          margin-top: 0;
        }
      </style>

      <div class="app-wrapper">
        <site-header></site-header>
        
        <privacy-policy-section></privacy-policy-section>

        <site-footer></site-footer>
      </div>
    `;

    // ★必要なスクリプトを読み込む
    // ヘッダー・フッターは既存のものを再利用
    // プライバシーポリシーは新しく作ったものを指定
    this.loadScripts([
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-header.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-footer.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/privacy-policy-section.js' 
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

// タグ名を privacy-app に定義
if (!customElements.get('privacy-app')) {
  customElements.define('privacy-app', PrivacyApp);
}