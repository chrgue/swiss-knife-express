function now() {
    return new Date().getTime();
}

function wait(millis){
    const waitTill = now() + millis;
    while(waitTill > now()) {} //NOSONAR
}

module.exports = wait
