import { Link } from 'react-router-dom'
import styles from '../styles/legal.module.css'

export function SupportPage() {
  return (
    <div className={styles.legalPage}>
      <h1>サポート</h1>
      <p>遠距離恋愛をしているカップルのためのレターアプリ「Dear」をご利用いただきありがとうございます。</p>

      <div className={styles.contactBox}>
        <h3>お問い合わせ</h3>
        <p>ご質問、ご要望、不具合のご報告などは、以下のメールアドレスまでお気軽にご連絡ください。</p>
        <a href="mailto:support@knotwith.com" className={styles.emailLink}>support@knotwith.com</a>
        <p>通常2〜3営業日以内にご返信いたします。</p>
      </div>

      <h2>よくあるご質問</h2>

      <div className={styles.faqItem}>
        <h4>Dearとはどんなアプリですか？</h4>
        <p>Dearは、遠距離恋愛をしているカップル専用のアプリです。会えない時間に、気持ちを言葉として預けることができます。すぐに返信する必要はなく、時間差でお互いの想いを伝え合うことができます。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>すぐに返信しなくても大丈夫ですか？</h4>
        <p>はい、大丈夫です。Dearは時間差を前提に設計されています。パートナーからのレターは、あなたの好きなタイミングで読むことができます。急いで返信する必要はありません。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>既読機能はありますか？</h4>
        <p>いいえ、既読機能はありません。Dearでは、相手がレターを読んだかどうかを確認することはできません。これは、お互いにプレッシャーを感じることなく、自分のペースでレターを楽しんでいただくためです。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>お題は毎日答えないといけませんか？</h4>
        <p>いいえ、お題は完全に任意です。お題を使わずに自由にレターを書くこともできます。また、お題を使う場合も、自分の好きなタイミングで書くことができます。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>レターを公開するとどうなりますか？</h4>
        <p>公開したレターは、同じく遠距離恋愛をしている他のカップルに表示されることがあります。公開されるのはレターの内容のみで、あなたやパートナーの個人情報は一切表示されません。他のユーザーからは「応援」のみを受け取ることができます。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>パートナー以外の人と繋がれますか？</h4>
        <p>いいえ、Dearは1対1のカップル専用アプリです。パートナー以外の人とメッセージをやり取りすることはできません。公開レターに対する「応援」のみが、他のユーザーとの唯一の繋がりです。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>料金はいくらですか？</h4>
        <p>Dearは月額300円（年額3,000円）でご利用いただけます。無料プランでは週1通までレターを送信できます。プレミアムプランでは週7通まで送信可能です。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>カップルの片方が課金すれば両方使えますか？</h4>
        <p>はい、カップルのどちらか一方が課金すれば、両方とも有料機能をご利用いただけます。どちらが支払っているかは相手に表示されません。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>通知が来ないのですが？</h4>
        <p>iOSの「設定」→「通知」→「Dear」から通知が許可されているか確認してください。また、アプリ内の「通知設定」で各種通知が有効になっているかもご確認ください。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>パートナーとの接続を解除したい場合は？</h4>
        <p>マイページの「お問い合わせ」からご連絡ください。カップル登録の解除は慎重に行う必要があるため、サポートチームが対応いたします。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>アカウントを削除したい場合は？</h4>
        <p>マイページの「お問い合わせ」からアカウント削除の依頼をお送りください。削除されたデータは復元できませんので、ご注意ください。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>解約方法を教えてください</h4>
        <p>iPhoneの「設定」→「Apple ID」→「サブスクリプション」→「Dear」から解約できます。</p>
      </div>

      <div className={styles.faqItem}>
        <h4>返金はできますか？</h4>
        <p>App Store経由でのお支払いとなるため、返金についてはAppleのポリシーに従います。Appleサポートにお問い合わせください。</p>
      </div>

      <h2>関連リンク</h2>
      <ul>
        <li><Link to="/terms">利用規約</Link></li>
        <li><Link to="/privacy">プライバシーポリシー</Link></li>
      </ul>

      <h2>運営情報</h2>
      <p><strong>運営：</strong>Knot</p>
      <p>いつもDearをご利用いただきありがとうございます。</p>
    </div>
  )
}
