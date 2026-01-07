/* eslint-disable */
class ContactSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-contact';
    
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
          position: relative;
          z-index: 10;
        }

        .contact-section {
          width: 100%;
          /* 上のセクションとメリハリをつけるため、ここはシンプルに白 */
          background-color: #fff; 
          padding: 120px 0;
          text-align: center;
          position: relative; 
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
          /* 白背景の中に、うっすらグレーのエリアを作ってまとめる */
          background-color: #F9F9F9; 
          padding: 80px 40px;
          border-radius: 4px;
          position: relative;
          z-index: 2; 
        }

        .section-title {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0B1E3D; /* 背景が白なので文字はネイビー */
          margin-bottom: 30px;
          margin-top: 0;
          letter-spacing: 0.05em;
        }
        .section-title span {
          display: block;
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          color: #FF6600; /* アクセントカラー */
          margin-top: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
        }

        .contact-desc {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 16px;
          line-height: 2.0;
          margin-bottom: 50px;
          color: #333; /* 読みやすい濃いグレー */
        }

        /* --- ボタンデザイン（オレンジのまま） --- */
        .contact-link-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: #FF6600;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          /* ボタンを少し大きめにして押しやすく */
          width: 300px;
          height: 60px; 
          border-radius: 50px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 10;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2); /* ほんのりオレンジの影 */
        }

        /* ホバー時に少し浮く動きを追加 */
        .contact-link-btn:hover {
          background-color: #e65c00;
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(255, 102, 0, 0.3);
        }

        @media (max-width: 768px) {
          .contact-section { padding: 80px 0; }
          .l-container {
            margin: 0 20px;
            padding: 50px 20px;
          }
          .section-title { font-size: 28px; }
          .contact-desc { font-size: 14px; text-align: left; }
          .contact-link-btn { width: 100%; }
        }
      </style>

      <section class="contact-section">
        <div class="l-container">
          <h2 class="section-title">
            <span>CONTACT</span>
            お問い合わせ
          </h2>

          <p class="contact-desc">
            お仕事のご依頼、ご相談などございましたら<br>
            下記フォームよりお気軽にお問い合わせください。<br>
            共に未来をつくるパートナーをお待ちしております。
          </p>

          <a href="https://docs.google.com/forms/" target="_blank" class="contact-link-btn">
            お問い合わせフォームへ
          </a>

        </div>
      </section>
    `;
  }
}

if (!customElements.get('contact-section')) {
  customElements.define('contact-section', ContactSection);
}