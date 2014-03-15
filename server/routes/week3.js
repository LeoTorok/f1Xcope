/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week3', {
            title: 'Week3 (Dna molecular clocks)'
        });
    };
};

var wk1 = require('../solvers/Week1Solvers');
var wk2 = require('../solvers/Week2Solvers');
var wk3 = require('../solvers/Week3Solvers');
var solvers =
    {
        solver1 : wk1.week1Solver(),
        solver2 : wk2.week2Solver(),
        solver3 : wk3.week3Solver()
    };


exports.motif_enumeration = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.motif_enumeration (req.body.k, req.body.d, req.body.dna) });
    };
};

exports.median_string = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.median_string (req.body.k, req.body.dna) });
    };
};



exports.profile_most_probable_kmer = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.profile_most_probable_kmer (req.body.dna, req.body.k, req.body.profiledata) });
    };
};

exports.greedy_motif_search = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.greedy_motif_search (req.body.k, req.body.t, req.body.dna, req.body.usePseudoCode) });
    };
};

exports.randomized_motif_search = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.randomized_motif_search (req.body.k, req.body.t, req.body.dna) });
    };
};

exports.gibbs_sampler = function() {
    return function(req, res) {
        res.json({ result : solvers.solver3.gibbs_sampler(req.body.k, req.body.t, req.body.N, req.body.dna) });
    };
};


