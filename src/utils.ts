import {
    RoomPosition,
    Directions,
    RoomContentType,
    Stats,
    MoveResult
} from './models';
import RoomContentService from './services/room-content-service';

export default class Utils {
    // Move player to new position and get stats
    public static movePlayer(
        currentPosition: RoomPosition,
        currentStats: Stats,
        direction
    ): MoveResult {
        let newPosition = this.getNewPosition(currentPosition, direction);
        let roomContent: RoomContentType;
        // roomContent =  await RoomContentService.getRoomContent(newPosition);
        roomContent = this.getMockRoomContentResponse(newPosition);
        let newStats = this.getNewStats(currentStats, roomContent);

        return {
            roomContent,
            newPosition,
            newStats
        };
    }

    // Gets player's new position
    public static getNewPosition(
        currentPosition: RoomPosition,
        direction: string
    ): RoomPosition {
        let { x, y } = currentPosition;

        let newPosition = {
            x,
            y
        };

        switch (direction) {
            case Directions.East:
                newPosition.x++;
                break;

            case Directions.West:
                newPosition.x--;
                break;

            case Directions.North:
                newPosition.y++;
                break;

            case Directions.South:
                newPosition.y--;
                break;

            default:
        }

        return newPosition;
    }

    // Gets player's new stats
    public static getNewStats(
        currentStats: Stats,
        roomContent: RoomContentType
    ): Stats {
        let { health, score } = currentStats;
        let newStats = {
            health,
            score
        };

        switch (roomContent) {
            case RoomContentType.Gold:
                newStats.score++;
                break;
            case RoomContentType.Monster:
                newStats.health--;
                break;
            default:
                break;
        }
        return newStats;
    }

    // Gets room content - calls api
    public static getMockRoomContentResponse(
        roomPosition: RoomPosition
    ): RoomContentType {
        let result = Math.floor(Math.random() * 2) + 1;
        let roomContent =
            result == 1 ? RoomContentType.Gold : RoomContentType.Monster;

        return roomContent;
    }
}
