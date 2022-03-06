function welcome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome to This Website!");
        }, 1000);
    });
}
function hello(name, lastname){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name === "leon" && lastname === "jayakusuma")
                resolve("hello, leon jayakusuma!")
            else reject("hello, stranger!")
        }, 2000)
    })
}
p = welcome().then((message) => {
    console.log("this is in the then" + message);
})

async function hello_world() {
    try {
        const result = await welcome();
        console.log(result);
        const me = await hello("leon", "jayakusuma");
        console.log(me);
    } catch (error){console.log(error)}
}

let world = hello_world();