/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

//Let's Shop!

/*Here the classes "food" and "clothes" are created with the parameters "name", "price" and "quantity" that are pushed to the properties. */
class Food {
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }    
}

class Clothes {
    constructor(name, price, qty){
        this.name = name;
        this.price = price;   
        this.qty = qty;     
    }    

}


/*In the class "main", the majority of the functionality is introduced via the various methods: handleFood, handleCothes, and showOnion etc. The 2 arrays this.food and this.clothes are created and are empty initially. */
class Main{
    
    constructor(){
        this.food = [];
        this.clothes = [];
    }

    /*In the method below, the variables are created that call the methods inside of the main class, for example this.showOnion. In the first example, this.showOnion uses the return (the user response) from the method showOnion (prompt "How many onions?") and this return becomes the onionQty. This will also push the new Food object into the array this.food and assign the properties listed inside of the parantheses (name, price, quantity). It goes through each object, the it returns the this.food array.  */

    handleFood() {

        let onionQty = this.showOnion();
        this.food.push(new Food("onion", 0.50, onionQty));

        let garlicQty = this.showGarlic();
        this.food.push(new Food("garlic", 0.25, garlicQty));

        let tomatoQty = this.showTomato();
        this.food.push(new Food("tomato", 0.50, tomatoQty));

        let meatQty = this.showMeat();
        this.food.push(new Food("meat", 10.00, meatQty));

        return(this.food)
    }
    
    handleClothes() {

        let hatQty = this.showHat();
        this.clothes.push(new Clothes("hat", 30.00, hatQty));

        let handbagQty = this.showHandbag();
        this.clothes.push(new Clothes("handbag", 250.00, handbagQty));

        let dressQty = this.showDress();
        this.clothes.push(new Clothes("dress", 150.00, dressQty));

        return(this.clothes)
    }

    showOnion(){
        return prompt(`
        How many Onions?
        `)
    }

    showGarlic(){
        return prompt(`
        How many Garlics?
        `)
    }
        
    showTomato(){
        return prompt(`
        How many Tomatos?
        `)
    }

    showMeat(){
        return prompt(`
        How many lbs of Meat?
        `)
    }

    showHat(){
        return prompt(`
        How many Hats?
        `)
    }

    showHandbag(){
        return prompt(`
        How many Handbags?
        `)
    }
        
    showDress(){
        return prompt(`
        How many Dresses?
        `)
    }

}


/*Below, the Main class is called with the method handleFood being called. The variable handleFoodArray is generated with it being assigned the handleFood array (since the handleFood method returns an array). This means it contains the array with the elements the user selected via the prompts above.  */

alert("Let's shop for food!");

let main = new Main();
let handleFoodArray = main.handleFood();

/*The user is also given the option to go clothes shopping via the prompt below with the responses Y or N. The "if" statement below will run the method handleClothes from the main class if the user answers "Y". The variable handleClothesArray populates the same way as the handleFoodArray, as explained above.*/

let shopForClothes = prompt("Do you also want to shop for clothes? Y/N");

let handleClothesArray;
if (shopForClothes == "Y"){
    handleClothesArray = main.handleClothes();
}


/*The variable foodDescription is generated as an empty string at first. The the "for" loop runs through the handleFoodArray in it's entirity and assigns to foodDescription the concatenated string of the item number (starting at 1, where i+1 is used, since i starts at 0) then the name element stored in the array at the particular index plus the string "quantity" and then the quantity element stored in the array. \n is used to break the line when printing, for visual clarity. */

let foodDescription = "";
for(let i = 0; i < handleFoodArray.length; i++){
    foodDescription =  foodDescription + (i+1) + ". Item: " + handleFoodArray[i].name + ", Quantity: " + handleFoodArray[i].qty + "\n";
}

let clothesDescription = "";
for(let i = 0; i < handleClothesArray.length; i++){
    clothesDescription =  clothesDescription + (i+1) +". Item: " + handleClothesArray[i].name + ", Quantity: " + handleClothesArray[i].qty + "\n";
}

/*In the variable removeFood, another prompt is used to ask the user if they want to remove food from the handleFood array. It lists the foodDescription, which contains the user's items they selected and that was stored in the foodDescription variable. So it displays the user's "cart", and if they want to remove an item, they need to type the item number, or if they don't want to removeany items, they type "0". If the user types anything besides "0", the if loop runs, splicing/removing a value from the handleFoodArray. This is achieved by using the value to user assigned to removeFood (the item they want to remove), and subtracting one, (which accounts for the index at 0) and removes the element at that index. The "1" after this tells the number of items to remove at that point.*/

let removeFood = prompt('Food list: \n' + foodDescription + '\n Would you like to remove any item? If not, type 0.')

if(removeFood > 0){
    handleFoodArray.splice(removeFood-1,1);
}

let removeClothes = prompt('Clothes list: \n' + clothesDescription + '\n Would you like to remove any item? If not, type 0.')

if(removeClothes > 0){
    handleClothesArray.splice(removeClothes-1,1);
}

/*The foodDescription variable is created as an empty string. The for loop loops through the handleFoodArray and displays all of the items in the "cart, as was done above in the first time the variable was assigned. It has since been overwritten by the new array, which no longer contains what the user spliced from the array. So this is just an updated "cart".*/

foodDescription = "";
for(let i = 0; i < handleFoodArray.length; i++){
    foodDescription =  foodDescription + (i+1) + ". Item: " + handleFoodArray[i].name + ", Quantity: " + handleFoodArray[i].qty + "\n";
}

clothesDescription = ""
for(let i = 0; i < handleClothesArray.length; i++){
    clothesDescription =  clothesDescription + (i+1) +". Item: " + handleClothesArray[i].name + ", Quantity: " + handleClothesArray[i].qty + "\n";
}

/*Finally, the total items in the cart is displayed via an alert that states a string, concatenated with the foodDescription variable (containing the list of food being stored inside the handleFoodArray) and some \n line break. It also does the same for the clothes cart. */

alert('Your final list is:\n Food: \n' + foodDescription + '\n Clothes: \n'+ clothesDescription)
