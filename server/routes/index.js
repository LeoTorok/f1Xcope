
/*
 * GET home page.
 */

exports.index = function(Todo) {
    return function(req, res) {
        Todo.find({}, function(error, todos) {
            res.render('index', {
                title: 'Express',
                todos : todos
            });
        });
    };
};


exports.tagsList = function(Tag) {
    return function(req, res) {
        Tag.find({}, function(error, tags) {
            res.render('tags', {
                title: 'Express',
                tags : tags
            });
        });
    };
};

exports.addTodo = function(Todo) {
    return function(req, res) {
        var todo = new Todo(req.body);
        todo.save(function(error, todo) {
            if (error || !todo) {
                res.json({ error : error });
            } else {
                res.json({ todo : todo });
            }
        });
    };
};

exports.addTag = function(Tag) {
    return function(req, res) {
        var tag = new Tag(req.body);
        tag.save(function(error, savedTag) {
            if (error || !savedTag) {
                res.json({ error : error });
            } else {
                res.json({ todo : savedTag });
            }
        });
    };
};

exports.get = function(Todo) {
    return function(req, res) {
        Todo.find({}, function(error, todos) {
            res.json({ todos : todos });
        });
    }
};

exports.deleteTag = function(Tag) {
    return function(req, res) {
        Tag.findOne({ _id : req.params.id }).remove(function(error, todo) {
            if (error || !todo) {
                res.json({ error : error });
            } else {
                todo.done = req.body.done;
            }
        });
    }
};


exports.update = function(Todo) {
    return function(req, res) {
        Todo.findOne({ _id : req.params.id }, function(error, todo) {
            if (error || !todo) {
                res.json({ error : error });
            } else {
                todo.done = req.body.done;
                todo.save(function(error, todo) {
                    if (error || !todo) {
                        res.json({ error : error });
                    } else {
                        res.json({ todo : todo });
                    }
                });
            }
        });
    }
};