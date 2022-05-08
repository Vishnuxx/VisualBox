const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();

  // You can remove services you don't use
  let account = new sdk.Account(client);
  let avatars = new sdk.Avatars(client);
  let database = new sdk.Database(client);
  let functions = new sdk.Functions(client);
  let health = new sdk.Health(client);
  let locale = new sdk.Locale(client);
  let storage = new sdk.Storage(client);
  let teams = new sdk.Teams(client);
  let users = new sdk.Users(client);

  let event = req.env.APPWRITE_FUNCTION_EVENT;
  let eventData = JSON.parse(req.env.APPWRITE_FUNCTION_EVENT_DATA);
  const USERID = req.env.APPWRITE_FUNCTION_USER_ID;
  const Projects_COLLECTION_ID = "62767e6a6c218cdb28a1";
  

  initClient();
  
  if (event === "account.create" || event === "users.create") {

    createUserProfile(
      database,
      Projects_COLLECTION_ID,
      USERID,
      eventData,
      function (response) {
        res.send("success");
      },
      function (error) {
        res.send("fail: " + error.message);
      }
    );
  } else {
    res.send("event failure");
  }

  function initClient() {
    if (
      !req.env["APPWRITE_FUNCTION_ENDPOINT"] ||
      !req.env["APPWRITE_FUNCTION_API_KEY"]
    ) {
      console.warn(
        "Environment variables are not set. Function cannot use Appwrite SDK."
      );
      res.send(
        "Environment variables are not set. Function cannot use Appwrite SDK."
      );
    } else {
      client
        .setEndpoint(req.env["APPWRITE_FUNCTION_ENDPOINT"])
        .setProject(req.env["APPWRITE_FUNCTION_PROJECT_ID"])
        .setKey(req.env["APPWRITE_FUNCTION_API_KEY"])
        .setSelfSigned(true);
    }
  }

};

function createUserProfile(
  database,
  collectionId,
  userId,
  eventData,
  onSuccess,
  onFailure
) {
  let promise = database.createDocument(
    collectionId,
    userId,
    {
      id: userId,
      name: eventData["$name"],
    },
    ["role:all", userId]
  );

  promise.then(
    function (response) {
      onSuccess(response);
    },
    function (error) {
      onFailure(error);
    }
  );
}
