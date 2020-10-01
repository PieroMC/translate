import mysql from 'promise-mysql';

import env from "./env";

const pool = mysql.createPool(env.database);

pool.getConnection()
    .then(connection => {
      pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;