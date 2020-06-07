import {TOGGLE_MODAL_OFF, TOGGLE_MODAL_ON} from "./types";

export default (state = '', action) => {
    switch (action.type) {
        case TOGGLE_MODAL_ON:
            return action.payload;
        case TOGGLE_MODAL_OFF:
            return '';
        default:
            return state;
    }
};

