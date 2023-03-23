const enitrePlayerPage = document.getElementById("enitrePlayerPage");
const startpara = document.getElementById("startpara");
const startPage = document.getElementsByClassName("startPage")[0];
const namingPlayers = document.getElementsByClassName("namingPlayers")[0];
const EntirePlayerbox = document.getElementById("EntirePlayerbox");
const entirePlayer = document.getElementsByClassName("entirePlayer")[0];
const Submit = document.getElementById("Submit");
const btnshows = document.getElementsByClassName("btnshows")[0];
const bankamt = document.getElementById("bankamt");
const refreshPage = () => {
  location.reload();
};
Submit.disabled = true;
enitrePlayerPage.classList.add("unshow");
var numberofplayer = 0;
const ChossedPlayer2 = () => {
  numberofplayer = 2;
  startPage.classList.add("unshow");
  playerContent();
};
const ChossedPlayer3 = () => {
  numberofplayer = 3;
  startPage.classList.add("unshow");
  playerContent();
};
const ChossedPlayer4 = () => {
  numberofplayer = 4;
  startPage.classList.add("unshow");
  playerContent();
};
const ChossedPlayer5 = () => {
  numberofplayer = 5;
  startPage.classList.add("unshow");
  playerContent();
};
const ChossedPlayer6 = () => {
  numberofplayer = 6;
  startPage.classList.add("unshow");
  playerContent();
};

const playerContent = () => {
  console.log(numberofplayer);
  namingPlayers.classList.remove("unshow");
  for (let i = 1; i <= numberofplayer; i++) {
    const box = document.createElement("div");
    box.innerHTML = `<p class="pl">Enter the Player ${i}: </p>
    <input class="takingPlayerName" value= "p${i}" id="entring${i}" type="text" />
    <button id= "btn${i}" onclick= savingName${i}() class = "btn">Save</button>`;
    box.classList.add("PlayerNamebox");
    EntirePlayerbox.appendChild(box);
  }
};

total = [30000, 15000, 15000, 15000, 15000, 15000, 15000];
let name1 = "";
let name2 = "";
let name3 = "";
let name4 = "";
let name5 = "";
let name6 = "";
list = [];
let allFilledCount = 0;
const savingName1 = () => {
  const entring = document.getElementById("entring1");
  if (entring.value != "") {
    entring.disabled = true;
    name1 = entring.value;
    total.push(15000);
    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn1 = document.getElementById("btn1");
    btn1.textContent = "Saved";
    btn1.disabled = true;
  }
};
const savingName2 = () => {
  const entring = document.getElementById("entring2");
  if (entring.value != "") {
    entring.disabled = true;
    name2 = entring.value;
    total.push(5000);
    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn2 = document.getElementById("btn2");
    btn2.textContent = "Saved";
    btn2.disabled = true;
  }
};
const savingName3 = () => {
  const entring = document.getElementById("entring3");
  if (entring.value != "") {
    entring.disabled = true;
    name3 = entring.value;
    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn3 = document.getElementById("btn3");
    btn3.textContent = "Saved";
    btn3.disabled = true;
  }
};
const savingName4 = () => {
  const entring = document.getElementById("entring4");
  if (entring.value != "") {
    entring.disabled = true;
    name4 = entring.value;

    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn4 = document.getElementById("btn4");
    btn4.textContent = "Saved";
    btn4.disabled = true;
  }
};
const savingName5 = () => {
  const entring = document.getElementById("entring5");
  if (entring.value != "") {
    entring.disabled = true;
    name5 = entring.value;
    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn5 = document.getElementById("btn5");
    btn5.textContent = "Saved";
    btn5.disabled = true;
  }
};
const savingName6 = () => {
  const entring = document.getElementById("entring6");
  if (entring.value != "") {
    entring.disabled = true;
    name6 = entring.value;
    allFilledCount++;
    if (allFilledCount === numberofplayer) {
      Submit.disabled = false;
    }
    const btn6 = document.getElementById("btn6");
    btn6.textContent = "Saved";
    btn6.disabled = true;
  }
};

const hoverSubmitin = () => {
  Submit.style.background = "red";
  Submit.style.color = "white";
  Submit.style.position = "relative";
  Submit.style.top = "2px";
  console.log("mouse in is working");
};
const hoverSubmitout = () => {
  Submit.style.background = "white";
  Submit.style.color = "black";
  Submit.style.position = "relative";
  Submit.style.top = "0px";
  console.log("mouse out is working");
};

