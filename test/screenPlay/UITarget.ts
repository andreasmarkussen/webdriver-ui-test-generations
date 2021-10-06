
interface UITarget{
    name: string,
    targetFunction: any
}

let myTarget: UITarget = {
    name: "Test",
    targetFunction: ()=> $(" ")
}

