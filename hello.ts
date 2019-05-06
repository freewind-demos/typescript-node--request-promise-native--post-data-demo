import request from 'request-promise-native';

async function run() {
  const response = await request.post("https://postman-echo.com/post?param1=value1", {
    json: {
      "hello": "json-data1"
    }
  });
  console.log(typeof response)
  console.log(response)
}

run();

