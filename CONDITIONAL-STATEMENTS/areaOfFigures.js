function areaOfFigures(input){
    let figure = input.shift();
    if(figure == "square") {
        let a = Number(input.shift());
        let squareArea = a*a;
        console.log(squareArea.toFixed(3));
    } else if(figure == "rectangle"){
        let b = Number(input.shift());
        let c = Number(input.shift());
        let rectangleArea=b*c;
        console.log(rectangleArea.toFixed(3));
    } else if(figure == "circle"){
        let r = Number(input.shift());
        let circleArea = Math.PI*r*r;
        console.log(circleArea.toFixed(3));
    } else if(figure == "triangle"){
        let a = Number(input.shift());
        let h = Number(input.shift());
        let triangleArea=(a*h)/2;
        console.log(triangleArea.toFixed(3));
    }
}

//Да се напише програма, в която потребителят въвежда вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (square, rectangle, circle или triangle). Ако фигурата е квадрат, на следващия ред се чете едно число - дължина на страната му. Ако фигурата е правоъгълник, на следващите два реда четат две числа - дължините на страните му. Ако фигурата е кръг, на следващия ред чете едно число - радиусът на кръга. Ако фигурата е триъгълник, на следващите два реда четат две числа - дължината на страната му и дължината на височината към нея. Резултатът да се закръгли до 3 цифри след десетичната точка. 
