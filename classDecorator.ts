function MyClassDecorator(target:Function){
   console.log("MyClassDecorator called on:", target);
}

function MyClassDecoratorParams(param1: number, param2: string) {
    return function(target: Function) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@MyClassDecorator
class MyClassDecoratorExercise{

}

@MyClassDecoratorParams(1,"a")
class MyClassDecoratorParamsExercise{
    
}



