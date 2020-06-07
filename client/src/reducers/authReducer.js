import {AUTH} from "./types";

export default (state = false, action) => {
    switch (action.type) {
        case AUTH:
            return action.payload;
        default:
            return state;
    }
};