const submitClicked = () => {
  console.log(list);
  list = [name1, name2, name3, name4, name5, name6];
  enitrePlayerPage.classList.remove("unshow");
  namingPlayers.classList.add("unshow");
  for (let i = 1; i <= numberofplayer; i++) {
    const box = document.createElement("div");
    box.classList.add("playerboxClass");
    box.id = `playerboxClassId${i}`;
    box.innerHTML = `<div class="Name_Amount">
      <span id= "pname${i}">${list[i - 1]} </span>
      <span id= val${i}>${total[i]}</span>
    </div>
    <div class="Giveto_input">
      <button class="transactionbtn" id = "SendtopbtnId${i}" onclick= "Sendtopbtn${i}()">Send To Player</button>
      <button class="transactionbtn" id = "RecievingbankId${i}" onclick = "Recievingbank${i}()">Receive from Bank</button>
      <button class="transactionbtn" id= "FiningfromBnkId${i}" onclick = "FiningfromBnk${i}()">Fine  </button>
      <button class="transactionbtn" id = "Buy_PlacingId${i}" onclick = "Buy_Placing${i}()">Buy Place</button>
      <button class="transactionbtn" id = "Selling_PlaceId${i}" onclick = "Selling_Place${i}()">Sell Place</button>
      </div>
    <div  class="ticketsList">
      <div>Bought Tickets</div>
    <div id= "ticketsListId${i}" >
    </div>`;
    entirePlayer.appendChild(box);
    bankamt.innerHTML = total[0];
  }
};
let cuttingamt = 0;
const savingamt = () => {
  const sendingamt = document.getElementsByClassName("sendingamt")[0];
  cuttingamt = sendingamt.value;
  sendingamt.disabled = true;
  console.log("The total transaction is " + cuttingamt);
};
const priceshortlistin = () => {
  console.log(document.getElementById("montranscId1"));
  console.log("price Shortlisting function is working  ");
  console.log(total[1] + " <----> " + Player1_Places.length);
  if (document.getElementById("montranscId1") != null) {
    if (Number(total[1]) === 0 && Player1_Places.length === 0) {
      document.getElementById("montranscId1").style.display = "none";
      console.log("this first if is working ");
    }
  }
  if (document.getElementById("montranscId2") != null) {
    if (Number(total[2]) === 0 && Player2_Places.length === 0) {
      document.getElementById("montranscId2").style.display = "none";
    }
  }
  if (document.getElementById("montranscId3") != null) {
    if (Number(total[3]) === 0 && Player3_Places.length === 0) {
      document.getElementById("montranscId3").style.display = "none";
    }
  }
  if (document.getElementById("montranscId4") != null) {
    if (Number(total[4]) === 0 && Player4_Places.length === 0) {
      document.getElementById("montranscId4").style.display = "none";
    }
  }
  if (document.getElementById("montranscId5") != null) {
    if (Number(total[5]) === 0 && Player5_Places.length === 0) {
      document.getElementById("montranscId5").style.display = "none";
    }
  }
  if (document.getElementById("montranscId6") != null) {
    if (Number(total[6]) === 0 && Player6_Places.length === 0) {
      document.getElementById("montranscId6").style.display = "none";
    }
  }
};
const Sendtopbtn1 = () => {
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  const btnshows = document.getElementsByClassName("btnshows")[0];
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  const ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 0) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(1)" class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};
const sendingamtid = document.getElementById("sendingamtid");
const montransc2 = (whichone) => {
  const inputvalue = sendingamtid.value;
  total[2] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val2").innerHTML = total[2];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");
  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const montransc1 = (whichone) => {
  const inputvalue = sendingamtid.value;
  total[1] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val1").innerHTML = total[1];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");

  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const montransc3 = (whichone) => {
  const inputvalue = sendingamtid.value;
  total[3] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val3").innerHTML = total[3];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");

  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const montransc4 = (whichone) => {
  const inputvalue = sendingamtid.value;
  total[4] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val4").innerHTML = total[4];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");

  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const montransc5 = (whichone) => {
  const inputvalue = sendingamtid.value;
  console.log(inputvalue);
  total[5] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val5").innerHTML = total[5];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");

  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const montransc6 = (whichone) => {
  const inputvalue = sendingamtid.value;
  console.log(inputvalue);
  total[6] +=
    total[whichone] < inputvalue ? total[whichone] : Number(inputvalue);
  document.getElementById("val6").innerHTML = total[6];
  document.getElementsByClassName("btnshows")[0].classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");

  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? 0
      : total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
};
const Sendtopbtn2 = () => {
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  const btnshows = document.getElementsByClassName("btnshows")[0];
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 1) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(2)"class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};
const Sendtopbtn3 = () => {
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  const btnshows = document.getElementsByClassName("btnshows")[0];
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 2) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(3)"class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};
const Sendtopbtn4 = () => {
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  const btnshows = document.getElementsByClassName("btnshows")[0];
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 3) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(4)"class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};
const Sendtopbtn5 = () => {
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  const btnshows = document.getElementsByClassName("btnshows")[0];
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 4) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(5)"class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};
const Sendtopbtn6 = () => {
  const btnshows = document.getElementsByClassName("btnshows")[0];
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  enitrePlayerPage.classList.add("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  let cnt = "";
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 5) {
      cnt += `<button id="montranscId${i + 1}" onclick = "montransc${
        i + 1
      }(6)"class="playerNum">${list[i]}</button>;`;
    }
  }
  ChoicePlayer.innerHTML = cnt;
  priceshortlistin();
};

