let observer = []
function attach(obs){
    observer.push(obs)
}
function detach(obs){
    let newObserver = []
    for(let i of observer){
        if(i !== obs){
            newObserver.push(i)
        }
    }
    observer = newObserver
}
function notify(data){
    for(let i of observer){
        console.log(i + " notified")
    }
}
attach("a")
attach("b")
notify()
attach("c")
attach("b")
notify()
// conditional rendering

const age = 21
if(age < 18){
    console.log("not eligible")
} else if(age == 18){
    console.log("congrats")
} else {
    console.log("eligible")
}