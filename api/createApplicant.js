const fetch = require("node-fetch");

async function postData(url = "", data = {}) {
  const authKey = process.env.AUTH_KEY;

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

  postData("https://api-staging.orbaone.com/api/v1/applicants/create", {
    firstName,
    middleName,
    lastName
  }).then(data => {
    res.send(data);
  });
};
