const dao = require('./ReservationDaoMongoose');
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



test('Create New Reservation Mongoose',async function(){
    let newreservation = {name:"NEW",email:"test@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};

    let created = await dao.create(newreservation);
    let found = await dao.read(created._id);

    // Assertions
    expect(created._id).toBeDefined();
    expect(found).not.toBeNull();
    expect(created.email).toEqual(found.email);
});

test('Delete a Reservation', async function(){
    let newreservation = {name:"NEW",email:"test@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};

    let created = await dao.create(newreservation);
    let foundBeforeDel = await dao.read(created._id);
    let deleted = await dao.del(created._id);
    let foundAfterDel = await dao.read(created._id);

    expect(foundBeforeDel).not.toBeNull();
    expect(foundAfterDel).toBeNull();
    expect(deleted.email).toEqual(created.email);

});

test('Read all reservations - Empty database', async function(){
    let lstReservations = await dao.readAll();

    expect(lstReservations.length).toBe(0);
});

test('Read all user', async function(){
    let r1 = {name:"NEW1",email:"tes1t@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};
    let r2 = {name:"NEW2",email:"test2@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};
    let r3 = {name:"NEW3",email:"test3@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};

    await dao.create(r1);
    await dao.create(r2);
    await dao.create(r3);

    let lstReservations = await dao.readAll();

    expect(lstReservations.length).toBe(3);
    expect(lstReservations[0].name).toEqual(r1.name);
});

test('Update a Reservation', async function(){
    let newreservation = {name:"NEW",email:"tes1t@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};
    let created = await dao.create(newreservation);

    let updatedReservation = {name:"hehe",email:"tes1t@email.com",date:"2024-07-01",time:"18:00",dogs:2,puppy:false,senior:true,restype:"walker",doginfo:"none"};
    let updated = await dao.update({_id: created._id, ...updatedReservation});
    let found = await dao.read(created._id);

    expect(updated._id).toEqual(created._id);
    expect(updated.name).toEqual(updatedReservation.name);
    expect(found.name).toEqual(updatedReservation.name);



});


