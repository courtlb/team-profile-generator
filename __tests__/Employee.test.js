const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Courtney', 1, 'email');

    expect(employee.name).toBe('Courtney');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('email');
});

test('gets employees information', () => {
    const employee = new Employee ('Courtney', 1, 'email');

    expect(employee.getName()).toBe('Courtney');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('email');
    expect(employee.getRole()).toBe('employee');
});