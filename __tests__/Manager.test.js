const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Courtney', 1, 'email', 100);

    expect(manager.name).toBe('Courtney');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe(100);
});