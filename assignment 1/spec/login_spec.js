describe('Login functionality', function() {
    it('should encrypt the password correctly using MD5', function() {
        const password = 'password123';
        const encryptedPassword = md5Encrypt(password);
        expect(encryptedPassword).toMatch(/^[a-f0-9]{32}$/); // MD5 hash is 32 characters long
    });

    it('should return true for valid login credentials', function() {
        const storedUsername = 'testuser';
        const storedPasswordHash = md5Encrypt('password123');
        const result = checkLogin('testuser', 'password123', storedUsername, storedPasswordHash);
        expect(result).toBe(true);
    });

    it('should return "Incorrect password" for invalid login credentials', function() {
        const storedUsername = 'testuser';
        const storedPasswordHash = md5Encrypt('password123');
        const result = checkLogin('testuser', 'wrongpassword', storedUsername, storedPasswordHash);
        expect(result).toBe('Incorrect password');
    });

    it('should return "No username entered" for empty username', function() {
        const storedUsername = 'testuser';
        const storedPasswordHash = md5Encrypt('password123');
        const result = checkLogin('', 'password123', storedUsername, storedPasswordHash);
        expect(result).toBe('No username entered');
    });

    it('should return "No password entered" for empty password', function() {
        const storedUsername = 'testuser';
        const storedPasswordHash = md5Encrypt('password123');
        const result = checkLogin('testuser', '', storedUsername, storedPasswordHash);
        expect(result).toBe('No password entered');
    });
});
