class Telenov {
    constructor(token) {
        if (!token) throw new Error("Telenov => Please set a correct token.");

        this.token = token;
    }
}

module.exports = Telenov;