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
        poster="https://static.wixstatic.com/media/db070e_a87a0ad876784f20ae33da4224f53dbf~mv2.jpg"
        autoplay 
        muted 
        loop 
        playsinline
      ></video>
    `;

    // --- ここから追加：SEO用構造化データ（JSON-LD）の動的挿入 ---
    // カスタムエレメントが複数回呼ばれても重複して追加されないようにチェック
    if (!document.querySelector('#seo-video-topphoto')) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "トップページの動画", // ※実際のタイトルに変更してください
        "description": "オーナーの姿", // ※実際の説明文に変更してください
        "thumbnailUrl": [
          "https://static.wixstatic.com/media/db070e_a87a0ad876784f20ae33da4224f53dbf~mv2.jpg"
        ],
        "uploadDate": "2026-03-16T08:00:00+09:00", // ※必要に応じて公開日に変更してください
        "contentUrl": "https://video.wixstatic.com/video/db070e_4cc3577d9e1846a1a377dfdf8cd84259/1080p/mp4/file.mp4"
      };

      // スクリプトタグを生成して <head> に挿入（Googleのクローラーに読ませるため）
      const script = document.createElement('script');
      script.id = 'seo-video-topphoto';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    // --- 追加ここまで ---
  }
}

if (!customElements.get('topphoto-section')) {
  customElements.define('topphoto-section', TopPhotoSection);
}