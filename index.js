class Period {
    orderNumber;
    title;

    constructor(orderNumber, title){
        this.orderNumber = orderNumber;
        this.title = title;
    }
}

class InformationField {
    orderNumber;
    title;

    constructor(orderNumber, title){
        this.orderNumber = orderNumber;
        this.title = title;
    }
}

class PeriodField {
    title;
    periodList;

    constructor(title, periodList){
        this.title = title;
        this.periodList = periodList;
    }
}

class DroppableField {
    title;
    periodList;

    constructor(title, periodList){
        this.title = title;
        this.periodList = periodList;
    }
}

var draggable = new ej.base.Draggable(document.getElementById('element1'), {
    clone: false
});
var droppable = new ej.base.Droppable(document.getElementById('droppable'), {
    drop: (function (e) {
        e.droppedElement.querySelector('#vamp1').style.position = 'absolute';
        e.droppedElement.getElementById('vamp1').style.background = 'black';
    })
});