const { Client } = require('pg');
const fs = require('fs');

var connection = new Client({
    host: "database-1.crkfhtofmzgc.ap-south-1.rds.amazonaws.com",
    user: "postgres",
    port: "5432",
    password: "12345678",
    database: "my_db",
})

const connectToDB = async () => {
    connection.connect(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected');
        }
    })
}

const readTextFile = async () => {
    let t1 = performance.now();
    const File = await fs.readFileSync('demoData.txt', 'utf-8');
    let arr = File.split("|");
    let modified = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `'${arr[i]}'`
        if (i % 10 === 0) {
            modified.push([...temp]);
            temp = [];
            temp.push(arr[i].replace('\x00\r\n', ' '));
        } else {
            temp.push(arr[i]);
        }
    }
    modified.shift();
    let data = [];
    for (let i = 0; i < modified.length; i++) {
        for (let p = 0; p < modified[i].length; p++) {
            if (modified[i][p] == '      ') {
                modified[i][p] = 'NULL'
                modified[i][p].toString()
            }
        }
        data.push(modified[i])
    }
    await connection.query('BEGIN')
    let QueryInsert = data.length > 0 ? 'INSERT INTO REQUIREMENT(container, module, mod_devdate, part_no, qty, tapdate, tap_qty, taptime, sup_cd, namc_id) VALUES ' : ' ';
    data.forEach((el) => {
        QueryInsert = QueryInsert + `(${el}),`
    })
    QueryInsert = QueryInsert.substring(0, QueryInsert.length - 1)
    const result = await connection.query(QueryInsert)
    fs.writeFile('new.txt', QueryInsert, (err) => {
        if (err) {
            console.log(err);
        }
    })
    await connection.query('COMMIT')
    let t2 = performance.now();
    console.log(`Time Taken: ${(t2 - t1) / 1000} seconds`);
    console.log(`Rows Affected:- ${result.rowCount}`);
    connection.end();
}

const test = async () => {
    try {
        await connectToDB();
        console.log(`Started`);
        await readTextFile();
    }
    catch (error) {
        console.log(error);
    }
}

test();
