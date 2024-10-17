const prompt = require('prompt-sync')()
const username = prompt('What is your name?')
console.log(`Your name is ${username}?`)

if(username === 'Justin'){
console.log("There can only be one, you are dead")
}else {
    console.log(`Good day to you ${username}!`)
}

const prompt2 = require('prompt-sync')()
const chooseDirection = prompt2('There is a fork in the road, which way are you walking? ')

if(chooseDirection === 'right'){
    console.log('You come upon a downed tree')
const prompt3 = require('prompt-sync')()
const downedTree = prompt3('How would you like to proceed? Over or Under? ')
if(downedTree === 'Over'){
    console.log('You hop over, and continue on foot')
} else if (downedTree === 'Under'){
    console.log('You have bumped your head, and drift into a dream')
    const prompt4 = require('prompt-sync')()
    const underTree = prompt4('In your dream state you have met your shadow self who is leading you on a journey, type "Go" to continue on the journey, or "Wake Up" to wake up out of the dream ')
if(underTree === 'Go'){
    console.log('Your shadow self starts showing your life through a reflected perspective.')
    const prompt5 = require('prompt-sync')()
    const dream = prompt5('you can "Resist", or "Accept" ')
if( dream === 'Accept'){
    console.log('You have become englightened')
} else {
    console.log('You have reentered the endless cycle of Samsara')
}
} else {
    console.log('You are awake, and your head is sore, maybe you should get some rest')
}
}
} else {
    console.log('Your steed awaits!')
     
}

    const prompt6 = require('prompt-sync')()
    const rideSteed = prompt6('While on your steed, you encounter another knight. You do not recognize their coat of arms, they could be dangerous! Fight or Continue ')  

if(rideSteed === 'Fight'){
    console.log('You ride over to the knight at a blazing speed and swing your sword, the knight is a worthy adversary and parries, you continute to trade blows until you are both exhausted. The knight holds out their hand for truce.')

    const prompt7 = require('prompt-sync')()
    const friend = prompt('You may either "dap-up" the knight, or "sever" their hand ')
if(friend === 'dap-up'){
    console.log('You have dapped up thy knight, and are now friends')
} else {
    console.log('You have severed the knights arm, they are astonished, and hurt (emtionally, and physically). You take one last swing at their neck and sever their head! +1 Respect in the Realm')
}

} else {
    console.log('You continue on your merry way, heeding a life of adventure, never getting too close to another person')
}
