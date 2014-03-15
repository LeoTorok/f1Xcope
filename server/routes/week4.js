/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week4', {
            title: 'Week4 (How do we assemble genomes? Part 1)'
        });
    };
};

var wk4 = require('../solvers/Week4Solvers');
var solvers =
    {
        solver4 : wk4.week4Solver()
    };


exports.string_composition = function() {
    return function(req, res) {
        res.json({ result : solvers.solver4.string_composition (req.body.k, req.body.dna) });
    };
};

exports.overlap_graph = function() {
    return function(req, res) {
        res.json({ result : solvers.solver4.overlap_graph (req.body.dna) });
    };
};

exports.de_Bruijn_graph_from_string = function() {
    return function(req, res) {
        res.json({ result : solvers.solver4.de_Bruijn_graph_from_string (req.body.k, req.body.dna) });
    };
};

exports.de_Bruijn_graph_from_kamers = function() {
    return function(req, res) {
        res.json({ result : solvers.solver4.de_Bruijn_graph_from_kamers (req.body.dna) });
    };
};


exports.eulerian_cycle = function() {
    return function(req, res) {
        res.json({ result : solvers.solver4.eulerian_cycle (req.body.data) });
    };
};

