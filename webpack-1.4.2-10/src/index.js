import('./index.scss')

import afn from './a'

afn()

console.log('hello webpack!!')

if (process.env.NODE_ENV === 'development') {
    console.log('baseurl is localhost')
} else {
    console.log('baseurl is imooc.com')
}

