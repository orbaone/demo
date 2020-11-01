import fetch from "node-fetch";

module.exports = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;
  const { firstName, middleName, lastName } = req.body;
  try {
    const response = await fetch(
      "https://api.orbaone.com/api/v1/applicants/create",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ApiKey: apiKey,
          Secret: secretKey
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName
        })
      }
    );
    if (response.status === 200) {
      const json = await response.json();
      res.send(json);
    } else {
      res.status(response.status).send(await response.json());
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
