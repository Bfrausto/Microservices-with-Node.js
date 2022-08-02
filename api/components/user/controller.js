const nanoid = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
            id: body.id ? body.id : nanoid(),
        };

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
            console.log('usuario',user);
        }
        return store.upsert(TABLE, user);
    }

    return {
        list,
        get,
        upsert
    };
}