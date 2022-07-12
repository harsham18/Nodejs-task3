const client = require('../config/connection');

exports.createUser = async (req, res) => {
    const {id,login,password,age,isdeleted} = req.body;
    
    let insertQuery = `insert into users(id, login, password, age, isdeleted)
                       values('${id}', '${login}', '${password}', ${age}, ${isdeleted})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{     
        return res.status(400).json({ msg: err.message});
         }
    })
    client.end;
}



exports.getAllUsers = async (req, res) => {
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
};

exports.getUser = async (req, res) => {
    if(isNaN(req.params.queryStr)){
        const queryStr = req.params.queryStr;
        const usp = new URLSearchParams(queryStr);
        const loginSub = usp.get('loginSubstring');
        const lim = usp.get('limit');
    
        client.query(` SELECT * FROM USERS WHERE login ~ '${loginSub}' LIMIT ${lim};`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    }
    else{
        client.query(`Select * from users where id='${req.params.queryStr}'`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    }
    
}

exports.updateUserById = async (req, res) => {
    const {id,login,password,age,isdeleted} = req.body;
    let updateQuery = `update users
                       set login = '${login}',
                       password = '${password}',
                        age = ${age},
                        isdeleted = ${isdeleted}
                       where id = '${id}'`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}

exports.deleteUserById = async (req, res) =>  {
 
    let insertQuery = `delete from users where id='${req.params.id}'`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}