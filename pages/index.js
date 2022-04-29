import { useState, useEffect } from "react";

export default function Home() {
  //初回リロード時取得したユーザーをsetUsers関数にセット;
  // useEffect(() => {
  //   const postData = async () => {
  //     await fetch("/api/users", {
  //       method: "POST",
  //       //送信するデータの形式をjsonにする
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       //送信するデータを設定
  //       body: JSON.stringify({ name: "john" }),
  //     });
  //   };
  //   postData();
  // }, []);

  // return (
  //   <div>
  //     <h1>ユーザー</h1>
  //   </div>
  // );

  //openweatherから取得したデータをセットするためのステートを定義
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      // const response = await fetch("/api/weather");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&lang=ja`
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    //ステートweatherに入っているwetherというプロパティがあれば<p>タグを返す
    <div>{weather.weather && <p>東京の天気：{weather.weather[0].main}</p>}</div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/users");
//   const data = await response.json();

//   return { props: { data } };
// }

// export default function Home({ data }) {
//   return (
//     <div>
//       <ul>
//         {data.users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
