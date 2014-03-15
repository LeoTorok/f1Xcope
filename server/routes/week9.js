/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week9', {
            title: 'Week 9: Chapter 7 How Do We Locate Disease-Causing Mutations??'
        });
    };
};

var solver = require('../solvers/Week9Solvers').week9Solver();

exports.trie_construction_problem = function() {
    return function(req, res) {
        res.json({ result : solver.trie_construction_problem (req.body.input) });
    };
};

exports.multiple_pattern_matching_problem = function() {
    return function(req, res) {
        res.json({ result : solver.multiple_pattern_matching_problem (req.body.input) });
    };
};

exports.longest_repeat_problem = function() {
    return function(req, res) {
        res.json({ result : solver.longest_repeat_problem (req.body.input) });
    };
};