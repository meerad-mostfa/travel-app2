import {calculateDaysDiff } from "../app.js";
describe('calculateDaysDiff', () => {
    it('should return the correct number of days between two dates', () => {
        const startDate = '2024-01-01';
        const endDate = '2024-01-15';
        const expectedDuration = 14;

        const duration =calculateDaysDiff(startDate, endDate);

        expect(duration).toBe(expectedDuration);
    });
});
