const dayjs = require('dayjs');
const today = dayjs();
const reservationDate = today.add(4, 'day');
console.log('Today:', today.format('YYYY-MM-DD'));
console.log('Reservation Date:', reservationDate.format('YYYY-MM-DD'));