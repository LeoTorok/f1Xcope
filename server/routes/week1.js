/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week1', {
                title: 'Week1'
            });
    };
};


var wk1 = require('../solvers/Week1Solvers');
var solvers =
    {
        solver1 : wk1.week1Solver()
    };


exports.fwp = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.frequent_words_problem(req.body.data, req.body.length) });
    };
};

exports.rc = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.reverse_complement_problem(req.body.data) });
    };
};

//pattern matching problem
exports.pmp = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.pattern_matching_problem(req.body.pattern, req.body.genome) });
    };
};

//approximate pattern matching problem
exports.approx_pmp = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.approximate_pattern_matching_problem(req.body.pattern, req.body.genome, req.body.maxDif) });
    };
};

//clump finding problem
exports.cfp = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.clump_finding_problem(solvers.solver1,
                                                req.body.genome, req.body.k, req.body.L, req.body.f) });
    };
};

//skew
exports.skew = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.skew(req.body.genome) });
    };
};

//min_skew
exports.min_skew = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.min_skew.apply(solvers.solver1, [req.body.genome]) });
    };
};

//frequent_words_with_mismatches_problem
exports.frequent_words_with_mismatches_problem  = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.frequent_words_with_mismatches_problem.apply(solvers.solver1,
            [req.body.genome, req.body.patternLength, req.body.maxDifferences]) });
    };
};

exports.frequent_words_with_mismatches_and_reverse_complement_problem  = function() {
    return function(req, res) {
        res.json({ result : solvers.solver1.frequent_words_with_mismatches_and_reverse_complement_problem.apply(solvers.solver1,
            [req.body.genome, req.body.patternLength, req.body.maxDifferences]) });
    };
};

