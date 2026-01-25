/* eslint-disable */
class ContactFormSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* CSS部分は変更なし（そのまま維持） */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Noto Sans JP', sans-serif;
          background-color: #F9F9F9;
          color: #333;
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 80px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-en-title {
          display: block;
          font-size: 16px;
          font-weight: bold;
          color: #FF6600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 15px;
          font-family: 'Oswald', sans-serif;
        }
        .section-jp-title {
          font-size: 32px;
          font-weight: bold;
          color: #0B1E3D;
          margin: 0;
          line-height: 1.4;
        }

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

        .badge-required {
          background-color: #FF6600;
          color: #fff;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 2px;
          margin-left: 8px;
          vertical-align: middle;
        }
        .badge-optional {
          background-color: #999;
          color: #fff;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 2px;
          margin-left: 8px;
          vertical-align: middle;
        }

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
        .agree-link:hover {
          text-decoration: none;
        }
        
        .btn-submit-wrap {
          text-align: center;
        }
        .btn-submit {
          display: inline-block;
          background-color: #0B1E3D;
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
          background-color: #FF6600;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 102, 0, 0.3);
        }

        /* 送信完了メッセージ用 */
        .success-message {
          display: none;
          text-align: center;
          padding: 40px;
        }
        .success-title {
          font-size: 24px;
          color: #0B1E3D;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .success-text {
          font-size: 16px;
          line-height: 1.8;
        }
        .btn-back {
          display: inline-block;
          margin-top: 30px;
          color: #FF6600;
          text-decoration: underline;
          cursor: pointer;
        }

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
          
          <form class="contact-form" id="my-form" action="https://formspree.io/f/xlgjyowe" method="POST">
            
            <input type="hidden" name="_subject" value="【KIA】Webサイトからお問い合わせがありました" />
            
            <input type="text" name="_gotcha" style="display:none" />

            <div class="form-group">
              <label class="form-label">お名前<span class="badge-required">必須</span></label>
              <input type="text" name="お名前" class="form-input" placeholder="例：山田 太郎" required>
            </div>

            <div class="form-group">
              <label class="form-label">貴社名<span class="badge-optional">任意</span></label>
              <input type="text" name="貴社名" class="form-input" placeholder="例：株式会社KIA">
            </div>

            <div class="form-group">
              <label class="form-label">メールアドレス<span class="badge-required">必須</span></label>
              <input type="email" name="email" class="form-input" placeholder="例：info@kia.co.jp" required>
            </div>

            <div class="form-group">
              <label class="form-label">電話番号<span class="badge-optional">任意</span></label>
              <input type="tel" name="電話番号" class="form-input" placeholder="例：03-1234-5678">
            </div>

            <div class="form-group">
              <label class="form-label">お問い合わせ種別<span class="badge-required">必須</span></label>
              <select name="お問い合わせ種別" class="form-select" required>
                <option value="" disabled selected>選択してください</option>
                <option value="事業・サービスに関するお問い合わせ">事業・サービスに関するお問い合わせ</option>
                <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
                <option value="取材・メディア掲載について">取材・メディア掲載について</option>
                <option value="その他のお問い合わせ">その他のお問い合わせ</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">お問い合わせ内容<span class="badge-required">必須</span></label>
              <textarea name="お問い合わせ内容" class="form-textarea" placeholder="お問い合わせ内容をご記入ください" required></textarea>
            </div>

            <div class="form-agree">
              <label class="agree-label">
                <input type="checkbox" required>
                <a href="/privacy-policy" target="_blank" class="agree-link">プライバシーポリシー</a>に同意する
              </label>
            </div>

            <div class="btn-submit-wrap">
              <button type="submit" class="btn-submit" id="my-form-button">送信する</button>
            </div>
            
            <p id="my-form-status" style="text-align:center; margin-top:10px; color:#FF6600; display:none;"></p>

          </form>

          <div class="success-message" id="success-message">
            <h3 class="success-title">お問い合わせ完了</h3>
            <p class="success-text">
              お問い合わせありがとうございます。<br>
              内容を確認の上、担当者よりご連絡させていただきます。<br>
              今しばらくお待ちください。
            </p>
            <a href="/" class="btn-back">TOPページへ戻る</a>
          </div>

        </div>

      </div>
    `;

    // --- JavaScriptによる送信処理（AJAX） ---
    const form = this.shadowRoot.getElementById("my-form");
    const button = this.shadowRoot.getElementById("my-form-button");
    const status = this.shadowRoot.getElementById("my-form-status");
    const successMsg = this.shadowRoot.getElementById("success-message");

    // フォーム送信時のイベント
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // 通常の画面遷移を止める
      
      // ボタンを「送信中...」にして無効化
      const originalBtnText = button.textContent;
      button.textContent = "送信中...";
      button.disabled = true;
      button.style.opacity = "0.7";
      status.style.display = "none";

      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // 成功時：フォームを消して完了メッセージを表示
          form.style.display = "none";
          successMsg.style.display = "block";
          // 画面トップへスクロール
          this.shadowRoot.querySelector('.l-container').scrollIntoView({ behavior: 'smooth' });
        } else {
          // サーバーエラー時
          const result = await response.json();
          status.textContent = "送信に失敗しました。時間をおいて再度お試しください。";
          status.style.display = "block";
          
          // ボタンを元に戻す
          button.textContent = originalBtnText;
          button.disabled = false;
          button.style.opacity = "1";
        }
      } catch (error) {
        // ネットワークエラー時
        status.textContent = "送信エラーが発生しました。ネットワーク状況をご確認ください。";
        status.style.display = "block";
        
        button.textContent = originalBtnText;
        button.disabled = false;
        button.style.opacity = "1";
      }
    });
  }
}

if (!customElements.get('contact-form-section')) {
  customElements.define('contact-form-section', ContactFormSection);
}