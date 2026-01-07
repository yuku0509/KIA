/* eslint-disable */
class CompanySection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-company';
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .company-section {
          position: relative;
          width: 100%;
          padding: 100px 0;
          color: #fff;
          background-image: url('https://corp.tential.jp/wp-content/themes/tential/assets/img/top/posts/posts1.jpg');
          background-size: cover;
          background-position: center;
        }

        /* 画像の上に重ねる黒いフィルター */
        .company-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(11, 30, 61, 0.8); /* ネイビー系の透過背景 */
          z-index: 1;
        }

        .l-container {
          position: relative;
          z-index: 2; /* フィルターより上に表示 */
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 60px;
          text-align: center;
          letter-spacing: 0.1em;
        }
        .section-title span {
          display: block;
          font-size: 16px;
          font-weight: 400;
          margin-top: 10px;
          opacity: 0.8;
          color: #FF6600; /* アクセントカラー */
        }

        /* 会社概要リストのデザイン */
        .company-list {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .company-row {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 25px 0; /* 行間も少し広げました */
        }

        .company-dt {
          width: 20%;
          font-weight: 700;
          padding-right: 20px;
          box-sizing: border-box;
          font-size: 18px; /* 【修正】文字サイズUP */
          display: flex;
          align-items: center; /* 上下中央揃え */
        }

        .company-dd {
          width: 80%;
          margin: 0;
          line-height: 1.8;
          font-size: 18px; /* 【修正】文字サイズUP */
          opacity: 0.95;
        }

        /* スマホ対応 */
        @media (max-width: 768px) {
          .company-section {
            padding: 60px 0;
          }
          .l-container {
            padding: 0 20px;
          }
          .section-title {
            font-size: 28px;
            margin-bottom: 40px;
          }
          .company-row {
            display: block; /* 縦並びにする */
            padding: 20px 0;
          }
          .company-dt {
            width: 100%;
            margin-bottom: 10px;
            color: #FF6600;
            font-size: 16px; /* 【修正】スマホもサイズUP */
          }
          .company-dd {
            width: 100%;
            font-size: 16px; /* 【修正】スマホもサイズUP */
          }
        }
      </style>

      <section class="company-section">
        <div class="company-overlay"></div>
        <div class="l-container">
          <h2 class="section-title">
            COMPANY
            <span>会社概要</span>
          </h2>

          <div class="company-list">
            <div class="company-row">
              <div class="company-dt">会社名</div>
              <div class="company-dd">株式会社KIA</div>
            </div>

            <div class="company-row">
              <div class="company-dt">所在地</div>
              <div class="company-dd">
                ​東京都中央区銀座1-12-4 N&EBLD. 7階
              </div>
            </div>

            <div class="company-row">
              <div class="company-dt">設立</div>
              <div class="company-dd">2023年12月</div>
            </div>

            <div class="company-row">
              <div class="company-dt">資本金</div>
              <div class="company-dd">100万円</div>
            </div>

            <div class="company-row">
              <div class="company-dt">代表者</div>
              <div class="company-dd">谷口 純也</div>
            </div>

            <div class="company-row">
              <div class="company-dt">事業内容</div>
              <div class="company-dd">
                小売事業、営業支援業、キャリアコンサルタント<br>
                コンサル・マネジメント業、イベント業、美容業
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

if (!customElements.get('company-section')) {
  customElements.define('company-section', CompanySection);
}