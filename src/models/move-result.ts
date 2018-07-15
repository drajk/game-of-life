import { RoomPosition } from './room-position';
import { Stats } from './stats';
import { RoomContentType } from './room-content-type';

export interface MoveResult {
    roomContent: RoomContentType;
    newPosition: RoomPosition;
    newStats: Stats;
}
