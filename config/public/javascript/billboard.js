import bb from "billboard.js"

bb.generate({
    bindto: "#chart",
    data: {
        type: "line",
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50]
        ]
    }
});
console.log(bb)
console.log("hi")