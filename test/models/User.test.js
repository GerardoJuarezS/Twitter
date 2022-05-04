const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

	test('Create an User object', () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")


		expect(user.id).toBe(1)
		expect(user.username).toBe("carlogilmar")
		expect(user.name).toBe("Carlo")
		expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
        //expect(user.dateCreated).toBe("dateCreated")
        //expect(user.lastUpdated).toBe("lastUpdated")
	});
})