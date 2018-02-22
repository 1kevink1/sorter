class Sorter {
  
  constructor() {
    this.mas =[];
    this._length = 0;
  }

  add(element) {
    this.mas.push(element);
    this._length++;
  }

  at(index) {
    return this.mas[index];
  }

  get length() {
    return this._length;
  }

  toArray() {
    return this.mas;
  }

  sort(indices) {
    
    var i=0;
    var tmp = [];
    for(i=0; i<indices.length; i++){
      tmp.push(this.mas[indices[i]]);
    }
    tmp.sort();
    indices.sort();
    for(i=0; i<indices.length; i++){
      this.mas[indices[i]] = tmp[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;