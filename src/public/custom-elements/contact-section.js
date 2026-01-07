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
        :host {
          display: block;
          width: 100%;
          font-family: "Helvetica Neue", Arial, sans-serif;
          position: relative;
          /* フッターに合わせてこちらも強力な数値を入れます */
          z-index: 9999; 
        }

        .contact-section {
          width: 100%;
          padding: 80px 0;
          color: #fff;
          text-align: center;
          background-image: url('https://corp.tential.jp/wp-content/themes/tential/assets/img/top/posts/posts1.jpg');
          background-size: cover;
          background-position: center;
          background-color: #0B1E3D;
          /* 親も相対位置に */
          position: relative; 
        }

        .l-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: rgba(11, 30, 61, 0.85);
          padding: 40px;
          border-radius: 10px;
          
          /* ★【修正点1】フッターと同じく、箱自体を浮かせます */
          position: relative;
          z-index: 2; 
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          margin-top: 0;
          /* 文字もしっかり浮かせます */
          position: relative; 
          z-index: 2;
        }
        .section-title span {
          display: block;
          font-size: 14px;
          color: #FF6600;
          margin-top: 5px;
          font-weight: normal;
        }

        .contact-desc {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 30px;
          /* 文字もしっかり浮かせます */
          position: relative;
          z-index: 2;
        }

        .contact-link-btn {
          display: inline-block;
          background-color: #FF6600;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          padding: 15px 50px;
          border-radius: 50px;
          transition: opacity 0.3s;
          
          /* ★【修正点2】フッターのリンクと同じく、ボタンを最前面に浮かせます */
          position: relative;
          z-index: 10;
          cursor: pointer;
        }

        .contact-link-btn:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .l-container {
            margin: 0 20px;
            padding: 30px 20px;
          }
          .section-title { font-size: 26px; }
        }
      </style>

      <section class="contact-section">
        <div class="l-container">
          <h2 class="section-title">
            CONTACT
            <span>お問い合わせ</span>
          </h2>

          <p class="contact-desc">
            ご依頼・ご相談はこちらから。<br>
            フォームへ移動します。
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