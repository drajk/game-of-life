import axios from 'axios';
import { RoomPosition, RoomContentType } from '../models';

export default class RoomContentService {
    private static roomContentApi = 'https://my-stub-server/room';
    public static getRoomContent(roomPosition: RoomPosition) {
        return axios.get(
            `${this.roomContentApi}/${roomPosition.x}/${roomPosition.y}`
        );
    }
}
