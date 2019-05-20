const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
	Name: {
		type: String,
		required: true,
		trim: true,
	},
	UserName: {
		type: String,
		required: true,
		trim: true,
	},
    userImg:{
        type:String,
	},
	img1:{
        type:String,
	},
	img2:{
        type:String,
	},
	img3:{
        type:String,
	},
	img4:{
        type:String,
	},
	img5:{
        type:String,
	}
	
});

module.exports = Product;
