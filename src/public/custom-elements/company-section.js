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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@700&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .company-section {
          position: relative;
          width: 100%;
          /* 余白を他のセクションと統一 */
          padding: 120px 0;
          color: #fff;
          /* メインカラーのネイビーをベースに、少しリッチなグラデーション */
          background: linear-gradient(135deg, #0B1E3D 0%, #162d50 100%);
          overflow: hidden; /* はみ出した背景文字をカット */
        }

        /* 背景の巨大な「KIA」文字 */
        .company-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Oswald', sans-serif; /* 英語フォントで力強く */
          font-size: 35vw; /* 画面幅に応じた巨大サイズ */
          font-weight: 700;
          line-height: 1;
          color: #fff;
          opacity: 0.03; /* うっすら見える程度に透過 */
          pointer-events: none; /* マウス操作を邪魔しない */
          z-index: 0;
          white-space: nowrap;
          user-select: none;
        }

        .l-container {
          position: relative;
          z-index: 2; /* 背景文字より上に表示 */
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* タイトル周り */
        .company-label {
          display: block;
          font-size: 14px; font-weight: 700; 
          color: #FF6600;
          letter-spacing: 0.15em; margin-bottom: 15px;
        }
        .company-title {
          font-size: 42px; font-weight: 900; margin: 0;
          font-family: 'Noto Sans JP', sans-serif;
          letter-spacing: 0.05em;
        }
        .section-title {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 60px;
          text-align: center;
          letter-spacing: 0.05em;
        }
        .section-title span {
          display: block;
          font-size: 14px;
          font-weight: 700;
          margin-top: 15px;
          color: #FF6600; /* アクセントカラー */
          letter-spacing: 0.15em;
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
          padding: 30px 0; /* ゆったりとした行間 */
          transition: background-color 0.3s;
        }
        
        /* ホバー時に少しだけ明るくしてインタラクティブ感を出す */
        .company-row:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .company-dt {
          width: 25%; /* 左側の幅 */
          font-weight: 700;
          padding-right: 20px;
          padding-left: 20px; /* 左端を少し空ける */
          box-sizing: border-box;
          font-size: 16px;
          display: flex;
          align-items: center;
          color: #FF6600; /* 項目名をオレンジにして視認性アップ */
        }

        .company-dd {
          width: 75%; /* 右側の幅 */
          margin: 0;
          line-height: 1.8;
          font-size: 16px;
          opacity: 0.95;
        }

        /* スマホ対応 */
        @media (max-width: 768px) {
          .company-section {
            padding: 80px 0;
          }
          .company-bg-text {
            font-size: 150px; /* スマホでは固定サイズ気味に */
            opacity: 0.05; /* 少し濃くして存在感を出す */
          }
          .l-container {
            padding: 0 20px;
          }
          .company-title {
            font-size: 28px;
            margin-bottom: 50px;
          }
          .company-row {
            display: block; /* 縦並び */
            padding: 25px 10px;
          }
          .company-dt {
            width: 100%;
            margin-bottom: 10px;
            padding-left: 0;
            font-size: 15px;
          }
          .company-dd {
            width: 100%;
            font-size: 15px;
          }
        }
      </style>

      <section class="company-section">
        <div class="company-bg-text">KIA</div>

        <div class="l-container">
            <span class="company-label">COMPANY</span>
            <h2 class="company-title">会社概要</h2>

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