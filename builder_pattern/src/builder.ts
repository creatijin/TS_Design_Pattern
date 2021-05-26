class Request_aksFor {
  url: string;
  method: string;
  data: any;
  constructor() {
    this.url = '';
    this.method = '';
    this.data = null;
  }
}
class RequestBuilder {
  request_aksFor: any;

  constructor() {
    this.request_aksFor = new Request_aksFor();
  }
  forUrl(url: string) {
    this.request_aksFor.url = url;
    return this;
  }
  useMethod(method: string) {
    this.request_aksFor.method = method;
    return this;
  }
  setData(data: any) {
    this.request_aksFor.data = data;
    return this;
  }
  build() {
    return this.request_aksFor;
  }
}
let getRequest = new RequestBuilder().forUrl('https://github.com/hg-pyun').useMethod('GET').build();
let postRequest = new RequestBuilder()
  .forUrl('https://github.com/hg-pyun')
  .useMethod('POST')
  .setData({ id: 'hg', password: 1234 })
  .build();
