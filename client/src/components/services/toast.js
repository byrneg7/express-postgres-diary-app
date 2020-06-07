import {toast} from 'react-toastify';

export const makeToast = (type, text) => {
    switch (type) {
        case 'success':
            return toast.success(text);
        case 'error':
            return toast.error(text);
        case 'info':
            return toast.info(text);
        case 'warning':
            return toast.warn(text);
    }
};