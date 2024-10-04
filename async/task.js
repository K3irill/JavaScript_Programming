//Перепешите последнюю функцию задачи с тремя «серверами» с помощью async/await.

const LATENCY = 400;

const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
};

const getProduct = (productIdx, cb) => {
    const productsById = {
        0: { name: "Орехи", rackId: 1 },
        1: { name: "Морковь", rackId: 1 },
        2: { name: "Спаржа", rackId: 1 },
        3: { name: "Печенье", rackId: 2 },
        4: { name: "Наушники", rackId: 2 },
        5: { name: "Молоко", rackId: 2 },
        6: { name: "Сок", rackId: 1 },
        7: { name: "Контейнер", rackId: 1 },
        8: { name: "JS-разработчик", rackId: 1 },
        9: { name: "Прямые руки", rackId: 2 },
        10: { name: "Водка", rackId: 2 },
    };
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                rej("getProduct failed");
            } else {
                res(productsById[productIdx]);
            }
        }, LATENCY);
    });
};

const getBoxIdx = (rackId, productIdx, cb) => {
    const rackIdToBoxes = {
        // rackId: boxes: { boxId0: productId2, boxId1: productId0 }
        1: [2, 0, 1, 6, 7, 8],
        2: [5, 3, 4, 10, 9],
    };
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                rej("getBoxIdx failed");
            } else {
                res(rackIdToBoxes[rackId].indexOf(productIdx));
            }
        }, LATENCY);
    });
};

const getBoxMass = (rackId, boxId, cb) => {
    const boxIdToMass = {
        // rackId: boxes: { boxId0: massProductId2, boxId1: massProductId0 }
        1: [10, 11, 12, 13, 14, 15],
        2: [16, 17, 18, 19, 20],
    };
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                rej("getBoxMass failed");
            } else {
                res(boxIdToMass[rackId][boxId]);
            }
        }, LATENCY);
    });
};
//------------------------------------------------
// const printProductMass = (productIdx) => {
//     let rackIndex;
//     let productName;
//     let boxIndex;
//     getProduct(productIdx)
//         .then(({ name, rackId }) => {
//             rackIndex = rackId;
//             productName = name;
//             return getBoxIdx(rackIndex, productIdx);
//         })
//         .then((boxId) => {
//             boxIndex = boxId;
//             return getBoxMass(rackIndex, boxId);
//         })
//         .then((boxMass) => {
//             console.log(
//                 `Коробка №${boxIndex} c ${productName} находится на стеллаже №${rackIndex} и весит ${boxMass} кг`
//             );
//         })
//         .catch((err) => {
//             console.log(`Ошибка: ${err}`);
//         });
// };

const printProductMass = async (productIdx) => {
    try {
        const response = await getProduct(productIdx);
        const { name: productName, rackId: rackIndex } = await getProduct(
            productIdx
        );
        const boxIndex = await getBoxIdx(rackIndex, productIdx);
        const boxMass = await getBoxMass(rackIndex, boxIndex);

        console.log(
            `Коробка №${boxIndex} c ${productName} находится на стеллаже №${rackIndex} и весит ${boxMass} кг`
        );
    } catch (err) {
        console.log(`Ошибка: ${err}`);
    }
};
printProductMass(10);

