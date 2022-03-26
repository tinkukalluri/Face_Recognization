function fun1(port, fun) {
    console.log(port);
    fun()
}

app = {

    listen: fun1,
    get: Mget,
    post: Mpost
}

function Mget(url, fun) {
    console.log(url);
    fun()
}

function Mpost(url, fun) {
    console.log(url);
    fun()
}

function fun2() {
    console.log("tinku kalluri");
}

app.listen(3000, fun2)
app.get("/images", () => {
    console.log("tinku kalluri");

})
app.post("/Login", fun2)