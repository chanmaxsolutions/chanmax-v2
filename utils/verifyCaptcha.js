export default function verifyCaptcha(captcha, ip) {
    const secret = process.env.RECAPCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha}&remoteip=${ip}`;
    return fetch(verificationUrl)
        .then((response) => response.json())
        .then((response) => response.success)
        .catch((error) => {
            console.log(error);
            return false;
        });
}
