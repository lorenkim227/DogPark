const dao = require('./UserDaoMem');

test("Always green test", function(){
    expect(1).toBe(1);
});

test("ReadAll Mem has the predefined users",function(){
    let lstUsers = dao.readAll();

    expect(lstUsers.length).toBe(3);
});

test("Create method",function(){
    // Setup - Configuration - Fixture
    let newuser = {name:"Jhonny Test",login:"test@t.com",password:'123456', permission: 1};

    let created = dao.create(newuser); // Method under test
    let found = dao.read(created._id);

    expect(created._id).toBeDefined(); //Assertions
    expect(created.login).toBe(found.login);

    dao.del(created._id); // clean up

});