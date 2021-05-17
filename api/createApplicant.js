const fetch = require("node-fetch");

const generateAuthKey = () => {
  const apiKey = process.env.VUE_APP_API_KEY;
  const secretKey = process.env.SECRET_KEY;
  const stringToConvert = apiKey + ":" + secretKey;
  return Buffer.from(stringToConvert).toString("base64");
};

async function postData(url = "", data = {}) {
  const authKey = generateAuthKey();

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      AuthKey: authKey
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json();
}

module.exports = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  try {
    postData("https://api-staging.orbaone.com/api/v1/applicants/create", {
      firstName,
      middleName,
      lastName
    }).then(data => {
      res.send(data);
    });
  } catch (e) {
    console.log(e);
  }
};
