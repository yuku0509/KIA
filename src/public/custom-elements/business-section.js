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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&family=Oswald:wght@500&display=swap');

        :host {
          display: block; width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .top-business {
          position: relative;
          background-color: #0B1E3D; /* ベースカラー（ネイビー） */
          color: #fff;
          padding: 120px 0;
        }

        .l-container {
          max-width: 1200px; margin: 0 auto; padding: 0 20px;
        }

        /* --- ヘッダー部分 --- */
        .business-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .business-label {
          display: block;
          font-size: 14px; font-weight: 700; 
          color: #FF6600; /* アクセントカラー */
          letter-spacing: 0.15em; margin-bottom: 15px;
        }
        .business-title {
          font-size: 42px; font-weight: 900; margin: 0;
          font-family: 'Noto Sans JP', sans-serif;
          letter-spacing: 0.05em;
        }

        /* --- 3つのカードレイアウト --- */
        .business-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          align-items: stretch;
        }

        .b-card {
          background: #fff;
          color: #111;
          padding: 40px 30px;
          border-radius: 4px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .b-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        /* 数字のデザイン */
        .b-card__num {
          font-family: 'Oswald', sans-serif;
          font-size: 60px;
          color: #F0F0F0;
          line-height: 1;
          position: absolute;
          top: 20px;
          right: 20px;
          font-weight: bold;
          z-index: 0;
        }

        .b-card__content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .b-card__en {
          display: block;
          color: #FF6600;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.05em;
        }

        .b-card__jp {
          display: block;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 25px;
          line-height: 1.4;
        }

        .b-card__desc {
          font-size: 14px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 30px;
          flex-grow: 1;
          font-family: 'Noto Serif JP', serif;
        }

        /* 事業リストエリア（ここを変更しました） */
        .b-card__list {
          border-top: 1px solid #eee;
          padding-top: 20px;
          /* ▼変更: Flexboxで縦並びにし、左寄せにする */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px; /* 項目間の隙間 */
        }
        
        .b-card__item {
          display: inline-block;
          font-size: 12px;
          font-weight: bold;
          background-color: #0B1E3D;
          color: #fff;
          padding: 8px 16px; /* 少し大きめに調整 */
          border-radius: 2px;
          /* margin設定は削除（gapで制御するため） */
        }

        /* スマホ対応 */
        @media (max-width: 768px) {
          .top-business { padding: 80px 0; }
          .business-title { font-size: 28px; }
          .business-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .b-card { padding: 30px 25px; }
        }
      </style>

      <section class="top-business">
        <div class="l-container">
          
          <div class="business-header">
            <span class="business-label">OUR BUSINESS</span>
            <h2 class="business-title">事業領域</h2>
          </div>

          <div class="business-grid">
            
            <article class="b-card">
              <span class="b-card__num">01</span>
              <div class="b-card__content">
                <span class="b-card__en">Strategic Answer</span>
                <h3 class="b-card__jp">不確実性を、確信へ。</h3>
                <p class="b-card__desc">
                  独自の知見とデータに基づき、挑戦者が直面する課題に対する「最善の答え」を提示。<br>
                  迷いを取り払い、進むべき道を明確にする戦略を提供します。
                </p>
                <div class="b-card__list">
                  <span class="b-card__item">コンサル・マネジメント業</span>
                  <span class="b-card__item">キャリアコンサルタント</span>
                </div>
              </div>
            </article>

            <article class="b-card">
              <span class="b-card__num">02</span>
              <div class="b-card__content">
                <span class="b-card__en">Active Contribution</span>
                <h3 class="b-card__jp">共に汗をかき、成果を掴む。</h3>
                <p class="b-card__desc">
                  答えを出すだけでなく、共に現場で汗をかき、成果が出るまで徹底的に並走。<br>
                  机上の空論ではなく、実行力をもって貢献の証とします。
                </p>
                <div class="b-card__list">
                  <span class="b-card__item">営業支援業</span>
                  <span class="b-card__item">小売事業</span>
                </div>
              </div>
            </article>

            <article class="b-card">
              <span class="b-card__num">03</span>
              <div class="b-card__content">
                <span class="b-card__en">Potential Challenge</span>
                <h3 class="b-card__jp">限界を超え、次なる可能性へ。</h3>
                <p class="b-card__desc">
                  現状に満足せず、常に次なる可能性を模索。<br>
                  クライアントの限界を規定せず、共に高い目標へチャレンジし続けます。
                </p>
                <div class="b-card__list">
                  <span class="b-card__item">イベント業</span>
                  <span class="b-card__item">美容業</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    `;
  }
}

if (!customElements.get('business-section')) {
  customElements.define('business-section', BusinessSection);
}