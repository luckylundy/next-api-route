export default async function handler(req, res) {
  console.log(req.method);
  //jsonplaceholderから取得した情報をresponseに代入
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  //responseをjson形式にしてusersに代入
  const users = await response.json();
  res.status(200).json({ users });
}
