/* eslint-disable */
class PrivacyPolicySection extends HTMLElement {
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
          background-color: #fff;
          color: #333;
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 80px; /* ヘッダー(70px)分を考慮して上を空ける */
        }

        .page-title {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 60px;
        }

        .policy-item {
          margin-bottom: 40px;
        }

        .policy-head {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          padding-left: 10px;
          border-left: 4px solid #FF6600; /* アクセントカラー */
        }

        .policy-text {
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 768px) {
          .l-container {
            padding-top: 100px;
          }
          .page-title {
            font-size: 24px;
            margin-bottom: 40px;
          }
        }
      </style>

      <div class="l-container">
        <h1 class="page-title">プライバシーポリシー</h1>

        <div class="policy-item">
          <h2 class="policy-head">1. 個人情報の定義</h2>
          <p class="policy-text">
            本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）を意味するものとします。
          </p>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">2. 個人情報の利用目的</h2>
          <p class="policy-text">
            当方は、お客様の個人情報を、以下の目的で利用いたします。<br>
            ・本サービスの提供のため<br>
            ・本サービスに関するご案内、お問い合わせ等への対応のため<br>
            ・本サービスに関する規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため<br>
            ・その他、上記利用目的に付随する目的のため
          </p>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">3. お問い合わせ窓口</h2>
          <p class="policy-text">
            ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
          </p>
        </div>

      </div>
    `;
  }
}

customElements.define('privacy-policy-section', PrivacyPolicySection);