describe("Guess-a-Number function", () => {
    describe('test-to-pass', () => {
        it("should return 'You guessed it!' when the number entered is correct", () => {
            expect(guessNum(4)).toBe("You guessed it!");
        });

        it("should return 'Guess again.' for a middle-range number between 1 and 10", () => {
            expect(guessNum(5)).toBe("Guess again.");
        });
    })
 
    describe('test-to-boundary', () => {
        it("should return 'Guess again.' for boundary number 1", () => {
            expect(guessNum(1)).toBe("Guess again.");
        });

        it("should return 'Guess again.' for boundary number 10", () => {
            expect(guessNum(10)).toBe("Guess again.");
        });

        it("should return 'Guess again.' for number 9 (close to boundary)", () => {
            expect(guessNum(9)).toBe("Guess again.");
        });

        it("should return 'Guess again.' for number 2 (close to boundary)", () => {
            expect(guessNum(2)).toBe("Guess again.");
        });

        it("should return 'Way off!!! Pick between 1 and 10.' if the number is greater than 10 and close to boundary", () => {
            expect(guessNum(11)).toBe("Way off!!!! Pick between 1 and 10.");
        });

        it("should return 'Way off!!! Pick between 1 and 10.' if the number is less than 1 ", () => {
            expect(guessNum(0)).toBe("Way off!!!! Pick between 1 and 10.");
        });
    });

    describe('test-to-fail', () => {
        it("should return 'A value was not entered.' if no value is provided", () => {
            expect(guessNum('')).toBe("A value was not entered.");
        });

        it("should return 'A number was not input.' if a non-numeric value is entered", () => {
            expect(guessNum('abc')).toBe("A number was not input."); 
        });

        it("should return 'A number was not input.' if a symbol is entered", () => {
            expect(guessNum('@')).toBe("A number was not input."); 
        });
    });
});