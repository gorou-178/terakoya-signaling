/**
 * Created by gurimmer on 2014/10/13.
 */
var io = require('socket.io').listen(process.env.PORT || port);
console.log((new Date()) + " Server is listening on port " + port);

io.sockets.on('connection', function(socket) {
    socket.on('message', function(message) {
        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', function() {
        socket.broadcast.emit('user disconnected');
    });
});

