const mariadb = require('mariadb');

 
class Database {
    constructor() {
        this.pool = mariadb.createPool({
            host: '127.0.0.1', 
            port:3306,
            user: 'root', 
            password: 'root',
            database: 'nodeStudy',
            connectionLimit: 5
        });
       
    }
    query(sql, args){
     
        return new Promise(async (resolve, reject) => {
            console.log('test');
            console.log('this.pool', this.pool.getConnection);
            //console.log(args);
            try {
              //console.log(args);
              console.log(sql);
                 pool.getConnection((err,connection)=>{
                  if(err){
                    console.log(err);
                    return reject(err);
                  }
                  console.log("test2");
                  //console.log(args);
                 connection.query(sql,(err,rows) => {
                    
                    if(err) return reject(err);
                    connection.release();
                    return resolve(rows);
                  });
                });
            } catch (err) {
                console.log('err');
            }
        });
      }
      async query2(sql,args){
        let conn, rows;
        try{
            conn = await this.pool.getConnection();
            // console.log("sql",sql);
            // console.log(args);
            rows = await conn.query(sql,args);
            conn.release();
        }
        catch(err){
            throw err;
        }
        finally{
            if (conn) conn.end();
            return rows;
        }
      }
      executeQuery(connection, sql, args) {
        return new Promise((resolve, reject) => {
          connection.query(sql, args, (queryErr, rows) => {
            if (queryErr) {
              return reject(queryErr);
            }
            return resolve(rows);
          });
        });
      }
    
      queryAll(mutltiQueries) {
        return new Promise((resolve, reject) => {
          this.pool.getConnection((err, connection) => {
            if (err) {
              l.error('getConnection err', err);
              throw err;
            }
    
            connection.beginTransaction(tranErr => {
              if (tranErr) {
                // l.log('transaction', tranErr);
                throw err;
              }
              let hasError = false;
              const queryResults = [];
              try {
                mutltiQueries.some(async queryInfo => {
                  try {
                    const results = await this.executeQuery(
                      connection,
                      queryInfo.sql,
                      queryInfo.args,
                    );
                    if (results) {
                      queryResults.push(results);
                    }
                  } catch (error) {
                    hasError = true;
                    return hasError;
                  }
                });
              } catch (error) {
                console.log(error);
                hasError = true;
              }
              // 에러
              if (hasError) {
                connection.rollback(() => {
                  connection.release();
                  return reject();
                });
              } else {
                connection.commit(commitErr => {
                  if (commitErr) {
                    return connection.rollback(() => {
                      connection.release();
                      return reject(commitErr);
                    });
                  }
                  connection.release();
                  resolve(queryResults);
                });
              }
            });
          });
        });
      }
    
      getConnection() {
        return new Promise((resolve, reject) => {
          this.pool.getConnection((err, connection) => {
            if (err) {
              reject(err);
            }
            resolve(connection);
          });
        });
      }
    
      beginTransaction(connection) {
        return new Promise((resolve, reject) => {
          connection.beginTransaction(err => {
            if (err) {
              reject(err);
            }
            resolve(true);
          });
        });
      }
    
      queryPromise(connection, sql, args) {
        return new Promise((resolve, reject) => {
          connection.query(sql, args, (queryErr, rows) => {
            if (queryErr) {
              return reject(queryErr);
              // return connection.rollback(() => {
              //   connection.release();
    
              // });
            }
            resolve(rows);
          });
        });
      }
    
      commit(connection) {
        return new Promise((resolve, reject) => {
          connection.commit(commitErr => {
            if (commitErr) {
              return connection.rollback(() => {
                connection.release();
                return reject(commitErr);
              });
            }
            resolve(true);
          });
        });
      }
    
      rollback(connection) {
        return new Promise((resolve, reject) => {
          connection.rollback(() => {
            connection.release();
            resolve(true);
          });
        });
      }
    
      close() {
        return new Promise((resolve, reject) => {
          this.connection.end(err => {
            if (err) {
              return reject(err);
            }
            resolve();
          });
        });
      }
    
      execute(sql, args) {
        let results;
        return new Promise((resolve, reject) => {
          this.query(sql, args)
            .then(rows => {
              results = rows;
              resolve(results);
            })
            .catch(err => {
              l.info(sql);
              // l.info(args);
              // l.error(err);
              reject(err);
            });
        });
      }
    
      /**
       * 다중 쿼리에대한 트랜잭션처리를 위한 함수
       * @param  {} mutltiQueries {sql, args} 형태의 배열
       */
      executeMulti(mutltiQueries) {
        return new Promise((resolve, reject) => {
          this.queryAll(mutltiQueries)
            .then(results => {
              resolve(results);
            })
            .catch(error => {
              reject(error);
            });
        });
    }
}
module.exports = new Database();

    

 