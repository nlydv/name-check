#!/usr/bin/env node

const { NodeClient } = require("hs-client");
const config = require("./config.json");
const nameList = require("./nameList.json");

const node = new NodeClient(config);

async function checkAvailable(names) {
    const available = [];
    const reserved = [];
    const registered = [];
    const invalid = [];

    for ( const name of names ) {
        const data = await node.execute("getnameinfo", [ name ]).catch(x => null);

        if ( data === null )               invalid.push(name);
        else if ( data.start.reserved )    reserved.push(name);
        else if ( data.info?.registered )  registered.push(name);
        else                               available.push(name);
    }

    return { available, registered, reserved, invalid };
}

(async () => {
    const result = await checkAvailable(nameList);
    console.log(result);
})();
