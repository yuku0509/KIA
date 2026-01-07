/* eslint-disable */
class TopPhotoSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-top';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 810px; /* PC用高さ */
          overflow: hidden;
          position: relative;
        }

        /* スマホ用高さ調整 */
        @media (max-width: 768px) {
          :host {
            height: 500px; 
          }
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover; /* 画面いっぱいに広げてトリミング */
          display: block;
        }
      </style>

      <video 
        class="hero-video"
        src="https://video.wixstatic.com/video/db070e_4cc3577d9e1846a1a377dfdf8cd84259/1080p/mp4/file.mp4" 
        autoplay 
        muted 
        loop 
        playsinline
      ></video>
    `;
  }
}

if (!customElements.get('topphoto-section')) {
  customElements.define('topphoto-section', TopPhotoSection);
}