require('./index.scss')

import _ from 'lodash';

import Icon from './happy.jpg';
import Img from './logo.png';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    // 将图像添加到我们已经存在的 div 中。
    const myImg = new Image();
    myImg.src = Img;

    element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());


console.log('hello webpack!')


