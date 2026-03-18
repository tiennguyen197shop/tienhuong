export default function handler(req, res) {
  res.status(200);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");

  res.end(`
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">

<title>Thiệp Cưới Nguyễn Tiến & Lê Hường</title>

<meta property="og:type" content="website">
<meta property="og:title" content="Thiệp Cưới Nguyễn Tiến & Lê Hường">
<meta property="og:description" content="Trân trọng kính mời bạn đến tham dự lễ cưới của chúng tôi">
<meta property="og:url" content="https://tienhuongforever.vercel.app/api/share">
<meta property="og:image" content="https://tienhuongforever.vercel.app/assets/images/anhcuoi/a1.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Thiệp Cưới Nguyễn Tiến & Lê Hường">
<meta name="twitter:description" content="Trân trọng kính mời bạn đến tham dự lễ cưới của chúng tôi">
<meta name="twitter:image" content="https://tienhuongforever.vercel.app/assets/images/anhcuoi/a1.jpg">

</head>
<body>
<script>
window.location.replace("/");
</script>
</body>
</html>
`);
}