import { expect } from 'chai';
import Utils from './utils';
import { RoomPosition, Directions, Stats, RoomContentType } from './models';

describe('Game of life - Utils', function() {
    it('should move player to east', function() {
        // 1. ARRANGE
        let mockOldPosition: RoomPosition = {
            x: 3,
            y: 5
        };
        let mockDirection = Directions.East;
        let expectedXPosition: number = 4;

        // 2. ACT
        var newPosition = Utils.getNewPosition(mockOldPosition, mockDirection);

        // 3. ASSERT
        expect(newPosition.x).to.be.equal(expectedXPosition);
    });

    it('should move player to south', function() {
        // 1. ARRANGE
        let mockOldPosition: RoomPosition = {
            x: 5,
            y: 6
        };
        let mockDirection = Directions.South;
        let expectedYPosition: number = 5;

        // 2. ACT
        var newPosition = Utils.getNewPosition(mockOldPosition, mockDirection);

        // 3. ASSERT
        expect(newPosition.y).to.be.equal(expectedYPosition);
    });

    it('should move player to north', function() {
        // 1. ARRANGE
        let mockOldPosition: RoomPosition = {
            x: 5,
            y: 6
        };
        let mockDirection = Directions.North;
        let expectedYPosition: number = 7;

        // 2. ACT
        var newPosition = Utils.getNewPosition(mockOldPosition, mockDirection);

        // 3. ASSERT
        expect(newPosition.y).to.be.equal(expectedYPosition);
    });

    it('should move player to west', function() {
        // 1. ARRANGE
        let mockOldPosition: RoomPosition = {
            x: 5,
            y: 6
        };
        let mockDirection = Directions.West;
        let expectedXPosition: number = 4;

        // 2. ACT
        var newPosition = Utils.getNewPosition(mockOldPosition, mockDirection);

        // 3. ASSERT
        expect(newPosition.x).to.be.equal(expectedXPosition);
    });

    it('should add score when room contains gold', function() {
        // 1. ARRANGE
        let mockOldStats: Stats = {
            health: 4,
            score: 5
        };

        let mockRoomContent = RoomContentType.Gold;
        let expectedScore: number = 6;

        // 2. ACT
        var newStats = Utils.getNewStats(mockOldStats, mockRoomContent);

        // 3. ASSERT
        expect(newStats.score).to.be.equal(expectedScore);
    });

    it('should change health when room contains monster', function() {
        // 1. ARRANGE
        let mockOldStats: Stats = {
            health: 4,
            score: 5
        };

        let mockRoomContent = RoomContentType.Monster;
        let expectedHealth: number = 3;

        // 2. ACT
        var newStats = Utils.getNewStats(mockOldStats, mockRoomContent);

        // 3. ASSERT
        expect(newStats.health).to.be.equal(expectedHealth);
    });
});
