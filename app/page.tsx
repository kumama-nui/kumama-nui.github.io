const highlights = [
  ["CVE-2026-8945", "Mozilla Firefox"],
  ["Bug Bounty / OSS", "報告経験あり"],
  ["CRTP", "Certified Red Team Professional"],
];

const experience = [
  "Webアプリケーションの手動セキュリティ診断",
  "ペネトレーションテスト",
  "攻撃対象・攻撃経路の調査、検証",
  "証跡・再現手順の整理",
  "報告書作成、レビュー対応、進行管理",
  "検証記事の作成",
];

const activities = [
  "Burp Suite Certified Practitioner (BSCP) 合格",
  "Certified Red Team Professional (CRTP)",
  "情報処理安全確保支援士試験 合格",
  "基本情報技術者試験 合格",
  "SecHack365 2025 コンテンツゼミ 修了",
  "Webセキュリティを中心にCTFへ参加",
  "VR空間にて「セキュリティ集会」運営",
];

export default function Home() {
  return (
    <main className="portfolio">
      <a className="skip-link" href="#profile">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="brand" href="#profile">
          kumama_nui
        </a>
        <nav aria-label="外部リンク">
          <a href="https://x.com/kumama_nui" target="_blank" rel="noreferrer">
            X
          </a>
          <a
            href="https://www.linkedin.com/in/%E7%BF%94%E5%A4%AA-%E6%9D%BE%E7%94%B0%E3%80%80-18206a325/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:user874there@gmail.com">Email</a>
        </nav>
      </header>

      <section id="profile" className="introduction" aria-labelledby="profile-title">
        <div className="identity">
          <div>
            <p className="role">Security Engineer / Vulnerability Researcher</p>
            <h1 id="profile-title">
              くままぬい
              <small>kumama_nui</small>
            </h1>
          </div>
          <img
            className="avatar"
            src="/avatar.png"
            alt="狐面と青い浴衣を身につけた、くままぬいのアバター"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
        </div>

        <p className="summary">
          Webアプリケーション診断・ペネトレーションテストの実務に従事しながら、
          脆弱性・攻撃技術の調査と検証を行っています。
        </p>
        <p className="education">サイバー大学 4年</p>
      </section>

      <div className="details">
        <section aria-labelledby="highlights-title">
          <h2 id="highlights-title">主な実績</h2>
          <dl className="highlight-list">
            {highlights.map(([title, detail]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="experience-title">
          <h2 id="experience-title">実務経験</h2>
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="activities-title">
          <h2 id="activities-title">資格・活動</h2>
          <ul>
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
