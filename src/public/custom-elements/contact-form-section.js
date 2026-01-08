/* eslint-disable */
class ContactFormSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
          background-color: #F9F9F9; /* 全体背景は薄いグレー */
          color: #333;
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 80px; /* ヘッダー分を考慮した余白 */
        }

        /* --- タイトルエリア（他セクションと統一） --- */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-en-title {
          display: block;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600; /* オレンジ */
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 15px;
          font-family: 'Oswald', sans-serif;
        }
        .section-jp-title {
          font-size: 32px;
          font-weight: bold;
          color: #0B1E3D; /* ネイビー */
          margin: 0;
          line-height: 1.4;
        }

        /* --- フォーム本体 --- */
        .form-wrapper {
          background-color: #fff;
          padding: 60px;
          border-radius: 4px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .form-group {
          margin-bottom: 30px;
        }

        .form-label {
          display: block;
          font-weight: 700;
          margin-bottom: 10px;
          font-size: 15px;
          color: #0B1E3D;
        }

        /* 必須バッジ */
        .badge-required {
          background-color: #FF6600;
          color: #fff;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 2px;
          margin-left: 8px;
          vertical-align: middle;
        }
        /* 任意バッジ */
        .badge-optional {
          background-color: #999;
          color: #fff;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 2px;
          margin-left: 8px;
          vertical-align: middle;
        }

        /* 入力フィールド共通 */
        .form-input, 
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 15px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
          font-family: 'Noto Sans JP', sans-serif;
          transition: border-color 0.3s;
          background-color: #FAFAFA;
        }

        .form-input:focus, 
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #FF6600;
          background-color: #fff;
        }

        .form-textarea {
          height: 200px;
          resize: vertical;
        }

        /* 同意チェックボックス */
        .form-agree {
          text-align: center;
          margin: 40px 0;
        }
        .agree-label {
          font-size: 14px;
          cursor: pointer;
        }
        .agree-link {
          color: #FF6600;
          text-decoration: underline;
        }
        
        /* 送信ボタン */
        .btn-submit-wrap {
          text-align: center;
        }
        .btn-submit {
          display: inline-block;
          background-color: #0B1E3D; /* 通常はネイビー */
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          padding: 18px 80px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(11, 30, 61, 0.2);
        }

        .btn-submit:hover {
          background-color: #FF6600; /* ホバーでオレンジ */
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 102, 0, 0.3);
        }

        /* スマホ対応 */
        @media (max-width: 768px) {
          .l-container { padding: 100px 20px 60px; }
          .form-wrapper { padding: 30px 20px; }
          .section-jp-title { font-size: 24px; }
          .btn-submit { width: 100%; padding: 15px 0; }
        }
      </style>

      <div class="l-container">
        
        <div class="section-header">
          <span class="section-en-title">CONTACT FORM</span>
          <h2 class="section-jp-title">お問い合わせフォーム</h2>
        </div>

        <div class="form-wrapper">
          <form class="contact-form">
            
            <div class="form-group">
              <label class="form-label">お名前<span class="badge-required">必須</span></label>
              <input type="text" class="form-input" placeholder="例：山田 太郎" required>
            </div>

            <div class="form-group">
              <label class="form-label">貴社名<span class="badge-optional">任意</span></label>
              <input type="text" class="form-input" placeholder="例：株式会社KIA">
            </div>

            <div class="form-group">
              <label class="form-label">メールアドレス<span class="badge-required">必須</span></label>
              <input type="email" class="form-input" placeholder="例：info@kia.co.jp" required>
            </div>

            <div class="form-group">
              <label class="form-label">電話番号<span class="badge-optional">任意</span></label>
              <input type="tel" class="form-input" placeholder="例：03-1234-5678">
            </div>

            <div class="form-group">
              <label class="form-label">お問い合わせ種別<span class="badge-required">必須</span></label>
              <select class="form-select" required>
                <option value="" disabled selected>選択してください</option>
                <option value="business">事業・サービスに関するお問い合わせ</option>
                <option value="recruit">採用に関するお問い合わせ</option>
                <option value="media">取材・メディア掲載について</option>
                <option value="other">その他のお問い合わせ</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">お問い合わせ内容<span class="badge-required">必須</span></label>
              <textarea class="form-textarea" placeholder="お問い合わせ内容をご記入ください" required></textarea>
            </div>

            <div class="form-agree">
              <label class="agree-label">
                <input type="checkbox" required>
                <a href="./privacy.html" target="_blank" class="agree-link">プライバシーポリシー</a>に同意する
              </label>
            </div>

            <div class="btn-submit-wrap">
              <button type="submit" class="btn-submit">送信する</button>
            </div>

          </form>
        </div>

      </div>
    `;
  }
}

if (!customElements.get('contact-form-section')) {
  customElements.define('contact-form-section', ContactFormSection);
}