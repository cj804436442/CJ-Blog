import { MessageBox } from 'element-ui'

const defaultTitle = '提示'

const factory = type => (message, options = {}) => {
    return new Promise(resolve => {
        MessageBox[type](message, options.title || defaultTitle, Object.assign({}, {
            type: 'warning',
            customClass: type,
            closeOnClickModal: false,
            callback: action => action === 'confirm' && resolve(true) || resolve(false)
        }, options))
    })
}

export const confirm = (...args) => factory('confirm')(...args);

export const alert = (...args) => factory('alert')(...args);

export const prompt = (message, inputValue, options = {}) => {
    return new Promise((resolve, reject) => {
        MessageBox.prompt(message, options.title || defaultTitle, Object.assign({
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue,
        }, options)).then(({ value }) => {
            resolve(value)
        }).catch(() => {
            resolve(false)
        })
    })
}