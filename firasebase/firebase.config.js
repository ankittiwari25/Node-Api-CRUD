const admin = require("firebase-admin");
class PushNotification {
  static async sendNotification(req, res) {
    const serviceAccount = require("../firasebase/my-cpe-5bd88-firebase-adminsdk-egrvu-9eeffbc7d2.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

      const registrationToken = req.body.token;
    const message = {
      token: registrationToken,
      notification: {
        title: "Portugal vs. Denmark",
        body: "great match!",
      },
      data: {
        Nick: "Mario",
        Room: "PortugalVSDenmark",
      },
    };
    admin
      .messaging()
      .send(message)
      .then((response) => {
        res.json({
          status: true,
            message: message,
          "data":response
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }
}
module.exports = PushNotification;
