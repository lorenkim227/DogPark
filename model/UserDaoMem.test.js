const dao = require('./UserDaoMem');

test('ReadAll Mem has the predefined users', () => {
    let users = dao.readAll();
    expect(users.length).toBe(3);
});

test('Create method', () => {
    let newuser = {name: "John Doe", login: "test@t.com", password: "123456", permission: 1};

    let created = dao.create(newuser);
    let found = dao.read(created._id)

    expect(created._id).toBeDefined();
    expect(created.login).toBe(found.login);
});