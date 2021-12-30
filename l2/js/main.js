import {printError, printResult} from './printResult.js';
import getDateDiff from './getDateDiff.js';

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firstDate || !secondDate) {
        printError('Ooopps - введите дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate);

        printResult(dateDiff);
    }
};

import { chunk } from 'lodash';

console.log(chunk(['a', 'b', 'c', 'd'], 2));