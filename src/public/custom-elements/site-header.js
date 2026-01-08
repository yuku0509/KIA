/* eslint-disable */
class SiteApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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

        /* ▼▼▼ 修正: 余白設定を削除しました ▼▼▼ */
        /* これにより、セクション同士の背景が隙間なくつながります */
        topphoto-section,
        story-section,
        business-section,
        lifestyle-section,
        company-section,
        contact-section {
          margin-bottom: 0; 
        }

        site-header { margin-bottom: 0; }
        site-footer { margin-bottom: 0; }
      </style>

      <div class="app-wrapper">
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
}

if (!customElements.get('site-app')) {
  customElements.define('site-app', SiteApp);
}