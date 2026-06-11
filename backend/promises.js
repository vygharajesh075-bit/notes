const fs = require("fs/promises");

async function main() {

    await fs.writeFile(
        "test.txt",
        "Hello"
    );

    await fs.appendFile(
        "test.txt",
        "\nWorld"
    );

    let data = await fs.readFile(
        "test.txt",
        "utf-8"
    );
// without utf-8 some buffer code willl come
    console.log(data);

    await fs.rename(
        "test.txt",
        "new.txt"
    );

    console.log("Done");
}

main();