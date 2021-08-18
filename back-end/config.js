module.exports = {
  PORT: process.env.PORT || 9000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://admin:fxR0yKLuumDu3pu8@cluster0.ph4g3.mongodb.net/fbdb?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || "itssecret",
  JWT_EXP: process.env.JWT_EXPIRE || '10h',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "19520923@gm.uit.edu.vn",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "fxR0yKLuumDu3pu8",
}
