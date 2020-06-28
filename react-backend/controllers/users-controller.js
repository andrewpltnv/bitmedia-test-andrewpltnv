const knex = require('./../db');

exports.usersList = async (req, res) => {
  knex('users')
    .select('*')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      console.log(`There was an error retrieving users: ${err}`)
    });
};

exports.usersStatisticAll = async (req, res) => {
  knex('users_statistic')
    .select('*') // select all records
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      console.log(`There was an error retrieving users: ${err}`)
    });
};

// Create new user
exports.usersCreate = async (req, res) => {
  // Add new user to database
  knex('users')
    .insert({ // insert new record, a book
      'id': req.id,
      'first_name': req.first_name,
      'last_name': req.last_name,
      'email': req.email,
      'gender': req.gender,
      'ip_address': req.ip_address
    })
    .then(() => {
      // eslint-disable-next-line no-useless-escape
      res.json({ message: `User \'${req.body.first_name}\' ${req.body.last_name} created.` })
    })
    .catch(err => {
      // Send a error message in response
      console.log(`There was an error creating ${req.email} user: ${err}`)
    })
};

exports.usersStatisticCreate = async (req, res) => {
  // Add new user to database
  knex('users_statistic')
    .insert({ // insert new record, a book
      'user_id': req.user_id,
      'date': req.date,
      'page_views': req.page_views,
      'clicks': req.clicks,
    })
    .then(() => {
      // eslint-disable-next-line no-useless-escape
      res.json({ message: `User_stat \'${req.user_id}\'created.` })
    })
    .catch(err => {
      // Send a error message in response
      console.log(`There was an error creating ${req.user_id} user: ${err}`)
    })
};

exports.usersReset = async (req, res) => {
  // Remove all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      console.log('Users list cleared.')
    })
    .catch(err => {
      console.log(`There was an error resetting user list: ${err}.`)
    })
};
