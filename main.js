// let texth1 = document.querySelector(".textClass");
// let texth2 = document.querySelector(".textClass2");
// let texth3 = document.querySelector(".textClass3");


// texth1.innerHTML = ` `
// texth1.style.backgroundColor = "green"
// texth1.style.textAlign = "Center"


// texth2.style.backgroundColor = "orange"
// texth2.style.textAlign = "end"
// texth2.style.fontSize = "40px"


// texth3.innerHTML = ` <i> <strong> <i style="color: white"> Man 14 yoshdaman  </i> </strong> </i>  `
// texth3.style.backgroundColor = "blue"
// texth3.style.textAlign = "left"






        const numberElement = document.createElement('div');
        numberElement.id = 'random-number';

        document.body.style.backgroundColor = "black";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";

        numberElement.style.color = "red";
        numberElement.style.fontSize = "100px";

        document.body.appendChild(numberElement);

        function getRandomNumber() {
            return Math.floor(Math.random() * 100) + 1; 
        }

        function displayRandomNumber() {
            numberElement.textContent = getRandomNumber();
        }

        displayRandomNumber();
