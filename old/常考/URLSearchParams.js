class URLSearchParams {
  constructor(init) {
    this.params = [];

    if (typeof init === "string") {
      this.parse(init);
    } else if (init && typeof init === "object") {
      Object.entries(init).forEach(([key, value]) => {
        this.append(key, value);
      });
    }
  }

  append(name, value) {
    this.params.push([name, value]);
  }

  delete(name) {
    this.params = this.params.filter(([key, value]) => key !== name);
  }

  get(name) {
    const param = this.params.find(([key, value]) => key === name);
    return param ? param[1] : null;
  }

  has(name) {
    return this.params.some(([key, value]) => key === name);
  }

  set(name, value) {
    const param = this.params.find(([key, value]) => key === name);
    if (param) {
      param[1] = value;
    } else {
      this.append(name, value);
    }
  }

  toString() {
    return this.params
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");
  }

  parse(queryString) {
    this.params = queryString
      .split("&")
      .map((item) => item.split("=").map(decodeURIComponent));
  }
}

const params = new URLSearchParams("?foo=bar&baz=qux");

params.get("foo"); // 'bar'
params.get("baz"); // 'qux'

params.set("foo", "new-value");
params.toString(); // 'foo=new-value&baz=qux'

params.delete("foo");
params.has("foo"); // false

// const params = new URLSearchParams({ foo: 'bar', baz: 'qux' });

// params.get('foo'); // 'bar'
// params.get('baz'); // 'qux'

// params.set('foo', 'new-value');
// params.toString(); // 'foo=new-value&baz=qux'

// params.delete('foo');
// params.has('foo'); // false
