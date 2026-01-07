/* eslint-disable */
class StorySection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.id = 'section-story';
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&display=swap');

        :host {
          display: block; width: 100%;
          background-color: #F4F4F4; /* ベースカラー */
          color: #0B1E3D; /* メインカラー */
          padding: 100px 0;
        }

        .l-container {
          max-width: 1000px; margin: 0 auto; padding: 0 20px; text-align: center;
        }

        .story-label {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 14px; font-weight: 700; letter-spacing: 0.15em;
          margin-bottom: 20px; display: block; opacity: 0.7;
          color: #FF6600; /* アクセントカラー */
        }

        .story-title {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 42px; font-weight: 900;
          margin: 0 0 40px; line-height: 1.4; letter-spacing: 0.05em;
          text-align: center;
        }

        .quote-box {
          position: relative; padding: 40px;
          background-color: #fff; /* ここだけ白にして浮かせる */
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(11, 30, 61, 0.05);
        }
        
        .story-text {
          font-family: 'Noto Serif JP', serif; /* 本文は明朝 */
          font-size: 16px; line-height: 2.4; /* 行間広めでゆったり */
          margin-bottom: 0; text-align: left; display: inline-block;
          color: #0B1E3D;
        }
        
        /* スマホ対応 */
        @media (max-width: 768px) {
          :host { padding: 60px 0; }
          .story-title { font-size: 26px; text-align: center;; }
          .story-text { font-size: 14px; line-height: 2.0; text-align: left; }
          .quote-box { padding: 25px; }
        }
      </style>

      <div class="l-container">
        <span class="story-label">STORY</span>
        <h2 class="story-title">
          KickInAnswer<br>
          に込めた覚悟
        </h2>
        
        <div class="quote-box">
          <p class="story-text">
            新しいことに挑むとき、そこには必ず迷いや壁が存在します。<br>
            私たちは、ただ寄り添うだけの存在ではありません。<br><br>
            「答えをもって貢献する」<br><br>
            その決意を社名（KickInAnswer）に刻み、<br>
            KIAは誕生しました。<br>
            不確かな時代だからこそ、私たちは確かな解を導き出し、<br>
            挑戦者の背中を押し続けます。 <br>
            あなたの挑戦が、世界の新しい答えになるまで。
          </p>
        </div>
      </div>
    `;
  }
}
if (!customElements.get('story-section')) {
  customElements.define('story-section', StorySection);
}