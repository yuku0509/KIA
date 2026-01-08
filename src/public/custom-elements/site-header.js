/* eslint-disable */
class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&display=swap');

        :host {
          display: block;
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 9999;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .header {
          background-color: rgba(244, 244, 244, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(11, 30, 61, 0.1);
          padding: 15px 0;
          transition: padding 0.3s ease;
        }

        .l-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          color: #0B1E3D;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.05em;
        }
        
        /* ロゴ画像のサイズ調整 */
        .logo img { 
          height: 40px; /* 少し大きくしました（元の30pxだと細かすぎる可能性があるため） */
          width: auto;
          display: block; 
        }

        .nav-list {
          display: flex; list-style: none; margin: 0; padding: 0; gap: 30px;
        }

        .nav-item a {
          text-decoration: none;
          color: #0B1E3D;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          letter-spacing: 0.1em;
        }

        .nav-item a::after {
          content: '';
          position: absolute;
          bottom: -5px; left: 0; width: 0%; height: 2px;
          background: #FF6600;
          transition: width 0.3s;
        }
        .nav-item a:hover::after { width: 100%; }

        .hamburger {
          display: none; background: none; border: none; cursor: pointer;
          width: 30px; height: 24px; position: relative; z-index: 1001;
        }
        .hamburger span {
          display: block; width: 100%; height: 2px;
          background: #0B1E3D;
          position: absolute; transition: 0.3s;
        }
        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 11px; }
        .hamburger span:nth-child(3) { bottom: 0; }

        .hamburger.active span:nth-child(1) { transform: rotate(45deg); top: 11px; }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg); bottom: 11px; }

        .sp-nav {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: #F4F4F4;
          transition: 0.4s; display: flex; align-items: center; justify-content: center; z-index: 1000;
        }
        .sp-nav.active { right: 0; }
        .sp-nav ul { list-style: none; padding: 0; text-align: center; }
        .sp-nav li { margin: 30px 0; }
        .sp-nav a {
          font-size: 20px; font-weight: bold;
          color: #0B1E3D;
          text-decoration: none;
          font-family: 'Noto Sans JP', sans-serif;
        }

        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: block; }
        }
      </style>

      <header class="header">
        <div class="l-container">
          <a class="logo" data-target="section-top">
            <img src="https://static.wixstatic.com/media/db070e_26770223df4145ecb7d86478a07458ac~mv2.png" alt="KIA">
          </a>
          <ul class="nav-list">
            <li class="nav-item"><a data-target="section-top">Top</a></li>
            <li class="nav-item"><a data-target="section-story">Story</a></li>
            <li class="nav-item"><a data-target="section-business">Business</a></li>
            <li class="nav-item"><a data-target="section-lifestyle">LifeStyle</a></li>
            <li class="nav-item"><a data-target="section-company">Company</a></li>
            <li class="nav-item"><a data-target="section-contact">Contact</a></li>
          </ul>
          <button class="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <nav class="sp-nav">
        <ul>
          <li><a data-target="section-top">Top</a></li>
          <li><a data-target="section-story">Story</a></li>
          <li><a data-target="section-business">Business</a></li>
          <li><a data-target="section-lifestyle">LifeStyle</a></li>
          <li><a data-target="section-company">Company</a></li>
          <li><a data-target="section-contact">Contact</a></li>
        </ul>
      </nav>
    `;
    
    const links = this.shadowRoot.querySelectorAll('a[data-target]');
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const spNav = this.shadowRoot.querySelector('.sp-nav');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        
        // シャドウDOM内または通常のDOMからターゲットを探す
        const root = this.getRootNode(); 
        let targetElement = null;

        if (root instanceof ShadowRoot) {
          targetElement = root.getElementById(targetId);
        } else {
          targetElement = document.getElementById(targetId);
        }

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // 要素が見つからない場合はトップページへ遷移
          window.location.href = '/' + '#' + targetId;
        }

        if (hamburger.classList.contains('active')) {
          hamburger.classList.remove('active');
          spNav.classList.remove('active');
        }
      });
    });

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      spNav.classList.toggle('active');
    });
  }
}
if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}