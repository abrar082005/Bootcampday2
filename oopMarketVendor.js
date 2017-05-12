/* This is an OOP model based on market vendors to determine the tax and maintainability of the market.*/
function marketVendor(marketVName,marketVNumber,goods,lastYrNetworth,yrNetworth){
	this.marketVName = marketVName;
	this.marketVNumber = marketVNumber;
	this.goods = goods;
	this.lastYrNetworth = lastYrNetworth;
	this.yrNetworth = yrNetworth;
	this.profit = function (){
		this.profityr = this.yrNetworth - this.lastYrNetworth;
		return this.profityr
	}
	this.tax =fuction (){
		if (this.profityr >=0){
			this.taxyr = 0.1*this.profityr;
			return this.taxyr;
		}
		else{
			return "This market Vendor is in the red"
		}
	}
}

function headMarketVendor(marketVName,marketVNumber,goods,lastYrNetworth,yrNetworth){
	this.inheritsFrom = marketVendor;
	this.inheritsFrom ();
	this.marketMaintenance = function (){
		if (this.tax > 100000){
			return "Maintenance possible";
		}
		else{
			return 'Seek government assistance';
		}
	}
}
