
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {author: 'aliko dangote',link: 'https://specials-images.forbesimg.com/imageserve/5c33a1554bbe6f7020fb2fd2/416x416.jpg?background=000000&cropX1=363&cropX2=3282&cropY1=11&cropY2=2930',description: 'Nigerian, Sugar, Cement, Flour',user_id:'1'},
        {author: 'mike adenuga',link: 'https://buzznigeria.com/wp-content/uploads/2015/01/Mike-Adenuga-Jnr-Chairman-of-Globacom-640x548.jpg',description:'Nigerian, Oil, Telecoms',user_id:'1'},
        {author: 'robert smith',link:'https://specials-images.forbesimg.com/imageserve/5ba5310331358e5690cdb03e/416x416.jpg?background=000000&cropX1=737&cropX2=3137&cropY1=268&cropY2=2667',description:'American, Private Equity',user_id:'2'}
      ]);
    });
};
