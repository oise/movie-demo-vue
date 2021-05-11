export class DataService {

  get(url: string): Promise<any> {
    return fetch(`${url}`, {
      method: "GET"
    }).then(this.processResponse);
  };


  private processResponse(response: Response) {
    return new Promise((resolve, reject) => {
      // This will resolve or reject depending on status, will pass both "status" and "data" in either case
      let func: Function;

      response.status < 400 ? (func = resolve) : (func = reject);

      return response
        .json()
        .then(data => func(data))
        .catch(data => func(data));
    });
  }
}
