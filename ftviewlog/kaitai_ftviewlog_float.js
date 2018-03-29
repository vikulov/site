// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.FtviewFloatlog = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var FtviewFloatlog = (function() {
  function FtviewFloatlog(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  FtviewFloatlog.prototype._read = function() {
    this.header = new TableHeaderT(this._io, this, this._root);
    this.rows = new Array(this.header.numRecords);
    for (var i = 0; i < this.header.numRecords; i++) {
      this.rows[i] = new FloatRowT(this._io, this, this._root);
    }
  }

  var TableHeaderT = FtviewFloatlog.TableHeaderT = (function() {
    function TableHeaderT(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    TableHeaderT.prototype._read = function() {
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

  var FloatRowT = FtviewFloatlog.FloatRowT = (function() {
    function FloatRowT(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FloatRowT.prototype._read = function() {
      this.date = KaitaiStream.bytesToStr(this._io.readBytes(9), "ASCII");
      this.time = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
      this.millitm = KaitaiStream.bytesToStr(this._io.readBytes(3), "ASCII");
      this.tagindex = KaitaiStream.bytesToStr(this._io.readBytes(5), "ASCII");
      this.value = this._io.readF8le();
      this.status = KaitaiStream.bytesToStr(this._io.readBytes(1), "ASCII");
      this.marker = KaitaiStream.bytesToStr(this._io.readBytes(1), "ASCII");
      this.internal = this._io.readS4le();
    }

    /**
     *  YYYY-MM-DD
     */

    /**
     * HH-MM-SS
     */

    /**
     * DDD
     */

    /**
     * DDDDD
     */

    return FloatRowT;
  })();

  return FtviewFloatlog;
})();
return FtviewFloatlog;
}));
