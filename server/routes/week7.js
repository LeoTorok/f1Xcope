/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week7', {
            title: 'Week7 (How Do We Compare Biological Sequences? (Part 2)'
        });
    };
};

var solver = require('../solvers/Week7Solvers').week7Solver();

exports.edit_problem = function() {
    return function(req, res) {
        res.json({ result : solver.edit_problem (req.body.one, req.body.two) });
    };
};

exports.fitting_problem = function() {
    return function(req, res) {
        res.json({ result : solver.fitting_problem (req.body.one, req.body.two) });
    };
};

exports.overlap_alignment_problem = function() {
    return function(req, res) {
        res.json({ result : solver.overlap_alignment_problem (req.body.one, req.body.two,
                            parseInt(req.body.indel_penalty, 10), parseInt(req.body.match, 10),
                            parseInt(req.body.mismatch, 10)) });
    };
};


exports.affinity_alignment_problem = function() {
    return function(req, res) {
        res.json({ result : solver.affinity_alignment_problem (req.body.one, req.body.two, 'BlogSum62', -11, -1) });
    };
};

exports.middle_edge_in_linear_space_problem = function() {
    return function(req, res) {
        res.json({ result : solver.middle_edge_in_linear_space_problem (req.body.one, req.body.two, req.body.scoring, req.body.indel_penalty) });
    };
};







