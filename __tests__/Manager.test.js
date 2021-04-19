const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Courtney', 1, 'email', 100);

    expect(manager.name).toBe('Courtney');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe(100);
});

test('gets manager information', () => {
    const manager = new Manager ('Courtney', 1, 'email', 100);

    expect(manager.getName()).toBe('Courtney');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('email');
    expect(manager.getOfficeNumber()).toBe(100);
    expect(manager.getRole()).toBe('Manager');
});