module.exports = (req, res) => {
  const {
    query: { name }
  } = req;
  //   const apiKey = "7f28e4ecf15449888649f28a7a7ab8cb";
  //   const apiSecret = "d124c5b6d1144fdea09d5315e8f49d2d";

  fetch("https://api.orbaone.com/applicants/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName
    })
  });
  res.send(`Hello ${name}!`);
};
