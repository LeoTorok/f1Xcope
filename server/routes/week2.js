/// <reference path="../solvers/serverside_references.ts" />

/*
 * GET home page.
 */

exports.index = function() {
    return function(req, res) {
        res.render('week2', {
            title: 'Week2 (Rna)'
        });
    };
};



var wk1 = require('../solvers/Week1Solvers');
var wk2 = require('../solvers/Week2Solvers');
var solvers =
    {
        solver1 : wk1.week1Solver(),
        solver2 : wk2.week2Solver()
    };


exports.translate_protein = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.translate_protein(req.body.rnaPattern) });
    };
};

exports.does_dna_encode_amino = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.does_dna_encode_amino(solvers.solver1, req.body.dna, req.body.amino) });
    };
};

exports.generate_theoretical_spectrum = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.generate_theoretical_spectrum(req.body.peptide) });
    };
};

exports.cyclopeptide_sequencing = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.cyclopeptide_sequencing(req.body.input) });
    };
};

exports.leaderboard_cyclopeptide_sequencing = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.leaderboard_cyclopeptide_sequencing(req.body.input, req.body.N) });
    };
};

exports.spectral_convolution = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.spectral_convolution(req.body.spectrum) });
    };
};

exports.convolution_cyclopeptide_sequencing = function() {
    return function(req, res) {
        res.json({ result : solvers.solver2.convolution_cyclopeptide_sequencing(req.body.input, req.body.N, req.body.M) });
    };
};