// --------------------- Sending Amount to the player Ends ----------------------------------

const Recievingbank1 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(1)"> Send </button>`;
};
const Recievingbank2 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(2)"> Send </button>`;
};
const Recievingbank3 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(3)"> Send </button>`;
};
const Recievingbank4 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(4)"> Send </button>`;
};
const Recievingbank5 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(5)"> Send </button>`;
};
const Recievingbank6 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "SendingAmount1(6)"> Send </button>`;
};

const SendingAmount = (whichone) => {
  total[whichone] =
    total[whichone] < Number(cuttingamt)
      ? total[whichone]
      : total[whichone] + Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
  total[0] =
    total[0] < Number(cuttingamt) ? total[0] : total[0] - Number(cuttingamt);
  bankamt.innerHTML = total[0];
  enitrePlayerPage.classList.remove("unshow");
  btnshows.classList.add("unshow");
};
const SendingAmount1 = (whichone) => {
  total[whichone] = total[whichone] + Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
  total[0] = total[0] - Number(cuttingamt);
  bankamt.innerHTML = total[0];
  enitrePlayerPage.classList.remove("unshow");
  btnshows.classList.add("unshow");
};
// ---------------------------------------------------------------------------------------------------------------------

const FiningfromBnk1 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(1)"> Send </button>`;
};

const FiningfromBnk2 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(2)"> Send </button>`;
};
const FiningfromBnk3 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(3)"> Send </button>`;
};
const FiningfromBnk4 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(4)"> Send </button>`;
};
const FiningfromBnk5 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(5)"> Send </button>`;
};
const FiningfromBnk6 = () => {
  enitrePlayerPage.classList.add("unshow");
  const sendingamt = (document.getElementsByClassName(
    "sendingamt"
  )[0].disabled = false);
  btnshows.classList.remove("unshow");
  ChoicePlayer = document.getElementById("ChoicePlayer");
  ChoicePlayer.innerHTML = `<button class="playerNum" onclick = "Fineamount(6)"> Send </button>`;
};

const Fineamount = (whichone) => {
  total[whichone] = total[whichone] - Number(cuttingamt);
  document.getElementById(`val${whichone}`).innerHTML = total[whichone];
  total[0] = total[0] + Number(cuttingamt);
  bankamt.innerHTML = total[0];
  enitrePlayerPage.classList.remove("unshow");
  btnshows.classList.add("unshow");
};

