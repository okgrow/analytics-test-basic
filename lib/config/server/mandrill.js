var username = process.env.MANDRILL_USERNAME;
var password = process.env.MANDRILL_APIKEY;
if (username) {
  username = username.replace('@', '%40');
  process.env.MAIL_URL = "smtp://" + username + ":" + password + "@smtp.mandrillapp.com:587/";
}
