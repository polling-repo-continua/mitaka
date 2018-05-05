export class Censys {

  protected query: string;
  protected endpoint: string;

  constructor(query) {
    this.query = query;
    this.endpoint = 'https://censys.io';
  }

  public searchUrl() {
    const encoded = encodeURIComponent(this.query);
    return `${this.endpoint}/ipv4?q=${encoded}`;
  }
}