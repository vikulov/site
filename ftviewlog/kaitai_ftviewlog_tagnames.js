================ FtviewTagnameslog.js

// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

var FtviewTagnameslog = (function() {
  function FtviewTagnameslog(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this.header = new TableHeaderT(this._io, this, this._root);
    this.rows = new Array(this.header.numRecords);
    for (var i = 0; i < this.header.numRecords; i++) {
      this.rows[i] = new TagnameRowT(this._io, this, this._root);
    }
  }

  var TableHeaderT = FtviewTagnameslog.TableHeaderT = (function() {
    function TableHeaderT(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this.version = this._io.ensureFixedContents([3]);
      this.lastUpdateYear = this._io.readU1();
      this.lastUpdateMonth = this._io.readU1();
      this.lastUpdateDay = this._io.readU1();
      this.numRecords = this._io.readU4le();
      this.headerSize = this._io.readU2le();
      this.recordSize = this._io.readU2le();
      this.skipped = this._io.readBytes((this.headerSize - 12));
    }

    return TableHeaderT;
  })();

  var TagnameRowT = FtviewTagnameslog.TagnameRowT = (function() {
    function TagnameRowT(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this.tagname = KaitaiStream.bytesToStr(this._io.readBytes(256), "ASCII");
      this.tagindex = KaitaiStream.bytesToStr(this._io.readBytes(5), "ASCII");
      this.tagtype = KaitaiStream.bytesToStr(this._io.readBytes(1), "ASCII");
      this.datatype = KaitaiStream.bytesToStr(this._io.readBytes(2), "ASCII");
    }

    return TagnameRowT;
  })();

  return FtviewTagnameslog;
})();

// Export for amd environments
if (typeof define === 'function' && define.amd) {
  define('FtviewTagnameslog', [], function() {
    return FtviewTagnameslog;
  });
}

// Export for CommonJS
if (typeof module === 'object' && module && module.exports) {
  module.exports = FtviewTagnameslog;
}
