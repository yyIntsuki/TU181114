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
    })
};

exports.details = function(req,res){
    Product.finById(req.params.id, function(err, product){
        if(err) return next(err);
        res.send(product);
    });
};

exports.update = function(req,res){
    Product.finById(req.params.id,{$set: req.body}, function(err, product){
        if(err) return next(err);
        res.send('product updated');
    });
};

exports.delete = function(req,res){
    Product.findByIdAndDelete(req.params.id, {$set: req.body}, function(err, product){
        if (err) return next(err);
        res.send('Product deleted')
    });
};