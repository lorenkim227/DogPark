const dao = require('./UserDaoMongoose');
const dbcon = require('./DbConnection');

beforeAll(async function() {
    await dbcon.connect("test");
    await dao.deleteAll("test");
});
afterAll(async function() {
    await dbcon.disconnect();
});
afterEach(async function() {
    await dao.deleteAll("test");
});

test('Create new user mongoose', async function() {
    let newuser = {name:"NEW", login:'n@n.com', password:"123456", permission:1};
    let created = await dao.create(newuser);
    let found = await dao.read(created._id);

    expect(created._id).toBeDefined();
    expect(found).not.toBeNull();
    expect(created.login).toBe(newuser.login);
});