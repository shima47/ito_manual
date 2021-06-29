const a = "24,86,18,64,59,57,40,76,28,77,75,51,13,62,6,53,87,2,39,85,19,8,20,29,93,94,22,90,69,63,92,97,9,82,66,30,70,84,42,99,61,3,96,74,14,72,23,88,80,44,52,95,43,11,33,79,68,35,100,37,71,36,98,31,60,1,65,27,32,55,89,21,47,7,56,46,5,45,4,49,17,78,25,10,54,83,41,73,48,91,12,58,34,16,50,26,38,67,81,15";
const ary = a.split(",");

const $popUp = document.getElementById("pop-up");
const $people = document.getElementById("people");
const $id = document.getElementById("id");
const $reInput = document.getElementById("reInput");
const $decideBtn = document.getElementById("decide");
const $raffleBtn = document.getElementById("raffle");
const $num = document.getElementById("number");
const $rest = document.getElementById("rest")
const $history = document.getElementById("history");
const $counter = document.getElementById("counter");

$decideBtn.addEventListener("click",() => {
	let people = Number($people.value);
	let id = Number($id.value);

	if(people < 1 || id < 1){
		$reInput.innerHTML = "1以上の数を入力してください";
		return;
	}
	if(id > people){
		$reInput.innerHTML = "No.は人数より小さくしてください";
		return;
	};
	
	$popUp.checked = false;
	document.getElementById("displayId").innerHTML = $id.value;
	document.getElementById("displayPpl").innerHTML = $people.value +"人";
	
	let card = (100 - id - ((100 - id) % people)) / people + 1;
	$rest.innerHTML = "残りカード数：" + card;
});

$raffleBtn.addEventListener("click",() => {
	function sleep(waitSec, callbackFunc) {
		document.getElementById("displayId").innerHTML = $id.value;

		let spanedSec = 0;
		const waitFunc = function () {
			let x = Math.floor(Math.random() * 100) + 1;
			$num.innerHTML = "<font color=\"gray\" id=\"gray\">" + x + "</font>";
			
			spanedSec++;
	 
			if (spanedSec >= waitSec) {
				if (callbackFunc) callbackFunc();
				return;
			}
	 
			clearTimeout(ID);
			ID = setTimeout(waitFunc, 50);
		};
	
		let ID = setTimeout(waitFunc, 0);
	 
	};
	 
	sleep(6, function() {
		let people = Number($people.value);
		let id = Number($id.value);
		let history = $history.textContent;
		let count = Number($counter.textContent);
		
		let card = (100 - id - ((100 - id) % people)) / people + 1;
		
		let index = id - 1 + people * count;
		//console.log(c, count);
		
		if(count >= card){
			$num.innerHTML = "<font color=\"gray\" id=\"gray\">終わり</font>";
			return;
		};
		
		//console.log(c, count);
		
		$num.innerHTML = ary[index];

		count++;
		$counter.innerHTML = count;

		$rest.innerHTML = "残りカード数：" + (card - count);

		$history.innerHTML = history;
	});
});