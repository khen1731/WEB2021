let val;

const today = new Date();
let birtday = new Date('12=29-1988 10:20:00');
birtday = new Date('December 29 1988');
birtday = new Date('12/29/88');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birtday.setMonth(11);
birtday.setDate(29);
birtday.setFullYear(1988);
birtday.setHours(3);
birtday.setMinutes(30);
birtday.setMilliseconds(300);

console.log(birtday);