// ------------------------------- Buying Place ----------------------------------------------------------------------
const confirm1 = document.getElementById("confirm1");
const confirm2 = document.getElementById("confirm2");
const placeinputid = document.getElementById("placeinputid");
const placeamount = document.getElementById("placeamount");
let placeName;
const confirming1 = () => {
  if (placeinputid.value != "") {
    confirm1.innerHTML = "Confirmed";
    confirm1.disabled = true;
    placeName = placeinputid.value;
    placeinputid.disabled = true;
    console.log("the placeName is this " + placeName);
  }
};
let place_price;
const confirming2 = () => {
  if (placeamount.value != "") {
    confirm2.innerHTML = "Confirmed";
    confirm2.disabled = true;
    place_price = placeamount.value;
    placeamount.disabled = true;
    console.log("the placeamount is this " + place_price);
  }
};
const placeid = document.getElementById("placingid");
const Buybtn = document.getElementById("Buybtn");
const Buy_Placing1 = () => {
  const placeid = document.getElementById("placingid");
  const Buybtn = document.getElementById("Buybtn");
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass" onclick="buyingit1(1)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
const Buy_Placing2 = () => {
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass" onclick="buyingit2(2)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
const Buy_Placing3 = () => {
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass"  onclick="buyingit3(3)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
const Buy_Placing4 = () => {
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass" onclick="buyingit4(4)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
const Buy_Placing5 = () => {
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass" onclick="buyingit5(5)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
const Buy_Placing6 = () => {
  console.log("The fucntion is working  ");
  enitrePlayerPage.classList.add("unshow");
  placeid.classList.remove("unshow");
  Buybtn.innerHTML = `<button class="buyingbtnclass" onclick="buyingit6(6)" >Buy</button> <button class="buyingbtnclass" onclick="Cancel()" >Cancel</button>`;
};
Player1_Places = [];
Player1_Money = [];
Player2_Places = [];
Player2_Money = [];
Player3_Places = [];
Player3_Money = [];
Player4_Places = [];
Player4_Money = [];
Player5_Places = [];
Player5_Money = [];
Player6_Places = [];
Player6_Money = [];
const Cancel = () => {
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
};
const buyingit1 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId1 = document.getElementById("ticketsListId1");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player1_Money.push(place_price);
    Player1_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val1").innerHTML = total[whichone];
    let textContent = ``;
    for (let i = 0; i < Player1_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player1_Places[i]}</div>
        <div> ${Player1_Money[i]} </div>
        </div>`;
      ticketsListId1.innerHTML = textContent;
    }
  }
};
const buyingit2 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId2 = document.getElementById("ticketsListId2");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player2_Money.push(place_price);
    Player2_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val2").innerHTML = total[whichone];
    let textContent = ``;
    for (let i = 0; i < Player2_Places.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player2_Places[i]}</div>
        <div> ${Player2_Money[i]} </div>
        </div>`;
      ticketsListId2.innerHTML = textContent;
    }
  }
};
// -->>>-
const buyingit3 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId3 = document.getElementById("ticketsListId3");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player3_Money.push(place_price);
    Player3_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val3").innerHTML = total[whichone];
    let textContent = ``;
    for (let i = 0; i < Player3_Places.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player3_Places[i]}</div>
        <div> ${Player3_Money[i]} </div>
        </div>`;
      ticketsListId3.innerHTML = textContent;
    }
  }
};
const buyingit4 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId4 = document.getElementById("ticketsListId4");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player4_Money.push(place_price);
    Player4_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val4").innerHTML = total[whichone];
    let textContent = ``;
    for (let i = 0; i < Player4_Places.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player4_Places[i]}</div>
        <div> ${Player4_Money[i]} </div>
        </div>`;
      ticketsListId4.innerHTML = textContent;
    }
  }
};
const buyingit5 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId5 = document.getElementById("ticketsListId5");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player5_Money.push(place_price);
    Player5_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val5").innerHTML = total[whichone];
    let textContent = ``;
    for (let i = 0; i < Player5_Places.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player5_Places[i]}</div>
        <div> ${Player5_Money[i]} </div>
        </div>`;
      ticketsListId5.innerHTML = textContent;
    }
  }
};
const buyingit6 = (whichone) => {
  confirm2.disabled = false;
  confirm2.innerHTML = "Confirm";
  confirm1.innerHTML = `Confirm`;
  confirm1.disabled = false;
  placeamount.disabled = false;
  document.getElementById("placeinputid").disabled = false;
  const ticketsListId6 = document.getElementById("ticketsListId6");
  const placeid = document.getElementById("placingid");
  enitrePlayerPage.classList.remove("unshow");
  placeid.classList.add("unshow");
  if (Number(place_price) < total[whichone]) {
    Player6_Money.push(place_price);
    Player6_Places.push(placeName);
    total[whichone] = total[whichone] - Number(place_price);
    total[0] = total[0] + Number(place_price);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("val6").innerHTML = total[whichone];
    total[whichone] += place_price;

    let textContent = ``;
    for (let i = 0; i < Player6_Places.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player6_Places[i]}</div>
        <div> ${Player6_Money[i]} </div>
        </div>`;
      ticketsListId6.innerHTML = textContent;
    }
  }
};

// ------------------------------------------------------------
let who_is_selling;
const Selling_Place1 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 1;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player1_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell1(${i})"> ${Player1_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 0) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};

