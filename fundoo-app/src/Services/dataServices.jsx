import { BehaviorSubject } from "rxjs";
import React from "react";

class dataServices extends React.Component {
  search = new BehaviorSubject("");
  Share = this.search.asObservable();

  constructor(props) {
    super(props);
  }

  shareData(getSearch) {
    this.search.next(getSearch);
    console.log(getSearch);
  }
}

export default new dataServices();
