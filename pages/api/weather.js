const weather = async (req, res) => {
  //東京の天気情報を取得
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ja`
  );
  const data = await response.json();
  res.status(200).json(data);
};

export default weather;
