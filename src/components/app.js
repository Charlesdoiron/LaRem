const count1 = document.querySelector("#count1")
const count2 = document.querySelector("#count2")

let counter = 0;
let counter2 = 0;
function count() {
    if (counter <= 657) {
            count1.innerHTML = counter++;
    } else {
    	return
    }
    if (counter2 <= 26) {
            count2.innerHTML = counter2++;
    } else {
    	return
    }
}

	window.setInterval(count, 100)


