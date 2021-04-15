const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Courtney', 1, 'email', 'texas');

    expect(intern.name).toBe('Courtney');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('texas');
});

test('gets intern information', () => {
    const intern = new Intern ('Courtney', 1, 'email', 'texas');

    expect(intern.getName()).toBe('Courtney');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('email');
    expect(intern.getSchool()).toBe('texas');
    expect(intern.getRole()).toBe('intern');
});