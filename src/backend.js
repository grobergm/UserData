export class APIcall {
  constructor(location) {
    this.location = location;
  }
  getData() {
    const resultVar= new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${process.env.API_key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    return resultVar
  }
}
