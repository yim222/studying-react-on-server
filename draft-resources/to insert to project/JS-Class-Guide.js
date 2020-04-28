/**

Class for contain the data of social event for sending to server


1.	Map<String, String> singleValues,
2.	Map<String, List<String>> multiValues,
3.	String comment,
4.	Date date, int[] time,
5.	int[] agesRange)


*/
/**
Some explanation on class

- It doesn't throw exception if u don't provide all the params, but leave the field as undefined.

*/
export class SocialEventRequest{
  singleValues = {};
  multiValues = {};
  myMap = new Map();
  myObjectMap = {a:"sss"};
  simpleVar;
  singleValues2 = {};
  multiValues2 = {};



  str ;
  #pr = "private";


  constructor(str, singleValues
  ,singleValues2, multiValues2){

    this.str = str;
    this.singleValues = singleValues;
    this.singleValues2 = singleValues2;
    this.multiValues2 = multiValues2;
  }

  // set #pr(newVal){
  //   this.#pr = newVal;
  // }

  setPr(newVal){
    this.#pr = newVal;

  }
  setMultiValues2(prop, val){
    // let tempArr = this.multiValues2[val.key];
    // tempArr.push(val);
    this.multiValues2[prop] =[];
    if(this.multiValues2[prop] == null){
      this.multiValues2[prop] =[];
    }
    this.multiValues2[prop].push(val);
  }

  // set simpleVar(val){
  //   this.simpleVar = val;
  // }

  // set myObjectMap(obj1){
  //   // debugger;
  //   this.myObjectMap = "some data ??";
  //   // this.myObjectMap = Object.assign(this.myObjectMap, obj1);
  // }

  // set #setPr(newVal){
  //   this.#pr = newVal;
  //
  // }



}

export let simpleObj = {

  multipleValues : {}

}
