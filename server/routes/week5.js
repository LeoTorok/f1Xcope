/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week5', {
            title: 'Week5 (How do we assemble genomes? Part 2)'
        });
    };
};

var wk5 = require('../solvers/Week5Solvers');
var solvers =
    {
        solver5 : wk5.week5Solver()
    };


exports.eulerian_path = function() {
    return function(req, res) {
        res.json({ result : solvers.solver5.eulerian_path (req.body.data) });
    };
};

exports.string_reconstruction = function() {
    return function(req, res) {
        res.json({ result : solvers.solver5.string_reconstruction (req.body.data) });
    };
};

exports.universal_string = function() {
    return function(req, res) {
        res.json({ result : solvers.solver5.universal_string (req.body.k) });
    };
};

exports.string_reconstruction_from_read_pairs = function() {
    return function(req, res) {
        res.json({ result : solvers.solver5.string_reconstruction_from_read_pairs (req.body.d, req.body.data) });
    };
};


exports.contig_generation = function() {
    return function(req, res) {
        res.json({ result : solvers.solver5.contig_generation (req.body.data) });
    };
};





