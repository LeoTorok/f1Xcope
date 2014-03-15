
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , week1Routes = require('./routes/week1')
    , week2Routes = require('./routes/week2')
    , week3Routes = require('./routes/week3')
    , week4Routes = require('./routes/week4')
    , week5Routes = require('./routes/week5')
    , week6Routes = require('./routes/week6')
    , week7Routes = require('./routes/week7')
    , week8Routes = require('./routes/week8')
    , week9Routes = require('./routes/week9')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');

/*

//file is to big: wont work from the browser, so
//have to hook it manually here
var solver5 = require('./solvers/Week5Solvers');

var fs = require('fs');
function solveStringConstructionProblem_FromFile(dta){
    "use strict";
    var lng =dta.length;

    var parts = dta.split('\n');

    var d = parseInt(parts[0], 10);
    var lines = dta.substr(parts[0].length+1);


    solver5.string_reconstruction_from_read_pairs(d, lines);
}
fs.readFile('/Users/leo/Downloads/dataset_58_14-2.txt', 'utf8', function(err, data){
    "use strict";
    solveStringConstructionProblem_FromFile(data);
});
*/


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/week1', week1Routes.index());
app.post('/week1/fwp.json', week1Routes.fwp());
app.post('/week1/rc.json', week1Routes.rc());
app.post('/week1/pmp.json', week1Routes.pmp());
app.post('/week1/approx_pmp.json', week1Routes.approx_pmp());
app.post('/week1/frequent_words_with_mismatches_problem.json', week1Routes.frequent_words_with_mismatches_problem());
app.post('/week1/frequent_words_with_mismatches_and_reverse_complement_problem.json', week1Routes.frequent_words_with_mismatches_and_reverse_complement_problem());
app.post('/week1/cfp.json', week1Routes.cfp());
app.post('/week1/skew.json', week1Routes.skew());
app.post('/week1/min_skew.json', week1Routes.min_skew());

app.get('/week2', week2Routes.index());
app.post('/week2/translate_protein.json', week2Routes.translate_protein());
app.post('/week2/does_dna_encode_amino.json', week2Routes.does_dna_encode_amino());
app.post('/week2/generate_theoretical_spectrum.json', week2Routes.generate_theoretical_spectrum());
app.post('/week2/cyclopeptide_sequencing.json', week2Routes.cyclopeptide_sequencing());
app.post('/week2/leaderboard_cyclopeptide_sequencing.json', week2Routes.leaderboard_cyclopeptide_sequencing());
app.post('/week2/convolution_cyclopeptide_sequencing.json', week2Routes.convolution_cyclopeptide_sequencing());
app.post('/week2/spectral_convolution.json', week2Routes.spectral_convolution());

app.get('/week3', week3Routes.index());
app.post('/week3/motif_enumeration.json', week3Routes.motif_enumeration());
app.post('/week3/median_string.json', week3Routes.median_string());
app.post('/week3/profile_most_probable_kmer.json', week3Routes.profile_most_probable_kmer());
app.post('/week3/greedy_motif_search.json', week3Routes.greedy_motif_search());
app.post('/week3/randomized_motif_search.json', week3Routes.randomized_motif_search());
app.post('/week3/gibbs_sampler.json', week3Routes.gibbs_sampler());

app.get('/week4', week4Routes.index());
app.post('/week4/string_composition.json', week4Routes.string_composition());
app.post('/week4/overlap_graph.json', week4Routes.overlap_graph());
app.post('/week4/de_Bruijn_graph_from_string.json', week4Routes.de_Bruijn_graph_from_string());
app.post('/week4/de_Bruijn_graph_from_kamers.json', week4Routes.de_Bruijn_graph_from_kamers());
app.post('/week4/eulerian_cycle.json', week4Routes.eulerian_cycle());

app.get('/week5', week5Routes.index());
app.post('/week5/eulerian_path.json', week5Routes.eulerian_path());
app.post('/week5/string_reconstruction.json', week5Routes.string_reconstruction());
app.post('/week5/universal_string.json', week5Routes.universal_string());
app.post('/week5/string_reconstruction_from_read_pairs.json', week5Routes.string_reconstruction_from_read_pairs());
app.post('/week5/contig_generation.json', week5Routes.contig_generation());


app.get('/week6', week6Routes.index());
app.post('/week6/change_problem.json', week6Routes.change_problem());
app.post('/week6/manhattan_tourist.json', week6Routes.manhattan_tourist());
app.post('/week6/output_lcs.json', week6Routes.output_lcs());
app.post('/week6/longest_path_in_dag.json', week6Routes.longest_path_in_dag());
app.post('/week6/global_alignment_problem.json', week6Routes.global_alignment_problem());
app.post('/week6/local_alignment_problem.json', week6Routes.local_alignment_problem());

app.get('/week7', week7Routes.index());
app.post('/week7/edit_problem.json', week7Routes.edit_problem());
app.post('/week7/fitting_problem.json', week7Routes.fitting_problem());
app.post('/week7/overlap_alignment_problem.json', week7Routes.overlap_alignment_problem());
app.post('/week7/affinity_alignment_problem.json', week7Routes.affinity_alignment_problem());
app.post('/week7/middle_edge_in_linear_space_problem.json', week7Routes.middle_edge_in_linear_space_problem());

app.get('/week8', week8Routes.index());
app.post('/week8/greedy_sorting.json', week8Routes.greedy_sorting());
app.post('/week8/number_of_breakpoints.json', week8Routes.number_of_breakpoints());
app.post('/week8/two_break_distance.json', week8Routes.two_break_distance());
app.post('/week8/shared_kmer_problem.json', week8Routes.shared_kmer_problem());

app.get('/week9', week9Routes.index());
app.post('/week9/trie_construction_problem.json', week9Routes.trie_construction_problem());
app.post('/week9/multiple_pattern_matching_problem.json', week9Routes.multiple_pattern_matching_problem());
app.post('/week9/longest_repeat_problem.json', week9Routes.longest_repeat_problem());

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
