/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week6', {
            title: 'Week6 (How Do We Compare Biological Sequences? (Part 1)'
        });
    };
};

var solver = require('../solvers/Week6Solvers').week6Solver();

exports.change_problem = function() {
    return function(req, res) {
        res.json({ result : solver.change_problem (req.body.data, req.body.n) });
    };
};

exports.manhattan_tourist = function() {
    return function(req, res) {
        res.json({ result : solver.manhattan_tourist (req.body.n, req.body.m, req.body.data) });
    };
};

exports.output_lcs = function() {
    return function(req, res) {
        res.json({ result : solver.output_lcs (req.body.string1, req.body.string2) });
    };
};



exports.longest_path_in_dag = function() {
    return function(req, res) {
        res.json({ result : solver.longest_path_in_dag (req.body.source, req.body.sink, req.body.data) });
    };
};


exports.global_alignment_problem = function() {
    return function(req, res) {
        res.json({ result : solver.global_alignment_problem (req.body.one, req.body.two) });
    };
};


exports.local_alignment_problem = function() {
    return function(req, res) {
        res.json({ result : solver.local_alignment_problem (req.body.one, req.body.two) });
    };
};









