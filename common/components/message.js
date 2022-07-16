import {Message} from 'element-ui'

const $message = (...args) => {
    Message(...args);
};

$message.success = message => {
    Message({
        showClose: true,
        type: 'success',
        message: message
    })
}

$message.error = message => {
    return Message({
        showClose: true,
        type: 'error',
        message: message
    })
}

$message.warning = message => {
    Message({
        showClose: true,
        type: 'warning',
        message: message
    })
}

$message.info = message => {
    Message({
        showClose: true,
        type: 'info',
        message: message
    })
}


export default $message;
