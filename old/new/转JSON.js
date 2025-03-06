function jsonStringify(object) {
  if (object === null) return "null";
  if (typeof object === "string") return `"${object}"`;
  if (typeof object === "number" || typeof object === "boolean")
    return object.toString();

  if (Array.isArray(object)) {
    const arr = object.map((item) => jsonStringify(item));
    return `[${arr.join(",")}]`;
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);
    const items = keys.map((key) => {
      const value = object[key];
      if (typeof value === "function" || typeof value === "undefined")
        return "";
      return `"${key}":${jsonStringify(value)}`;
    });
    return `{${items.join(",")}}`;
  }

  return "";
}
