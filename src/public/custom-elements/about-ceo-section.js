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

        /* ヘッダー・フッターの隙間調整 */
        site-header { margin-bottom: 0; }
        site-footer { margin-top: 0; }

        /* --- ヒーローエリア --- */
        .hero {
          position: relative;
          width: 100%;
          height: 50vh;
          min-height: 300px;
          background-color: #0B1E3D; /* 濃いネイビー */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding-top: 60px;
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

        /* --- タイムラインエリア --- */
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

        .timeline {
          position: relative;
          padding-left: 40px;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 15px;
          width: 2px;
          height: 100%;
          background-color: #ddd;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
        }
        .timeline-item:last-child { margin-bottom: 0; }

        .timeline-point {
          position: absolute;
          top: 5px;
          left: -30px;
          width: 12px;
          height: 12px;
          background-color: #FF6600;
          border-radius: 50%;
          border: 4px solid #fff;
          box-shadow: 0 0 0 2px #FF6600;
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

      <site-header></site-header>

      <div class="main-content">
        <div class="hero">
          <div class="hero-content">
            <span class="hero-label">CEO PROFILE</span>
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
                <div class="timeline-year">ORIGIN</div>
                <div class="timeline-content">
                  <h3 class="timeline-title">「勝負師の勘」と自立の教育</h3>
                  <p class="timeline-desc">
                    福島で生まれ秋田で育つ。2歳から水泳を始め、常に「勝負」の世界に身を置く。<br>
                    両親からの「勝つためには何が必要か、自分で考えろ」という教えにより、ビジネスの根幹となる課題解決への姿勢と自立心が養われた。
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-point"></div>
                <div class="timeline-year">STUDENT DAYS</div>
                <div class="timeline-content">
                  <h3 class="timeline-title">バスケに捧げた青春と挫折</h3>
                  <p class="timeline-desc">
                    小学3年から大学4年までバスケットボールに没頭。本気でプロを目指し、週6日の練習に明け暮れる。<br>
                    しかし、度重なる怪我によりプロへの道は閉ざされる。「もうあんなに熱くなれる場所はないのかもしれない」という喪失感と共に社会へ出る。
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-point"></div>
                <div class="timeline-year">CAREER START</div>
                <div class="timeline-content">
                  <h3 class="timeline-title">営業成績1位、それでも「現状維持」が怖かった</h3>
                  <p class="timeline-desc">
                    大手機械部品メーカー（THK株式会社）に入社。関東1位の営業成績を収めるも、年功序列と安定志向の社風に違和感を抱く。<br>
                    「20代の貴重な時間を現状維持に費やしていいのか？」その危機感が確信に変わり、安定を捨てる決意をする。
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-point"></div>
                <div class="timeline-year">AGES 24-26</div>
                <div class="timeline-content">
                  <h3 class="timeline-title">会社設立：再び「熱狂」の渦へ</h3>
                  <p class="timeline-desc">
                    24歳で退路を断ち、起業の準備を開始。26歳で会社を設立。<br>
                    都内を拠点に小売、人材、不動産、コンサル、地方創生など多岐にわたる事業を展開。「現状維持」を脱ぎ捨てた先には、想像以上にエキサイティングで成長できるステージが待っていた。
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-point"></div>
                <div class="timeline-year">NOW</div>
                <div class="timeline-content">
                  <h3 class="timeline-title">株式会社KIAと「大人の青春」</h3>
                  <p class="timeline-desc">
                    時間と場所の自由を手に入れ、カンヌ国際映画祭への招待や国内外への旅を通じて感性をアップデートし続けている。<br>
                    掲げるビジョンは「大人の青春」。安定に甘んじず、高い壁に挑み、仲間と共に昨日の自分を超えていく。最高に面白いチームで、アツい景色を見続けていく。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <site-footer></site-footer>
    `;

    this.loadScripts([
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-header.js',
      'https://yuku0509.github.io/KIA/src/public/custom-elements/site-footer.js'
    ]);
  }

  loadScripts(urls) {
    urls.forEach(url => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = false; 
        document.head.appendChild(script);
      }
    });
  }
}

if (!customElements.get('about-ceo-section')) {
  customElements.define('about-ceo-section', AboutCeoSection);
}