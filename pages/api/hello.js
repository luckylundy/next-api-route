// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ message: "GETリクエスト" });
      break;
    case "POST":
      res.json({ message: "POSTリクエスト" });
      break;
    case "PATCH":
      res.json({ message: "PATCHリクエスト" });
      break;
    default:
      res.json({ message: "GET/POST/PATCHでもないリクエストです。" });
      break;
  }
}
