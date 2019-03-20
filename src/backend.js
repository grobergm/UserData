// export class APIcall {
//   constructor(location) {
//     this.location = location;
//   }
//   getData() {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${process.env.API_key}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//   }
// }

export class UserData {
  constructor(userNumber, userGender){
    this.userNumber = userNumber;
    this.gender = userGender;

  }
  getData(){
    return new Promise((resolve,reject)=>{
      const myRequest = new XMLHttpRequest();
      console.log("myRequest"+ myRequest.open);

      const url = `https://randomuser.me/api/?results=${this.userNumber}&gender=${this.gender}`;
      myRequest.onload = function(){
        if(this.status===200){
          resolve(myRequest.response)
        } else {
          reject(console.log("there was an error!"))
        }
      }
      myRequest.open("GET",url,true);
      myRequest.send();
    });
  }
  getIndividual(firstName,lastName){
    return new Promise((resolve, reject)=>{
      const infoRequest = new XMLHttpRequest();
      const url = `https://randomuser.me/api/?name.first=${firstName}&name.last=${lastName}`;
      infoRequest.onload = function(){
        if(this.status===200){
          resolve(infoRequest.response)
        } else {
          reject(Error(request.statusText))
        }
      }
      infoRequest.open("GET",url,true);
      infoRequest.send();
    })
  }
}
