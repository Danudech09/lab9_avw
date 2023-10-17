const bcrypt = require('bcryptjs');

const makeHash = async (myText) => {
    const resultPromise = await bcrypt.hash(myText, 10);
    return resultPromise;
}

const compareHash = async (textTest, myHash) => {
    const resultCompare = await bcrypt.compare(textTest, myHash);
    return resultCompare;
}

const textTest = '6326357';

makeHash(textTest).then( hash =>{
    console.log('hashData',hash);

    compareHash(textTest, hash).then(result =>{
        console.log('resultData',result);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});