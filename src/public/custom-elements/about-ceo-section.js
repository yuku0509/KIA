/* eslint-disable */
class AboutCeoSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@400;700&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
          background-color: #fff;
          color: #333;
        }

        /* --- ヒーローエリア（トップ画像） --- */
        .hero {
          position: relative;
          width: 100%;
          height: 60vh; /* 画面の高さの60% */
          min-height: 400px;
          /* 提供いただいた画像を使用 */
          background-image: url('https://static.wixstatic.com/media/db070e_3c54079899d64d50989f50aed7413d42~mv2.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* 画像の上にネイビーのフィルターをかける */
        .hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(11, 30, 61, 0.6); 
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding-top: 60px; /* ヘッダーの重なりを考慮 */
        }

        .hero-label {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          letter-spacing: 0.2em;
          color: #FF6600;
          display: block;
          margin-bottom: 15px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.1em;
        }
        .hero-subtitle {
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          opacity: 0.9;
          margin-top: 10px;
          display: block;
          letter-spacing: 0.05em;
        }

        /* --- タイムライン（経歴）エリア --- */
        .timeline-section {
          padding: 100px 20px;
          background-color: #f9f9f9;
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #0B1E3D;
          margin: 0;
        }
        .section-sub {
          display: block;
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          color: #FF6600;
          margin-bottom: 10px;
          letter-spacing: 0.1em;
        }

        /* タイムライン本体 */
        .timeline {
          position: relative;
          padding-left: 40px; /* 左側の線のスペース */
        }
        
        /* 縦線 */
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 15px; /* 線の位置 */
          width: 2px;
          height: 100%;
          background-color: #ddd;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        /* 丸い点 */
        .timeline-point {
          position: absolute;
          top: 5px;
          left: -30px; /* 線の上に配置 */
          width: 12px;
          height: 12px;
          background-color: #FF6600;
          border-radius: 50%;
          border: 4px solid #fff; /* 白い縁取りで浮き立たせる */
          box-shadow: 0 0 0 2px #FF6600; /* 二重線風 */
        }

        .timeline-year {
          font-family: 'Oswald', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0B1E3D;
          margin-bottom: 10px;
          line-height: 1;
        }

        .timeline-content {
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
        }
        
        /* 吹き出しの三角（左向き） */
        .timeline-content::before {
          content: '';
          position: absolute;
          top: 20px;
          left: -10px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid #fff;
        }

        .timeline-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 15px;
          color: #111;
        }

        .timeline-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 32px; }
          .timeline-section { padding: 60px 20px; }
          .timeline { padding-left: 20px; }
          .timeline::before { left: 5px; }
          .timeline-point { left: -19px; width: 10px; height: 10px; }
          .timeline-content { padding: 20px; }
        }
      </style>

      <div class="hero">
        <div class="hero-content">
          <span class="hero-label">REPRESENTATIVE PROFILE</span>
          <h1 class="hero-title">谷口 純也</h1>
          <span class="hero-subtitle">JUNYA TANIGUCHI</span>
        </div>
      </div>

      <div class="timeline-section">
        <div class="l-container">
          <div class="section-header">
            <span class="section-sub">HISTORY</span>
            <h2 class="section-title">経歴・歩み</h2>
          </div>

          <div class="timeline">
            
            <div class="timeline-item">
              <div class="timeline-point"></div>
              <div class="timeline-year">EARLY DAYS</div>
              <div class="timeline-content">
                <h3 class="timeline-title">バスケットボールに没頭</h3>
                <p class="timeline-desc">
                  幼少期よりバスケットボールを始め、チームスポーツを通じて「目標に向かって努力すること」「仲間と協力すること」の重要性を学ぶ。この経験が現在の経営哲学の原点となっている。
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-point"></div>
              <div class="timeline-year">CAREER START</div>
              <div class="timeline-content">
                <h3 class="timeline-title">小売・営業支援の現場へ</h3>
                <p class="timeline-desc">
                  社会人としてのキャリアをスタート。小売事業および営業支援の現場で、顧客ニーズの深掘りと課題解決のスキルを磨く。現場での実践を通じて、ビジネスの基礎体力を養う。
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-point"></div>
              <div class="timeline-year">MANAGEMENT</div>
              <div class="timeline-content">
                <h3 class="timeline-title">マネジメントへの挑戦</h3>
                <p class="timeline-desc">
                  コンサルティング・マネジメント業務に従事。組織運営や人材育成の難しさと面白さに直面し、リーダーとしての資質を高める。多くのプロジェクトを牽引し、成果を創出。
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-point"></div>
              <div class="timeline-year">2023.12</div>
              <div class="timeline-content">
                <h3 class="timeline-title">株式会社KIA 設立</h3>
                <p class="timeline-desc">
                  これまでの経験を集大成とし、株式会社KIAを設立。「Kick In Answer」の名の通り、世の中の課題に対して自ら答えを蹴り出し、新たな価値を創造するために独立。
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-point"></div>
              <div class="timeline-year">FUTURE</div>
              <div class="timeline-content">
                <h3 class="timeline-title">さらなる挑戦へ</h3>
                <p class="timeline-desc">
                  小売、営業支援、キャリアコンサルタント、イベント、美容など多岐にわたる事業を展開。既存の枠にとらわれず、常に新しい領域への挑戦を続けていく。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('about-ceo-section')) {
  customElements.define('about-ceo-section', AboutCeoSection);
}