function convertToCamelCase(obj) {
  // 如果不是对象或者对象为空，直接返回
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // 遍历对象的属性
  for (let key in obj) {
    // 跳过原型链上的属性
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    let value = obj[key];
    let newKey = key.replace(/_(\w)/g, function (match, p1) {
      return p1.toUpperCase();
    });

    // 如果属性的值是一个对象，则递归调用本函数
    if (typeof value === 'object') {
      value = convertToCamelCase(value);
    }

    // 将原始键名属性删除，并将新键名属性添加到对象上
    delete obj[key];
    obj[newKey] = value;
  }

  return obj;
}

let obj = {
  user_info: {
    first_name: 'John',
    last_name: 'Doe',
    contact_info: {
      phone_number: '1234567890',
      email_address: 'john.doe@example.com',
    },
  },
  order_info: {
    order_id: '123456',
    order_date: '2023-04-30',
  },
};

// console.log(convertToCamelCase(obj));
function convertToCamelCase1(obj) {
  // 如果不是对象或者对象为空，直接返回
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // 遍历对象的属性
  for (let key in obj) {
    // 跳过原型链上的属性
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    let value = obj[key];
    let newKey = key
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();

    // 如果属性的值是一个对象，则递归调用本函数
    if (typeof value === 'object') {
      value = convertToCamelCase1(value);
    }

    // 将原始键名属性删除，并将新键名属性添加到对象上
    delete obj[key];
    obj[newKey] = value;
  }

  return obj;
}

let obj1 = {
  userInfo: {
    firstName: 'John',
    lastName: 'Doe',
    contactInfo: {
      phoneNumber: '1234567890',
      emailAddress: 'john.doe@example.com',
    },
  },
  orderInfo: { orderId: '123456', orderDate: '2023-04-30' },
};
console.log(convertToCamelCase1(obj1));
