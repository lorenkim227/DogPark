const passutil = require('./PasswordUtil');

// npm run coverage

TextDecoderStream('Test hashing passwords', function(){
    const str1 = "123456";
    const str2 = "123456";
    const str3 = "12345";

    const hash1 = passutil.hashPassword(str1);
    const hash2 = passutil.hashPassword(str2);
    const hash3 = passutil.hashPassword(str3);

    const same1 = passutil.comparePassword(str1, hash1);
    const same2 = passutil.comparePassword(str3, hash1);

    expect(hash1).not.toEqual(str1);
    expect(hash1).not.toBeNull();

    expect(hash2).not.toEqual(str2);
    expect(same1).toBeTruthy();
    expect(same2).toBeFalsy();
})