require('dotenv').config()
const cowsay = require("cowsay");
console.log(cowsay.say({
  text : `${process.env.NAME} from ${process.env.CAMPUS}`,
  e : "oO",
  T : "U "
}));

