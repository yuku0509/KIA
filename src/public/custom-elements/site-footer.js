/* eslint-disable */
class SiteFooter extends HTMLElement {
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
          font-family: "Helvetica Neue", Arial, sans-serif;
          background-color: #f5f5f5;
          position: relative;
          z-index: 9999; 
        }

        .footer {
          padding: 60px 0 20px;
          color: #111;
          position: relative;
        }

        .l-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* --- 変更点：線（border-bottom）を削除しました --- */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px; /* 余白調整 */
          /* border-bottom: 1px solid #ddd; ←削除 */
          /* padding-bottom: 40px; ←削除 */
        }

        .footer-logo img {
          height: 24px;
          display: block;
        }

        .footer-sns {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .sns-link {
          display: block;
          width: 40px;
          height: 40px;
          text-decoration: none;
          cursor: pointer; 
          position: relative;
          z-index: 10;
          transition: opacity 0.3s, transform 0.3s;
        }

        .sns-link:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }

        /* --- 変更点：SVGではなく画像のスタイルを設定 --- */
        .sns-link img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* 画像を枠内に綺麗に収める */
          display: block;
          pointer-events: none; 
        }

        /* --- 変更点：ここに線（border-bottom）を移動しました --- */
        .footer-links {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 30px; /* 線と文字の間の余白 */
          border-bottom: 1px solid #ddd; /* ★ここに線を追加 */
          position: relative;
          z-index: 2;
        }

        .footer-link-item {
          font-size: 12px;
          color: #666;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          z-index: 10;
          transition: color 0.3s;
          display: inline-block;
        }

        .footer-link-item:hover {
          color: #111;
          text-decoration: underline;
        }

        .copyright {
          text-align: center;
          font-size: 11px;
          color: #999;
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
          .footer-sns {
            gap: 25px;
          }
        }
      </style>

      <footer class="footer">
        <div class="l-container">
          
          <div class="footer-top">
            <div class="footer-logo">
               <img src="https://corp.tential.jp/wp-content/themes/tential/assets/img/logo.svg" alt="TENTIAL">
            </div>

            <div class="footer-sns">
              
              <a href="https://note.com/tngcj" target="_blank" class="sns-link" aria-label="note">
                <img src="https://static.wixstatic.com/media/db070e_23e60e58d4874764b8717d99449b31bf~mv2.png" alt="Note">
              </a>

              <a href="https://www.instagram.com/juntanisan/" target="_blank" class="sns-link" aria-label="Instagram">
                <img src="https://static.wixstatic.com/media/db070e_9195edf7bb0e46b2a1502768e3aebf18~mv2.png" alt="Instagram">
              </a>

            </div>
          </div>

          <div class="footer-links">
            <a href="/privacy-policy" class="footer-link-item">プライバシーポリシー</a>
          </div>

          <p class="copyright">© KIA. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}