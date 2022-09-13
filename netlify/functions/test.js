exports.handler = async (event, context) => {
  const GRANT_TYPE = "authorization_code";
  const CODE = "";
  const REDIRECT_URI = "http://localhost:3000/home";

  const URL = `https://accounts.spotify.com/authorize?
  grant_type=${GRANT_TYPE}&
  code=${CODE}&
  redirect_uri=${REDIRECT_URI}`;

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Bufffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
  });
};
