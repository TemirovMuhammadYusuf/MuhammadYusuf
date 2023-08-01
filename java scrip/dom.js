// function result() {
//     let nmadr = +document.   ElementById("nmadr").value;

//     if (nmadr > 0) {
//         console.log(+nmadr + 1)
//     } else if (nmadr == 0) {
//         console.log(nmadr = 10)
//     } else if (nmadr < 0) {
//         console.log(+nmadr - 2)
//     }
// }




// function result() {
//     let num1 = +document.    ElementById("num1").value;
//     let num2 = +document.    ElementById("num2").value;
//     let num3 = +document.    ElementById("num3").value;
//     let musbat = 0;
//     if (num1 > 0) musbat++;
//     if (num2 > 0) musbat++;
//     if (num3 > 0) musbat++;
//     console.log("Musbatlar soni " + musbat + "\nManfiylar soni " + (3 - musbat));
// }


// let a = document.    ElementsByName("box")

// function result() {
//     a[0].innerText = "Ishlaaaaaaaaaaaaaaa";
//     console.log(a);
// }


// function addItem() {
//     let input = document.    ElementById("newValue");
//     let text = document. ElementById("pText");
//     let index = document.    ElementById("pIndex");
//     text.textContent = text.textContent + input.value;
//     index.textContent = +index.textContent +1;
//     input.value = "";
// }



function result() {
    let input = document.   ElementById("input");
    let text = input.value;


    let list = document.    ElementById("list");
    let p = document.createElement("p");
    p.textContent = text;
    list.appendChild(p);

    input.value = "     ";
}


