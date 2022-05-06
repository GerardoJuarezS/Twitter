/* Importing the User class from the User.js file. */
const User = require('./../../app/models/User')
/* A unit test for the User class. */
describe('Unit Tests for User class', () => {
  /* A test case. */
  test('Create an User object', () => {
    /* Creating a new instance of the User class. */
    const user = new User(
      /* Setting the bio property of the User object to the value of the bio parameter. */
      1,
      'carlogilmar',
      'Carlo',
      'Bio',
      'dateCreated',
      'lastUpdated'
    )
    /* Testing the User class. */
    expect(user.id).toBe(1)
    expect(user.username).toBe('carlogilmar')
    expect(user.name).toBe('Carlo')
    expect(user.bio).toBe('Bio')
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
    //expect(user.dateCreated).toBe("dateCreated")
    //expect(user.lastUpdated).toBe("lastUpdated")
  })
  test('Add getter', () => {
    const user = new User(1, 'carlogilmar', 'Carlo', 'Bio')
    expect(user.getUsername).toBe('carlogilmar')
    expect(user.getBio).toBe('Bio')
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  })
  test('Add setters', () => {
	  const user = new User(1,"carlogilmar", "carlo", "Bio")
	  user.setUsername = "Gilmar"
	  expect(user.username).toBe("Gilmar")
	  user.setBio = "New bio"
	  expect(user.bio).toBe("New bio")
  })
})
