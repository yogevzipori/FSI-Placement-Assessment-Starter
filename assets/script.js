// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Yogi Zipori" 

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Gingerbread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

let totals = document.querySelector("#qty-total");



document.getElementById('credit').textContent = `Created by ${yourName}`

/////////////////////////////////////////////////////////////////////////////

document.getElementById('add-gb').addEventListener('click', function() {
gb = gb +1;
document.querySelector("#qty-gb").textContent = gb;
totals.textContent = gb + cc + sugar; 
    
})


document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb -1;
    
    document.querySelector("#qty-gb").textContent = gb;
    totals.textContent = gb + cc + sugar; 

})

//////////////////////////////////////////////////////////////////////////////////
// Event listener for clicks on the "+" button for CC cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc +1;
    document.querySelector("#qty-cc").textContent = cc;
    totals.textContent = gb + cc + sugar; 
    
    })
    
    // Event listener for clicks on the "-" button for CC cookies
    
    document.getElementById('minus-cc').addEventListener('click', function() {
        cc = cc -1; 
        document.querySelector("#qty-cc").textContent = cc;
        totals.textContent = gb + cc + sugar; 


    })
//////////////////////////////////////////////////////////////////////////////////

document.getElementById('add-sugar').addEventListener('click', function(){
sugar = sugar +1; 
document.querySelector("#qty-sugar").textContent = sugar; 
totals.textContent = gb + cc + sugar; 

})

document.getElementById('minus-sugar').addEventListener('click', function(){
sugar = sugar -1;
document.querySelector("#qty-sugar").textContent = sugar; 
totals.textContent = gb + cc + sugar; 


})


