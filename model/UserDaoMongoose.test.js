const dao = require('./UserDaoMongoose');
const dbcon = require('./DbConnection');

beforeAll(async function(){ // Executed ONCE per file - before any test
    await dbcon.connect("test");
    await dao.deleteAll("test");
});
afterAll(async function(){ // Executed ONCE per file - after all tests
    await dbcon.disconnect();
});

afterEach(async function(){ //Execute after EACH test
    await dao.deleteAll("test");
});

test('Create New User Mongoose',async function(){
    let newuser = {name:"NEW",login:"n@n.com",password:"123456",permission: 1};

    let created = await dao.create(newuser);
    let found = await dao.read(created._id);

    // Assertions
    expect(created._id).toBeDefined();
    expect(found).not.toBeNull();
    expect(created.login).toEqual(found.login);
});

test('Delete a User', async function(){
    let newuser = {name:"NEW",login:"n@n.com",password:"123456",permission: 1};

    let created = await dao.create(newuser);
    let foundBeforeDel = await dao.read(created._id);
    let deleted = await dao.del(created._id);
    let foundAfterDel = await dao.read(created._id);

    expect(foundBeforeDel).not.toBeNull();
    expect(foundAfterDel).toBeNull();
    expect(deleted.login).toEqual(created.login);

});

test('Read all users - Empty database', async function(){
    let lstUsers = await dao.readAll();

    expect(lstUsers.length).toBe(0);
});

test('Read all user', async function(){
    let u1 = {name:"U1",login:"u1@n.com",password:"123456",permission: 1};
    let u2 = {name:"U2",login:"u2@n.com",password:"123456",permission: 1};
    let u3 = {name:"U3",login:"u3@n.com",password:"123456",permission: 1};

    await dao.create(u1);
    await dao.create(u2);
    await dao.create(u3);

    let lstUsers = await dao.readAll();

    expect(lstUsers.length).toBe(3);
    expect(lstUsers[0].name).toEqual(u1.name);
});

test('Meanless test 1', function(){
    // Meanless Test without running any method
    // DO NOT write tests like this
    expect(1).toBe(1); 
});

test('Meanless test 2', async function(){
    // Meanless Test without assertions (expect)
    // DO NOT write tests like this.
    let lstUsers = await dao.readAll();
});

test('Login DAO method (login exists)', async function(){
    let newuser = {name:"NEW",login:"n@n.com",password:"123456",permission: 1};

    let created = await dao.create(newuser);

    let logged = await dao.login(newuser.login);

    expect(logged._id).toEqual(created._id);
});

test('Login DAO method (login does not exists)', async function(){

    let logged = await dao.login("somelogin");

    expect(logged).toBeNull();
});