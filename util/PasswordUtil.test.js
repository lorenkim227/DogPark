const passutil = require('./PasswordUtil');

// npm test coverage

test('Test Hashing Passwords', function(){
    const str1 = "123456";
    const str3 = "12345";

    const hash1 = passutil.hashPassword(str1); //hashing str1
    const hash2 = passutil.hashPassword(str1); //hashing str1 again (should result in a diffrent hashed Password)

    const same1 = passutil.comparePassword(str1, hash1);
    const same2 = passutil.comparePassword(str3, hash1);

    expect(hash1).not.toEqual(str1);
    expect(hash1).not.toBeNull();

    expect(hash1).not.toEqual(hash2);

    expect(same1).toBeTruthy();
    expect(same2).toBeFalsy();
});