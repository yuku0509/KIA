/* eslint-disable */
class SiteApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // スタイル定義（隙間を消すためのCSS）
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
          margin: 0;
          padding: 0;
          vertical-align: top;
        }
      </style>

      <div class="app-wrapper">
        <site-header></site-header>
        <topphoto-section></topphoto-section>
        <lifestyle-section></lifestyle-section>
        <site-footer></site-footer>
      </div>
    `;

    // ★ここを、取得したURLに書き換えてください
    this.loadScripts([
      'https://[あなたのURL]/site-header.js',
      'https://[あなたのURL]/topphoto-section.js',
      'https://[あなたのURL]/lifestyle-section.js',
      'https://[あなたのURL]/site-footer.js'
    ]);
  }

  loadScripts(urls) {
    urls.forEach(url => {
      // 重複読み込み防止
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        // 非同期読み込み設定（順序保証が必要なら false にして制御が必要だが、今回はカスタム要素定義なのでasyncで概ねOK）
        script.async = false; 
        document.head.appendChild(script);
      }
    });
  }
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}