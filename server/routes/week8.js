/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week8', {
            title: 'Week 8: Are There Fragile Regions in the Human Genome?'
        });
    };
};

var solver = require('../solvers/Week8Solvers').week8Solver();

exports.greedy_sorting = function() {
    return function(req, res) {
        res.json({ result : solver.greedy_sorting (req.body.input) });
    };
};

exports.number_of_breakpoints = function() {
    return function(req, res) {
        res.json({ result : solver.number_of_breakpoints (req.body.input) });
    };
};

exports.two_break_distance = function() {
    return function(req, res) {
        res.json({ result : solver.two_break_distance (req.body.p, req.body.q) });
    };
};


exports.shared_kmer_problem = function() {
    return function(req, res) {
        res.json({ result : solver.shared_kmer_problem (req.body.k, req.body.first, req.body.second) });
    };
};








