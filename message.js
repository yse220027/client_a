require("dotenv").config();
module.exports = {
    create:function (name,number) {
        const message = `${name}の学籍番号は${number}です。` 
        return message;
    }
}
