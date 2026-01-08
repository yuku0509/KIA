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
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          background-color: #fff;
          color: #333;
        }

        .l-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 80px;
        }

        .page-title {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: 0.05em;
        }

        /* 各章のブロック */
        .policy-item {
          margin-bottom: 50px;
        }

        /* 章見出し (1. 2. 3...) */
        .policy-head {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
          padding-left: 15px;
          border-left: 5px solid #FF6600; /* アクセントカラー */
          line-height: 1.5;
        }

        /* 本文 */
        .policy-text {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 15px;
          text-align: justify;
        }

        /* 小見出し (1) (2) ... */
        .policy-subhead {
          font-size: 15px;
          font-weight: bold;
          margin-top: 25px;
          margin-bottom: 10px;
          padding-left: 1em;
        }

        /* 箇条書きリスト */
        .policy-list {
          list-style: none;
          padding-left: 1.5em;
          margin-bottom: 15px;
        }
        .policy-list li {
          font-size: 14px;
          line-height: 1.8;
          position: relative;
          margin-bottom: 5px;
        }
        .policy-list li::before {
          content: "・";
          position: absolute;
          left: -1em;
          color: #FF6600;
        }

        /* インデントが必要なブロック（2-1など） */
        .policy-indent {
          padding-left: 1.5em;
          margin-bottom: 15px;
        }

        /* お問い合わせ窓口のスタイル */
        .contact-info {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 4px;
          font-size: 14px;
          line-height: 2.0;
        }
        .contact-row {
          display: flex;
          flex-wrap: wrap;
        }
        .contact-label {
          width: 120px;
          font-weight: bold;
        }
        .contact-value {
          flex: 1;
        }

        /* 末尾の日付・署名 */
        .policy-footer {
          margin-top: 60px;
          text-align: right;
          font-size: 14px;
          line-height: 1.8;
        }

        /* リンク */
        a {
          color: #FF6600;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .l-container {
            padding-top: 100px;
          }
          .page-title {
            font-size: 24px;
            margin-bottom: 40px;
          }
          .policy-indent, .policy-list {
            padding-left: 0.5em;
          }
          .contact-row {
            display: block;
          }
          .contact-label {
            width: 100%;
            margin-bottom: 0;
          }
          .contact-value {
            margin-bottom: 10px;
            display: block;
          }
        }
      </style>

      <div class="l-container">
        <h1 class="page-title">プライバシーポリシー</h1>

        <div class="policy-item">
          <p class="policy-text">
            株式会社KIA（以下、「当社」といいます。）は、当社が提供する、小売事業、営業支援業、キャリアコンサルタント業、コンサル・マネジメント業、イベント業、美容業およびそれらに関連するサービス（以下、総称して「本サービス」といいます。）における、ユーザーの個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下変更後のものを含め、「本ポリシー」といいます。）を定めます。 本サービスを利用するユーザーは本ポリシーに同意するものとします。
          </p>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">１．収集する利用者登録情報及び収集方法</h2>
          <p class="policy-text">
            「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーのスマートフォン及びPC等の端末においてユーザー又はユーザーの端末に関連して生成又は蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。 本サービスにおいて当社が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。
          </p>
          
          <h3 class="policy-subhead">(1) ユーザーからご提供いただく情報</h3>
          <p class="policy-text">ユーザーから本サービスのためにご提供いただく情報は以下のとおりです。</p>
          <ul class="policy-list">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>生年月日</li>
            <li>電話番号</li>
            <li>性別</li>
            <li>住所</li>
            <li>職業・勤務先情報</li>
            <li>職業・勤務先情報（キャリアコンサルタント等のサービス利用時）</li>
            <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
          </ul>

          <h3 class="policy-subhead">(2) ユーザーが本サービスを利用するにあたって、当社が収集する情報</h3>
          <p class="policy-text">当社は、サイトの分析と改善のために、本サービスへのアクセス状況やそのご利用方法に関する情報（以下の情報を含みます。）を収集することがあります。</p>
          <ul class="policy-list">
            <li>端末情報</li>
            <li>ログ情報</li>
            <li>Cookie及び匿名ID</li>
            <li>位置情報</li>
            <li>ユーザーの購入金額、履歴、サービス利用状況</li>
          </ul>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">２．利用目的</h2>
          <div class="policy-indent">
            <p class="policy-text"><strong>2-1</strong> 利用者情報は、2-2及び2-3の目的で利用するものとします。</p>
            
            <p class="policy-text"><strong>2-2</strong> 本サービスの提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。</p>
            <ul class="policy-list">
              <li>本サービスに関する登録の受付、本人確認、利用料金の計算等本サービスの提供、維持、保護及び改善のため</li>
              <li>当社がユーザーに提供する（今後新たに提供するものを含みます。）サービスの提供、管理、維持及び改善のため</li>
              <li>本サービスに関するご案内、お問い合わせ等への対応のため</li>
              <li>本サービスに関する当社の規約、ポリシー等（以下、「規約等」といいます。）に違反する行為に対する対応のため</li>
              <li>本サービスに関する規約等の変更などを通知するため</li>
              <li>上記の利用目的に付随する利用目的のため</li>
            </ul>

            <p class="policy-text"><strong>2-3</strong> 上記2-2以外の利用目的は以下のとおりです。</p>
            <div class="policy-indent">
              <p class="policy-text">(1) 本サービスに関連して、個人を識別できない形式に加工した統計データを作成するため</p>
              <ul class="policy-list">
                <li>端末情報、ログ情報、Cookie及び匿名ID、位置情報</li>
              </ul>
              
              <p class="policy-text">(2) 当社又は第三者の広告の配信または表示のため</p>
              <ul class="policy-list">
                <li>端末情報、ログ情報、Cookie及び匿名ID、位置情報</li>
              </ul>

              <p class="policy-text">(3) その他マーケティングに利用するため</p>
              <ul class="policy-list">
                <li>氏名、メールアドレス、生年月日、電話番号、性別</li>
                <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">３．通知・公表又は同意取得の方法、利用中止要請の方法</h2>
          <p class="policy-text">
            ユーザーは、本サービスの所定の手続きを行うことにより、利用者情報の全部又は一部についてその利用の停止を求めることができ、この場合、当社は速やかに、当社の定めるところに従い、その利用を停止します。 なお利用者情報の項目によっては、その収集又は利用が本サービスの前提となるため、当社指定の方法により本サービスを退会した場合に限り、当社はその収集を停止します。
          </p>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">４．第三者提供</h2>
          <p class="policy-text">
            当社は、利用者情報のうち、個人情報については、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめユーザーの同意を得ないで第三者に提供しません。但し、次に掲げる場合はこの限りではありません。
          </p>
          <ul class="policy-list">
            <li>(1) 当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合</li>
            <li>(2) 合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
            <li>(3) 国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得る事によって当該事務の遂行に支障を及ぼすおそれがある場合</li>
            <li>(4) その他、個人情報保護法その他の法令で認められる場合</li>
          </ul>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">５．個人情報の開示</h2>
          <div class="policy-indent">
            <p class="policy-text"><strong>5-1</strong> 当社は、ユーザーから個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅延無く開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。</p>
            <p class="policy-text"><strong>5-2</strong> なお、個人情報の開示につきましては、手数料（1件あたり1,000円（税別））を頂戴しておりますので、あらかじめご了承ください。</p>
          </div>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">６．個人情報の訂正及び利用停止等</h2>
          <div class="policy-indent">
            <p class="policy-text"><strong>6-1</strong> 当社は、ユーザーから、(i)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(ii)あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅延無く必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、合理的な理由について訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。</p>
            <p class="policy-text"><strong>6-2</strong> 当社はユーザーから、ユーザーの個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。</p>
            <p class="policy-text"><strong>6-3</strong> 個人情報保護法その他の法令により、当社が訂正等又は利用停止等の義務を負わない場合は、上記6-2の規定は適用されません。</p>
          </div>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">７．お問い合わせ窓口</h2>
          <p class="policy-text">ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。</p>
          
          <div class="contact-info">
            <div class="contact-row">
              <span class="contact-label">会社名</span>
              <span class="contact-value">株式会社KIA</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">住所</span>
              <span class="contact-value">〒104-0061 東京都中央区銀座1-12-4 N&EBLD. 7階</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">電話番号</span>
              <span class="contact-value">090-6074-4482</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">メールアドレス</span>
              <span class="contact-value">tngcj4tm@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="policy-item">
          <h2 class="policy-head">８．プライバシーポリシーの変更手続</h2>
          <div class="policy-indent">
            <p class="policy-text"><strong>8-1</strong> 当社は、利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更する事があります。</p>
            <p class="policy-text"><strong>8-2</strong> 変更後の本ポリシーは、当社のホームページ（<a href="https://www.kick-in-answer.com/" target="_blank">https://www.kick-in-answer.com/</a>）に掲載いたします。</p>
            <p class="policy-text"><strong>8-3</strong> 重要な変更にあたってはお客様に対してわかりやすい方法にて改定内容を告知する場合がありますが、変更後に本サービスを使用された場合は、変更後の本ポリシーに同意いただいたものとみなします。</p>
          </div>
        </div>

        <div class="policy-footer">
          <p>制定日：202●年●月●日</p>
          <p>株式会社KIA 代表取締役 谷口 純也</p>
        </div>

      </div>
    `;
  }
}

if (!customElements.get('privacy-policy-section')) {
  customElements.define('privacy-policy-section', PrivacyPolicySection);
}