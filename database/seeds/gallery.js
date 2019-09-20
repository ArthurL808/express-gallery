
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {author: 'johnB',link: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-234216-John-Bonham_Zuma-20060222_gaf_g49_170.jpg?resize=1240,1240&w=300',description: 'John Bonham from Led Zeppelin',user_id:'1'},
        {author: 'keithM',link: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-234094-GettyImages-3204584.jpg?resize=1240,1240&w=300',description:'Keith Moon from The Who',user_id:'2'},
        {author: 'gingerB',link:'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-234009-GettyImages-85000846.jpg?resize=1240,1240&w=300',description:'Ginger Baker from Cream',user_id:'3'}
      ]);
    });
};
