var Product = require('../models/product.model');

exports.create = function(req,res){
    var product = new Product({
        name: req.body.name,
        price:req.body.price
    });

    product.save(function(error){
        if(error){
            return next(error);
        }
        res.send('Product created');
    });
};
// fetches the products from db
exports.list = function(req,res){
    Product.find(function(err, product){
        if (err) return next(err);

       res.send(product);
    });
};

exports.details = function(req,res){
    product.collection('products').find({ projection: {_id: 0} }).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
    });
};

/* exports.details = function(req,res){
    Product.findById(req.params.id, function(err, product){
        if(err) return next(err);
        res.send(product);
    });
}; */

exports.update = function(req,res){
    Product.findById(req.params.id,{$set: req.body}, function(err, product){
        if(err) return next(err);
        res.send('Product updated');
    });
};

exports.delete = function(req,res){
    Product.findByIdAndDelete(req.params.id, {$set: req.body}, function(err, product){
        if (err) return next(err);
        res.send('Product deleted')
    });
};