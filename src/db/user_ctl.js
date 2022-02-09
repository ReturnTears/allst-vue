import conn from "./db.js"

// conn.connect((err) => {
//     if (err) return console.log('数据库连接失败')
//     console.log('数据库连接成功')
// })

async function getAllUsers(req, res) {
    let result
    await conn.getConnection(function(err, connection) {
        connection.query('select host, user from user', function(err, user) {
            console.log(user);
            result = {
                user: user,
                retcode: 200
            }
        })
        connection.release()
    })
    return {
        user: 'hello'
    }
}

export default getAllUsers