const Selling_Place2 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 2;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player2_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell2(${i})"> ${Player2_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 1) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};
const Selling_Place3 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 3;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player3_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell3(${i})"> ${Player3_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 2) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};
const Selling_Place4 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 4;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player4_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell4(${i})"> ${Player4_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 3) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};
const Selling_Place5 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 5;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player5_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell5(${i})"> ${Player5_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 4) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};
const Selling_Place6 = () => {
  console.log("Seeling_place1 function is working in this case ");
  who_is_selling = 6;
  const allplaceslistId = document.getElementById("allplaceslistId");
  const Sellin_Place = document.getElementById("Sellin_Place");
  enitrePlayerPage.classList.add("unshow");
  Sellin_Place.classList.remove("unshow");
  let textContentPlaces = "";
  let textContentName = "";

  for (let i = 0; i < Player6_Places.length; i++) {
    textContentPlaces += `<button id="pl${i}" class = "btn" onclick= "sell6(${i})"> ${Player6_Places[i]} </button>`;
  }
  allplaceslistId.innerHTML = textContentPlaces;
  const allplayerListId = document.getElementById("allplayerListId");
  for (let i = 0; i < numberofplayer; i++) {
    if (i != 5) {
      textContentName += `<button id="allplayerBtn${
        i + 1
      }" onclick= "playerpuchasing(${i + 1})" class = "btn" disabled =true >${
        list[i]
      } </button>`;
    }
  }
  allplayerListId.innerHTML = textContentName;
};

let count = 0;
const cancelTransaction = () => {
  count = 0;
  document.getElementById("SellingtoBankId").style.background = "whitesmoke";
  document.getElementById("SellingtoBankId").style.color = "black";
  document.getElementById("allplayerListId").style.visibility = "visible";
  document.getElementById("SellingtoBankId").disabled = false;
  document.getElementById("SoldId").disabled = true;
  const Sellin_Place = document
    .getElementById("Sellin_Place")
    .classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");
};
let arraynumber;
let arrayname;
const sell1 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 1) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player1_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[1];
  console.log("amount =  " + amount);
  let placemony = Player1_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 1) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
  console.log("the value of count from the sell1 function " + count);
};
const sell2 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 2) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player2_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[2];
  console.log("amount =  " + amount);
  let placemony = Player2_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 2) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
};
const sell3 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 3) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player3_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[3];
  console.log("amount =  " + amount);
  let placemony = Player3_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 3) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
};
const sell4 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 4) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player4_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[4];
  console.log("amount =  " + amount);
  let placemony = Player4_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 4) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
};
const sell5 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 5) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player5_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[5];
  console.log("amount =  " + amount);
  let placemony = Player5_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 5) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
};
const sell6 = (whichone) => {
  arraynumber = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != 6) {
      let p = document.getElementById(`allplayerBtn${j}`);
      p.disabled = true;
    }
  }
  document.getElementById(`pl${whichone}`).style.background = "lightgreen";
  for (let j = 0; j < Player6_Places.length; j++) {
    if (j != whichone) {
      document.getElementById(`pl${j}`).disabled = true;
    }
  }
  let amount = total[6];
  console.log("amount =  " + amount);
  let placemony = Player6_Money[whichone];
  console.log("the placemony is " + placemony);
  for (let i = 1; i <= numberofplayer; i++) {
    if (i != 6) {
      if (total[i] >= placemony) {
        console.log("i == " + i + " " + total[i] + "  >= " + list[i - 1]);
        document.getElementById(`allplayerBtn${i}`).disabled = false;
        if (count == 0) {
          count++;
        }
      }
    }
  }
};

const playerpuchasing = (whichone) => {
  document.getElementById(`allplayerBtn${whichone}`).style.background =
    "lightgreen";
  arrayname = whichone;
  for (let j = 1; j <= numberofplayer; j++) {
    if (j != whichone) {
      let p = document.getElementById(`allplayerBtn${j}`);
      if (p != null) {
        if (count == 1) {
          count++;
        }
        console.log("the value of count is  " + count);
        p.disabled = true;
      }
    }
  }
  if (count == 2) {
    document.getElementById("SoldId").disabled = false;
    document.getElementById("SellingtoBankId").disabled = true;
    console.log("Yes this if is working ");
  }
  for (let i = 0; i < numberofplayer; i++) {}
};

