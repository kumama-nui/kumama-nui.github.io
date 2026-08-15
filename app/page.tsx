const highlights = [
  ["CVE-2026-8945", "Mozilla Firefox"],
  ["2 reports", "Nmap Project"],
  ["CRTP", "Certified Red Team Professional"],
];

const work = [
  "Webアプリケーションの手動セキュリティ診断",
  "ペネトレーションテスト",
  "攻撃対象・攻撃経路の調査、検証",
  "証跡・再現手順の整理、報告書作成・レビュー",
  "Bug Bounty / 検証記事 / 進行管理",
];

const credentials = [
  "Certified Red Team Professional (CRTP)",
  "情報処理安全確保支援士試験 合格",
  "基本情報技術者試験 合格",
  "SecHack365 2025 コンテンツゼミ 修了",
];

export default function Home() {
  return (
    <main className="portfolio">
      <a className="skip-link" href="#profile">
        本文へ移動
      </a>

      <header className="topbar">
        <a className="brand" href="#profile" aria-label="プロフィールへ">
          <span aria-hidden="true">K</span>
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

      <section id="profile" className="profile-card" aria-labelledby="profile-title">
        <div className="intro-pane">
          <div className="role-line">
            <span aria-hidden="true" />
            Security Engineer / Vulnerability Researcher
          </div>

          <div className="intro-copy">
            <p className="eyebrow">くままぬい — KUMAMA_NUI</p>
            <h1 id="profile-title">
              くままぬい
              <small>/ kumama_nui</small>
            </h1>
            <p className="summary">
              Webアプリケーション診断・ペネトレーションテストの実務に従事しながら、
              脆弱性・攻撃技術の調査と検証を行っています。
            </p>
          </div>

          <div className="intro-footer">
            <p>
              <span>EDUCATION</span>
              サイバー大学 4年
            </p>
            <a href="mailto:user874there@gmail.com">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="portrait">
          <img
            src="/avatar.png"
            alt="狐面と青い浴衣を身につけた、くままぬいのアバター"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <figcaption>
            <span>ONLINE IDENTITY</span>
            @kumama_nui
          </figcaption>
        </figure>

        <div className="info-strip">
          <section className="info-block highlights" aria-labelledby="highlights-title">
            <p className="block-label" id="highlights-title">
              01 / HIGHLIGHTS
            </p>
            <div className="highlight-list">
              {highlights.map(([title, detail]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="info-block" aria-labelledby="work-title">
            <p className="block-label" id="work-title">
              02 / EXPERIENCE
            </p>
            <ul className="plain-list">
              {work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="info-block" aria-labelledby="credentials-title">
            <p className="block-label" id="credentials-title">
              03 / CERTIFICATIONS &amp; ACTIVITIES
            </p>
            <ul className="plain-list credential-list">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="community-note">CTF参加 / VR「セキュリティ集会」運営</p>
          </section>
        </div>
      </section>
    </main>
  );
}
