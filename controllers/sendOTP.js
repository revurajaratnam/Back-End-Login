const { traspotor } = require("./utils/Mailer");

const SendOtp = async (req, res) => {
  try {
    const { email } = req.params;

    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiry = Date.now() + 10 * 60 * 1000;

    await traspotor.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "One Time Password",
      text: `Your OTP is: ${otp}. Valid for 10 minutes`,
    });

    global.otpStore = global.otpStore || {};
    global.otpStore[email] = { otp, expiry };

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send OTP",
      error: error.message,
    });
  }
};

module.exports = { SendOtp };