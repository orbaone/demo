import { OrbaOne } from "@orbaone/api";

module.exports = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;
  const { firstName, middleName, lastName } = req.body;

  const client = new OrbaOne({
    apiKey,
    apiSecret: secretKey
  });
  try {
    const result = await client.createApplicant({
      firstName,
      middleName,
      lastName
    });
    res.send(200).json(result);
  } catch (error) {
    res.send(500).json({
      message: `Applicant could not be created, try checking out https://docs.orbaone.com/rest-api/endpoints`
    });
  }
};
