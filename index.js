class CoffeeShop {
	constructor(name, menu, orders = []) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}

	addOrder(name) {



		if (this.menu.find(x => x.item === name)) {

			this.orders.push(name)
			return this.orders + " Order added!";

		}
		else {
			return "This item is currently unavailable!"
		}
	}


	fulfillOrder() {
		if (this.orders.length > 0) {
			return `The ${this.orders} is ready!`
		}
		return "All orders have been fulfilled!"

	}

	listOrders() {

		return this.orders
	}
	dueAmount() {
		let total = 0;
		for (let i = 0; i < this.menu.length; i++) {
			for (let i = 0; i < this.orders.length; i++) {
				if (this.menu[i].item === this.orders[i]) {
					total = total + this.menu[i].price
					
				}
				
			}
			return total
			
		}
		
		
		 
		


	}

	// cheapestItem() {
	// 	let m = Math.min.apply(null, this.menu.map(function(item) {
	// 		return item.price ;
	// 	  }))
	// 	  return `cheapest item is ${this.menu.item } : ${m}`
		
	// }
	cheapestItem() {
		let lowest = this.menu[0]
		for (let i = 0; i < this.menu.length; i++) {
			if (this.menu[i].price < lowest.price) {
				lowest = this.menu[i]
				
			}
	
		}
		return lowest.item
	}

	drinksOnly() {
		const drinks = []
		for (let i = 0; i < this.menu.length; i++) {
			if (this.menu[i].type === "drink") { 
				drinks.push(this.menu[i].item)
				
			}

		}
		return drinks
	}
	foodOnly(){
		const food = [];
		for (let i = 0; i < this.menu.length; i++) {
			if (this.menu[i].type === "food") {
				food.push(this.menu[i].item)
			}
		}
		return food
	}
}

const tcs = new CoffeeShop("Cafe Coffee Day", [
	{ item: "Cheese Cake", type: "food", price: 2.29 },
	{ item: "Chocolate Roll", type: "food", price: 3.29 },
	{ item: "Barista Coffee", type: "drink", price: 3.29 },
	{ item: "Expresso", type: "drink", price: 2.29 },
	{ item: "Black Coffee", type: "drink", price: 1.29 }

])

console.log(tcs)


console.log(tcs.addOrder("hot cocoa"))
// 
"This item is currently unavailable!"
console.log(tcs.addOrder("Cheese Cake"))
console.log(tcs.addOrder("Expresso"))
console.log(tcs.addOrder("Barista Coffee"))
console.log(tcs.fulfillOrder())
console.log(tcs.listOrders())

console.log(tcs.dueAmount())

console.log(tcs.cheapestItem())

console.log(tcs.drinksOnly())

console.log(tcs.foodOnly())