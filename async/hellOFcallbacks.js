
function asyncOperation1(data, callback) {
    setTimeout(() => {
        console.log('Операция 1 началась...');
        if (Math.random() > 0.5) {
            callback(new Error('Ошибка в Операции 1'), null);
        } else {
            console.log('Операция 1 завершена');
            callback(null, data + 1);
        }
    }, Math.random() * 3000);
}

function asyncOperation2(data, callback) {
    setTimeout(() => {
        console.log('Операция 2 началась...');
        if (Math.random() > 0.5) {
            callback(new Error('Ошибка в Операции 2'), null);
        } else {
            console.log('Операция 2 завершена');
            callback(null, data * 2);
        }
    }, Math.random() * 3000);
}

function asyncOperation3(data, callback) {
    setTimeout(() => {
        console.log('Операция 3 началась...');
        if (Math.random() > 0.5) {
            callback(new Error('Ошибка в Операции 3'), null);
        } else {
            console.log('Операция 3 завершена');
            callback(null, data - 3);
        }
    }, Math.random() * 3000);
}

function asyncOperation4(data, callback) {
    setTimeout(() => {
        console.log('Операция 4 началась...');
        if (Math.random() > 0.5) {
            callback(new Error('Ошибка в Операции 4'), null);
        } else {
            console.log('Операция 4 завершена');
            callback(null, data + 4);
        }
    }, Math.random() * 3000);
}

function startMaxCallbackHell() {
    asyncOperation1(5, (err1, result1) => {
        if (err1) {
            console.error('Ошибка:', err1);
        } else {
            console.log(`Результат 1: ${result1}`);
            asyncOperation2(result1, (err2, result2) => {
                if (err2) {
                    console.error('Ошибка:', err2);
                } else {
                    console.log(`Результат 2: ${result2}`);
                    asyncOperation3(result2, (err3, result3) => {
                        if (err3) {
                            console.error('Ошибка:', err3);
                        } else {
                            console.log(`Результат 3: ${result3}`);
                            asyncOperation4(result3, (err4, result4) => {
                                if (err4) {
                                    console.error('Ошибка:', err4);
                                } else {
                                    console.log(`Результат 4: ${result4}`);
                                    if (Math.random() > 0.5) {
                                        setTimeout(() => {
                                            console.log('Случайная дополнительная операция...');
                                            asyncOperation1(result4, (err5, result5) => {
                                                if (err5) {
                                                    console.error('Ошибка в случайной операции:', err5);
                                                } else {
                                                    console.log(`Результат 5: ${result5}`);
                                                    asyncOperation2(result5, (err6, result6) => {
                                                        if (err6) {
                                                            console.error('Ошибка в продолжении ада:', err6);
                                                        } else {
                                                            console.log(`Результат 6: ${result6}`);
                                                            asyncOperation3(result6, (err7, result7) => {
                                                                if (err7) {
                                                                    console.error('И опять ошибка:', err7);
                                                                } else {
                                                                    console.log(`Результат 7: ${result7}`);
                                                                    console.log('АД завершён, но ненадолго...');
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }, Math.random() * 5000);
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

startMaxCallbackHell();