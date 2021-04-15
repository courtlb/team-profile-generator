const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Courtney', 1, 'email', 'courtlb');

    expect(engineer.name).toBe('Courtney');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('courtlb');
});

test('gets engineer information', () => {
    const engineer = new Engineer ('Courtney', 1, 'email', 'courtlb');

    expect(engineer.getName()).toBe('Courtney');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('email');
    expect(engineer.getGithub()).toBe('courtlb');
    expect(engineer.getRole()).toBe('engineer');
});