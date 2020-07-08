function maskify(cc) {
    return cc.replace(/[0-9\w\W](?=[0-9\w\W]{4})/gim, '#');
}