const SellingtoBank = () => {
  document.getElementById("SellingtoBankId").style.background = "lightgreen";
  document.getElementById("allplayerListId").style.visibility = "hidden";
  if (count == 1) {
    count++;
  }
  arrayname = 0;
  if (count == 2) {
    document.getElementById("SoldId").disabled = false;
  }
};

const Iffffff = (arrayname, amt_1, pl_) => {
  if (arrayname == 0) {
    total[0] = total[0] - Number(amt_1);
    document.getElementById("bankamt").innerHTML = total[0];
    document.getElementById("SellingtoBankId").style.background = "white";
    document.getElementById("allplayerListId").style.visibility = "visible";
  } else if (arrayname === 1) {
    Player1_Money.push(amt_1);
    Player1_Places.push(pl_);
    const ticketsListId1 = document.getElementById("ticketsListId1");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player1_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player1_Places[i]}</div>
      <div> ${Player1_Money[i]} </div>
      </div>`;
      ticketsListId1.innerHTML = textContent;
    }

    total[1] -= Number(amt_1);
    document.getElementById("val1").innerHTML = total[1];
  } else if (arrayname == 2) {
    Player2_Money.push(amt_1);
    Player2_Places.push(pl_);
    const ticketsListId2 = document.getElementById("ticketsListId2");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player2_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player2_Places[i]}</div>
      <div> ${Player2_Money[i]} </div>
      </div>`;
      ticketsListId2.innerHTML = textContent;
    }
    total[2] -= Number(amt_1);
    document.getElementById("val2").innerHTML = total[2];
  } else if (arrayname == 3) {
    Player3_Money.push(amt_1);
    Player3_Places.push(pl_);
    const ticketsListId3 = document.getElementById("ticketsListId3");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player3_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player3_Places[i]}</div>
      <div> ${Player3_Money[i]} </div>
      </div>`;
      ticketsListId3.innerHTML = textContent;
    }
    total[3] -= Number(amt_1);
    document.getElementById("val3").innerHTML = total[3];
  } else if (arrayname == 4) {
    Player4_Money.push(amt_1);
    Player4_Places.push(pl_);
    const ticketsListId4 = document.getElementById("ticketsListId4");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player4_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player4_Places[i]}</div>
      <div> ${Player4_Money[i]} </div>
      </div>`;
      ticketsListId4.innerHTML = textContent;
    }
    total[4] -= Number(amt_1);
    document.getElementById("val4").innerHTML = total[4];
  } else if (arrayname == 5) {
    Player5_Money.push(amt_1);
    Player5_Places.push(pl_);
    const ticketsListId5 = document.getElementById("ticketsListId5");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player5_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player5_Places[i]}</div>
      <div> ${Player5_Money[i]} </div>
      </div>`;
      ticketsListId5.innerHTML = textContent;
    }
    total[5] -= Number(amt_1);
    document.getElementById("val5").innerHTML = total[5];
  } else if (arrayname == 6) {
    Player6_Money.push(amt_1);
    Player6_Places.push(pl_);
    const ticketsListId6 = document.getElementById("ticketsListId6");
    textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player6_Money.length; i++) {
      textContent += `<div class = "ticketName" >
      <div>${Player6_Places[i]}</div>
      <div> ${Player6_Money[i]} </div>
      </div>`;
      ticketsListId6.innerHTML = textContent;
    }
    total[6] -= Number(amt_1);
    document.getElementById("val6").innerHTML = total[6];
  }
};

const shortList = () => {
  if (Number(total[1]) === 0 && Player1_Places.length === 0) {
    document.getElementById("playerboxClassId1").style.display = "none";
  } else if (Number(total[2]) === 0 && Player2_Places.length == 0) {
    document.getElementById("playerboxClassId2").style.display = "none";
  } else if (Number(total[3]) === 0 && Player3_Places.length === 0) {
    document.getElementById("playerboxClassId3").style.display = "none";
  } else if (Number(total[4]) === 0 && Player4_Places.length === 0) {
    document.getElementById("playerboxClassId4").style.display = "none";
  } else if (Number(total[5]) === 0 && Player5_Places.length === 0) {
    document.getElementById("playerboxClassId5").style.display = "none";
  } else if (Number(total[6]) === 0 && Player6_Places.length == 0) {
    document.getElementById("playerboxClassId6").style.display = "none";
  }
};

const Sold = () => {
  count = 0;
  console.log("Name of the person who purchased " + arrayname);
  console.log("Number of the place is " + arraynumber);
  console.log("Who is selling " + who_is_selling);
  document.getElementById("Sellin_Place").classList.add("unshow");
  enitrePlayerPage.classList.remove("unshow");
  document.getElementById("SoldId").disabled = true;
  document.getElementById("SellingtoBankId").disabled = false;
  if (who_is_selling === 1) {
    let amt_1 = Player1_Money.splice(arraynumber, 1)[0];
    let pl_ = Player1_Places.splice(arraynumber, 1)[0];
    const ticketsListId1 = document.getElementById("ticketsListId1");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player1_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player1_Places[i]}</div>
        <div> ${Player1_Money[i]} </div>
        </div>`;
      ticketsListId1.innerHTML = textContent;
    }
    if (Player1_Money.length === 0) {
      ticketsListId1.innerHTML = "";
    }
    total[1] += Number(amt_1);
    document.getElementById("val1").innerHTML = total[1];
    Iffffff(arrayname, amt_1, pl_);
  } else if (who_is_selling === 2) {
    let amt_1 = Player2_Money.splice(arraynumber, 1)[0];
    let pl_ = Player2_Places.splice(arraynumber, 1)[0];
    const ticketsListId2 = document.getElementById("ticketsListId2");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player2_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player2_Places[i]}</div>
        <div> ${Player2_Money[i]} </div>
        </div>`;
      ticketsListId2.innerHTML = textContent;
    }
    if (Player2_Money.length === 0) {
      ticketsListId2.innerHTML = "";
    }
    total[2] += Number(amt_1);
    document.getElementById("val2").innerHTML = total[2];
    Iffffff(arrayname, amt_1, pl_);
  } else if (who_is_selling === 3) {
    let amt_1 = Player3_Money.splice(arraynumber, 1)[0];
    let pl_ = Player3_Places.splice(arraynumber, 1)[0];
    const ticketsListId3 = document.getElementById("ticketsListId3");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player3_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player3_Places[i]}</div>
        <div> ${Player3_Money[i]} </div>
        </div>`;
      ticketsListId3.innerHTML = textContent;
    }
    if (Player3_Money.length === 0) {
      ticketsListId3.innerHTML = "";
    }
    total[3] += Number(amt_1);
    document.getElementById("val3").innerHTML = total[3];
    Iffffff(arrayname, amt_1, pl_);
  } else if (who_is_selling === 4) {
    let amt_1 = Player4_Money.splice(arraynumber, 1)[0];
    let pl_ = Player4_Places.splice(arraynumber, 1)[0];
    const ticketsListId4 = document.getElementById("ticketsListId4");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player4_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player4_Places[i]}</div>
        <div> ${Player4_Money[i]} </div>
        </div>`;
      ticketsListId4.innerHTML = textContent;
    }
    if (Player4_Money.length === 0) {
      ticketsListId4.innerHTML = "";
    }
    total[4] += Number(amt_1);
    document.getElementById("val4").innerHTML = total[4];
    Iffffff(arrayname, amt_1, pl_);
  } else if (who_is_selling === 5) {
    let amt_1 = Player5_Money.splice(arraynumber, 1)[0];
    let pl_ = Player5_Places.splice(arraynumber, 1)[0];
    const ticketsListId5 = document.getElementById("ticketsListId5");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player5_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player5_Places[i]}</div>
        <div> ${Player5_Money[i]} </div>
        </div>`;
      ticketsListId5.innerHTML = textContent;
    }
    if (Player5_Money.length === 0) {
      ticketsListId5.innerHTML = "";
    }
    total[5] += Number(amt_1);
    document.getElementById("val5").innerHTML = total[5];
    Iffffff(arrayname, amt_1, pl_);
  } else if (who_is_selling === 6) {
    let amt_1 = Player6_Money.splice(arraynumber, 1)[0];
    let pl_ = Player6_Places.splice(arraynumber, 1)[0];
    const ticketsListId6 = document.getElementById("ticketsListId6");
    let textContent = ``;
    console.log("This is working ");
    for (let i = 0; i < Player6_Money.length; i++) {
      textContent += `<div class = "ticketName" >
        <div>${Player6_Places[i]}</div>
        <div> ${Player6_Money[i]} </div>
        </div>`;
      ticketsListId6.innerHTML = textContent;
    }
    total[6] += Number(amt_1);
    document.getElementById("val2").innerHTML = total[6];
    if (Player6_Money.length === 0) {
      ticketsListId6.innerHTML = "";
    }
    Iffffff(arrayname, amt_1, pl_);
  }
};

