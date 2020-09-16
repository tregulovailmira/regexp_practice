'use strict';
// 1) Password от 8 до 12 символов без пробелов и переносов
const password = 'Fkrowpowm521%^&';
const password2 = 'Fkro3';
const regExpPassword = /[^\s\n]{8,12}/g;
console.log('password: ', regExpPassword.test(password));
console.log('password2: ', regExpPassword.test(password2));

// 2) Username от 6 до 20 символов, первая не цифра

const regExpUsername = /\b[a-zA-Z]\w{6,20}\b/g;
const userName = 'Ilmira1995';
const userName2 = '1995Ilmira';
console.log('userName: ', regExpPassword.test(userName));
console.log('userName2: ', regExpPassword.test(userName2));

// inet 150.180.1.150 netmask 255.255.255.0 broadcast 192.180.1.255
const regExpInetSettings = /[a-zA-Z]+\s(\d{1,3})(\.\d{1,3}){3}/g;
const internetSettingsString = 'inet 150.180.1.150 netmask 255.255.255.0 broadcast 192.180.1.255';
console.log('internet Settings: ', regExpInetSettings.test(internetSettingsString));