import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 | HLO</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="theme-color" content="#08080f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          background: "#08080f",
          color: "#f0ece4",
          fontFamily:
            '"Noto Sans JP", "Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, system-ui, sans-serif',
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "8rem",
              fontWeight: 900,
              lineHeight: 1,
              color: "#c1121f",
              margin: 0,
              letterSpacing: "-0.05em",
            }}
          >
            404
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            <span
              style={{ display: "block", width: "3rem", height: "4px", background: "#c1121f" }}
            />
            <span
              style={{ display: "block", width: "1rem", height: "4px", background: "#c9a84c" }}
            />
            <span
              style={{ display: "block", width: "0.5rem", height: "4px", background: "#ffffff33" }}
            />
          </div>
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#f0ece488",
              letterSpacing: "0.3em",
            }}
          >
            NOT FOUND
          </p>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.8125rem",
              color: "#f0ece466",
            }}
          >
            お探しのページは存在しないか、検閲により削除されました。
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              border: "2px solid #c1121f",
              color: "#c1121f",
              fontWeight: 700,
              fontSize: "0.8125rem",
              letterSpacing: "0.2em",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            トップに戻る
          </Link>
        </div>
      </body>
    </html>
  );
}
