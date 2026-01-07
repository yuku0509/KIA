/* eslint-disable */
class BusinessSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-business';
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&display=swap');

        :host {
          display: block; width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
        }

        /* .top-service を .top-business に変更 */
        .top-business {
          position: relative;
          background-color: #0B1E3D; /* メインカラー（ネイビー） */
          color: #fff;
          overflow: hidden; padding: 100px 0;
        }

        /* 画像マスク */
        .top-business__bg {
          position: absolute; top: 0; right: 0; width: 60%; height: 100%;
          opacity: 0.6; z-index: 0;
        }
        .top-business__bgImg {
          width: 100%; height: 100%; object-fit: cover;
          mask-image: linear-gradient(to right, transparent, black 20%);
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%);
        }

        .l-container {
          position: relative; max-width: 1200px; margin: 0 auto; padding: 0 40px;
          z-index: 1; display: flex; align-items: center; height: 100%; min-height: 400px;
        }

        .top-business__contents { max-width: 500px; }

        .top-business__intro {
          font-size: 14px; font-weight: 700; margin-bottom: 15px;
          color: #FF6600; /* アクセント（オレンジ） */
          letter-spacing: 0.1em;
        }
        .top-business__title {
          font-size: 52px; font-weight: 400; margin: 0 0 30px; line-height: 1.1;
          font-family: 'Noto Sans JP', sans-serif;
        }
        .top-business__title--bold { font-weight: 900; }

        .top-business__description {
          font-family: 'Noto Serif JP', serif; /* 明朝 */
          font-size: 15px; line-height: 2.0; margin-bottom: 40px; opacity: 0.9;
        }

        .top-business__heading {
            /* 必要であればここにスタイル追加 */
        }

        /* ボタンデザイン */
        .c-btn1 {
          display: inline-flex; align-items: center;
          color: #fff; text-decoration: none;
          font-size: 14px; font-weight: 700;
          border-bottom: 2px solid #FF6600; /* オレンジライン */
          padding-bottom: 5px; transition: opacity 0.3s;
        }
        .c-btn1:hover { opacity: 0.8; }
        .c-btn1__icon {
          margin-left: 10px; width: 20px; fill: none; stroke: #FF6600; /* オレンジ */
        }

        @media (max-width: 768px) {
          .top-business { padding: 60px 0; }
          .top-business__bg { width: 100%; height: 40%; bottom: 0; top: auto; mask-image: linear-gradient(to bottom, transparent, black 20%); -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%); }
          .l-container { display: block; padding: 0 20px; }
          .top-business__title { font-size: 36px; }
        }
      </style>

      <section class="top-business">
        <div class="top-business__bg">
          <picture>
            <source media="(min-width: 1024px)" srcset="https://corp.tential.jp/wp-content/themes/tential/assets/img/top/service/top_service_pc.png">
            <img class="top-business__bgImg" src="https://corp.tential.jp/wp-content/themes/tential/assets/img/top/service/top_service_sp.png" alt="business">
          </picture>
        </div>

        <div class="l-container">
          <div class="top-business__contents">
            <div class="top-business__heading">
              <p class="top-business__intro">BUSINESS</p>
              <h2 class="top-business__title">Our <span class="top-business__title--bold">Business</span></h2>
            </div>
            <p class="top-business__description">
              「365日24hコンディショニング」を軸に、「SLEEP」「WORK」「FOOT」の3領域で機能性製品を展開。累計100万セット超の疲労回復パジャマ「BAKUNE」など、アスリートの知見と科学に基づいたアイテムを提供しています。
            </p>
            <a href="#" class="c-btn1">
              <span class="c-btn1__text">詳細を見る</span>
              <svg class="c-btn1__icon" viewBox="0 0 21 12">
                <path d="M0 6L19 6" stroke-width="2"></path>
                <path d="M14.5 1L19.5 6L14.5 11" stroke-width="2"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

// コンポーネント定義名も business-section に変更
if (!customElements.get('business-section')) {
  customElements.define('business-section', BusinessSection);
}