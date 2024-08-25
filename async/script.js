const param = {
  url: "http://api.openweathermap.org/data/2.5/",
  appid: "b348f775b55e41396a34ee57fe386727",
  cityId: 2643743,
};

async function getWeather() {
  let res = await fetch(
    `${param.url}weather?id=${param["cityId"]}&units=metric&APpID=${param.appid}`
  );
  console.log(res);
  const result = await res.json();
  console.log(result);
  console.log("trash");
  // .then((weather) => {
  //   return weather.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });
}
getWeather();

async function f1() {
  //   const requestHeaders = new Headers();
  //   requestHeaders.append("apikey", "03508a32621d549c");

  const res = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    {
      method: "GET",
      // headers: requestHeaders,
    }
  );
  if (!res.ok) {
    const message = "Error: " + res.status;
    throw new Error(message);
  }
  const result = await res.json();
  console.log(result);

  //   console.log(res);
}
f1();
