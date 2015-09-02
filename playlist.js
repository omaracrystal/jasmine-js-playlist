var Song = require('./song');

var Playlist = function(){
   this.songPlaylist = [];
};

Playlist.prototype.isEmpty = function () {
  if (this.songPlaylist.length === 0) {
    return true;
  } else {
    return false;
  }
};

Playlist.prototype.addSong = function (song) {
  this.songPlaylist.push(song)
};

Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
