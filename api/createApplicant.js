const fetch = require("node-fetch");

const generateAuthKey = () => {
  const apiKey = process.env.VUE_APP_API_KEY;
  const secretKey = process.env.SECRET_KEY;
  const stringToConvert = apiKey + ":" + secretKey;
  return Buffer.from(stringToConvert).toString("base64");
};

async function postData(url = "", data = {}) {
  const authKey = generateAuthKey();

  console.log(authKey);
  console.log(data);

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

  console.log(response);

  return response.json();
}

module.exports = async (req, res) => {
  const { firstName, middleName, lastName, accountType } = req.body;
  if (accountType === "Company") {
    try {
      postData("https://staging-api-vendor.orbaone.com/api/v1/companies", {
        name: "test",
        registrationNumber: "test",
        countryCode: "123"
      }).then(data => {
        res.send(data);
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      postData(
        "https://staging-api-vendor.orbaone.com/api/v1/applicants/create",
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName
        }
      ).then(data => {
        res.send(data);
      });
    } catch (e) {
      console.log(e);
    }
  }
};
