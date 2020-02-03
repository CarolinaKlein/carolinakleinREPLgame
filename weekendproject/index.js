let  readlineSync  =  require('readline-sync');
function startGame() {
  const introQuote = readlineSync.question("Let's Build A Zero Waste Bathroom!")
}

startGame()

console.log("What kind of lifestyle do you live?")

lifeStyleLevel = ["Luxurious", "Frugal", "Fun"]

index = readlineSync.keyInSelect(lifeStyleLevel, "   ", {cancel: false})//


const lifeStyle = ["Luxurious", "Frugal", "Fun"]
const shampooBar = ["'Humankind'", "'Love Beauty and Planet'","'HiBar'"]
const bodyBar = ["'Fresh Sugar Bar'", "'Dove'" , "'Duke Cannon Big Ass Bar of Soap'"]
const funExtras = ["'Leaf razor'", "'Who gives a crap Toilet paper'", "'Eggplant bath bomb'"]

const zeroWasteWC = lifeStyleSelection => {
  if (lifeStyleSelection === "Luxurious") {
    console.log("     ")
    console.log ("You should try the " +[shampooBar[0]] + " Shampoo Bar,")
    console.log ("The " +bodyBar[0]+ " body wash bar,")
    console.log ("And the " + [funExtras[0]] + ", which is a triple blade safety razor that will last you for decades.")
  } else if (lifeStyleSelection === "Frugal") {
    console.log ("You should try the " +[shampooBar[1], bodyBar[1], funExtras[1]])
  } else if (lifeStyleSelection === "Fun") {
    console.log ("You should try the " +[shampooBar[2], bodyBar[2], funExtras[2]])
  }
  }

zeroWasteWC(lifeStyleLevel[index])
console.log("          ")
readlineSync.keyIn("Press any key to continue...")
console.clear()

let question = ["yes", "no"]
console.log("Are you satisfied with your results")

index = readlineSync.keyInSelect(question, "   ", {cancel: false})
if (question[index] === "yes") {
  console.log("       ")
  console.log("Excellent! It seems like we are in a roll...")
  console.log("Why not move on to building a zero waste kitchen then?")
  const kitchenQuestion = readlineSync.question("\nAt what level are your home-cooking skills?")


skillLevel = ["Terrible, that’s why I eat out for every meal", "I make Beef Wellington’s twice a week"]

index = readlineSync.keyInSelect(skillLevel, "Choose between 1 or 2", {cancel: false})


const badCook = ["Travel utensils case" , "Kinto coffee tumbler" , "Containers to go" ]
const frequentCook = ["Farmer’s market produce bags", "Bee’s wax wrapping paper", "Coffee French press"]

console.log(" ")
if (skillLevel[index] === "Terrible, that’s why I eat out for every meal") {
  console.log(badCook)
} else {
  console.log(frequentCook)
}
console.log("        ")
console.log("You have done great work here today! We are so happy that you are on this journey towards Zero Waste with us.") //If you want you can play again and choose a different path.

let playAgain = readlineSync.question("\nIf you want you can play again and choose a different path...")

playAgain = ["I want to choose a different path", "I like my path but I want more!", "I have played all paths possible already "]

index = readlineSync.keyInSelect(playAgain, "Choose between 1 or 3", {cancel: false})

if (playAgain[index] === "I want to choose a different path") {
  startGame();
 } else if (playAgain[index] === "I like my path but I want more!"){
    wantMoreRandom ()
 } else {
 console.log("\nHave a great day and come back any time! And remember, you can’t do all the good the world needs, but the world needs all the good you can do.")
} 

} else {

  console.log("We are sorry to hear. Perhaps some of the following items will interest you more.")
  const genderQuestion = readlineSync.question("\nFirst, tell me more about yourself. Are you a man or a woman? ")

genderSelection = ["Man", "Woman"]

index = readlineSync.keyInSelect (genderSelection, "Choose between 1 or 2", {cancel: false})

const menItems = [ "Duke Cannon Shampoo Puck" ,
	     "The art of shaving shaving cream bar" ,
 	     "Bamboo toothbrush" ,
	     "Package free Georganics Mouthwash tablets" ,
	     "Unpaste Zero Waste Toothpaste Tablets" ,
	     "Bath bristle brush", "Soap Saver Pad"]
 const womenItems = ["Reusable makeup wipes", "Diva Cup", "Thinkx woman’s underwear", "Bamboo toothbrush", "Lush tub of shaving cream" , "Unpaste Zero Waste Toothpaste Tablets" , "Meow Meow Tweet Plastic Free Deodorant","Bath bristle brush", "Soap Saver Pad"]  

//In the following, I am generating a random Index within the men/women items array. 

console.log(" ")
if (genderSelection[index] === "Man") {
  console.log("Here are three randomly selected items especially for you and your manly needs")
  console.log("  ")
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
  console.log("\nEnd of the game.\n\nHave a great day and come back any time! And remember, you can’t do all the good the world needs, but the world needs all the good you can do.")
} else {
  console.log("Here are three randomly selected items especially for you and your womanly needs")
  console.log("   ")
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log("\nEnd of the game.\nHave a great day and come back any time! And remember, you can’t do all the good the world needs, but the world needs all the good you can do.")
}
}
function wantMoreRandom () {

const genderQuestion = readlineSync.question("\nTell me more about yourself, are you a man or a woman? ")

genderSelection = ["Man", "Woman"]

index = readlineSync.keyInSelect (genderSelection, "Choose between 1 or 2", {cancel: false})

const menItems = [ "Duke Cannon Shampoo Puck" ,
	     "The art of shaving shaving cream bar" ,
 	     "Bamboo toothbrush" ,
	     "Package free Georganics Mouthwash tablets" ,
	     "Unpaste Zero Waste Toothpaste Tablets" ,
	     "Bath bristle brush", "Soap Saver Pad"]
 const womenItems = ["Reusable makeup wipes", "Diva Cup", "Thinkx woman’s underwear", "Bamboo toothbrush", "Lush tub of shaving cream" , "Unpaste Zero Waste Toothpaste Tablets" , "Meow Meow Tweet Plastic Free Deodorant","Bath bristle brush", "Soap Saver Pad"]  

console.log(" ")
if (genderSelection[index] === "Man") {
  console.log("Here are three randomly selected items especially for you and your manly needs")
  console.log("  ")
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
  console.log(menItems[Number(Math.floor(Math.random() * menItems.length))])
   console.log("\nEnd of the game.\nHave a great day and come back any time! And remember, you can’t do all the good the world needs, but the world needs all the good you can do.")
} else {
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log(womenItems[Number(Math.floor(Math.random() * womenItems.length))])
  console.log("\nEnd of the game.\nHave a great day and come back any time! And remember, you can’t do all the good the world needs, but the world needs all the good you can do.")

}
}