const annoucingWinner = () => {
  let t1 = 0;
  let t2 = 0;
  let t3 = 0;
  let t4 = 0;
  let t5 = 0;
  let t6 = 0;
  let winnerarray;
  if (numberofplayer === 2) {
    t1 = total[1];
    t2 = total[2];
    for (let i = 0; i < Player1_Money.length; i++) {
      t1 += Number(Player1_Money[i]);
    }
    for (let i = 0; i < Player2_Money.length; i++) {
      t2 += Number(Player2_Money[i]);
    }

    winnerarray = [
      [t1, 1],
      [t2, 2],
    ];
  } else if (numberofplayer == 3) {
    t1 = total[1];
    t2 = total[2];
    t3 = total[3];
    for (let i = 0; i < Player1_Money.length; i++) {
      t1 += Number(Player1_Money[i]);
    }
    for (let i = 0; i < Player2_Money.length; i++) {
      t2 += Number(Player2_Money[i]);
    }
    for (let i = 0; i < Player3_Money.length; i++) {
      t3 += Number(Player3_Money[i]);
    }
    winnerarray = [
      [t1, 1],
      [t2, 2],
      [t3, 3],
    ];
  } else if (numberofplayer == 4) {
    t1 = total[1];
    t2 = total[2];
    t3 = total[3];
    t4 = total[4];
    for (let i = 0; i < Player1_Money.length; i++) {
      t1 += Number(Player1_Money[i]);
    }
    for (let i = 0; i < Player2_Money.length; i++) {
      t2 += Number(Player2_Money[i]);
    }
    for (let i = 0; i < Player3_Money.length; i++) {
      t3 += Number(Player3_Money[i]);
    }
    for (let i = 0; i < Player4_Money.length; i++) {
      t4 += Number(Player4_Money[i]);
    }
    winnerarray = [
      [t1, 1],
      [t2, 2],
      [t3, 3],
      [t4, 4],
    ];
  } else if (numberofplayer == 5) {
    t1 = total[1];
    t2 = total[2];
    t3 = total[3];
    t4 = total[4];
    t5 = total[5];
    for (let i = 0; i < Player1_Money.length; i++) {
      t1 += Number(Player1_Money[i]);
    }
    for (let i = 0; i < Player2_Money.length; i++) {
      t2 += Number(Player2_Money[i]);
    }
    for (let i = 0; i < Player3_Money.length; i++) {
      t3 += Number(Player3_Money[i]);
    }
    for (let i = 0; i < Player4_Money.length; i++) {
      t4 += Number(Player4_Money[i]);
    }
    for (let i = 0; i < Player5_Money.length; i++) {
      t5 += Number(Player5_Money[i]);
    }
    winnerarray = [
      [t1, 1],
      [t2, 2],
      [t3, 3],
      [t4, 4],
      [t5, 5],
    ];
  } else if (numberofplayer == 6) {
    t1 = total[1];
    t2 = total[2];
    t3 = total[3];
    t4 = total[4];
    t5 = total[5];
    t6 = total[6];
    for (let i = 0; i < Player1_Money.length; i++) {
      t1 += Number(Player1_Money[i]);
    }
    for (let i = 0; i < Player2_Money.length; i++) {
      t2 += Number(Player2_Money[i]);
    }
    for (let i = 0; i < Player3_Money.length; i++) {
      t3 += Number(Player3_Money[i]);
    }
    for (let i = 0; i < Player4_Money.length; i++) {
      t4 += Number(Player4_Money[i]);
    }
    for (let i = 0; i < Player5_Money.length; i++) {
      t5 += Number(Player5_Money[i]);
    }
    for (let i = 0; i < Player6_Money.length; i++) {
      t6 += Number(Player6_Money[i]);
    }
    winnerarray = [
      [t1, 1],
      [t2, 2],
      [t3, 3],
      [t4, 4],
      [t5, 5],
      [t6, 6],
    ];
  }
  winnerarray.sort();
  console.log("the name list is  " + winnerarray);
  console.log(Player1_Money);
  enitrePlayerPage.classList.add("unshow");
  document.getElementById("winnersect").classList.remove("unshow");
  let textContent = "";
  for (let i = numberofplayer - 1; i >= 0; i--) {
    textContent += `<p> ${list[winnerarray[i][1] - 1]}  ${
      winnerarray[i][0]
    } <\p>`;
  }
  document.getElementById(
    "windiv"
  ).innerHTML = `<p>Congratulations! The Rank is <\p>  ${textContent}`;
};
