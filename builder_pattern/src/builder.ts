class Requests {
  url: string;
  method: string;
  data: object;
  constructor() {
    this.url = '';
    this.method = '';
    this.data = {};
  }
}
class RequestBuilder {
  Requests: any;

  constructor() {
    this.Requests = new Requests();
  }
  forUrl(url: string) {
    this.Requests.url = url;
    return this;
  }
  useMethod(method: string) {
    this.Requests.method = method;
    return this;
  }
  setData(data: object) {
    this.Requests.data = data;
    return this;
  }
  build() {
    return this.Requests;
  }
}
let getRequest = new RequestBuilder()
  .forUrl('https://github.com/creatijin/TS_Design_Pattern/blob/master/builder_pattern/src/builder.ts')
  .useMethod('GET')
  .build();
let postRequest = new RequestBuilder()
  .forUrl('https://github.com/creatijin/TS_Design_Pattern/blob/master/builder_pattern/src/builder.ts')
  .useMethod('POST')
  .setData({ id: 'creatijin', password: 1234 })
  .build();
