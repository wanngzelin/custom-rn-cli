import AsyncStorage from '@react-native-community/async-storage';
/**
   * 清除所有缓存
   */
export const clearItem = () => {
  AsyncStorage.clear()
}

/**
* 获取某项缓存
* @param {*} key 缓存索引
*/
export const getItem = async (key) => {
  let data = await AsyncStorage.getItem(key)
  let result;
  try {
    result = JSON.parse(data)
  } catch (error) {
    result = data
  }
  return result;
}

/**
* 设置缓存数据
* @param {*} key 缓存索引
* @param {*} value 缓存值
*/
export const setItem = async (key, value) => {
  if (typeof value != 'string') {
    value = JSON.stringify(value)
  }
  return await AsyncStorage.setItem(key, value)
}

/**
   * 移除某项缓存
   * @param {*} key 缓存索引
   */
export const removeItem = async (key) => {
  return await AsyncStorage.removeItem(key)
}

/**
   * 更新缓存中指定的key
   * @param {*} key 缓存索引
   */
export const update = (key, value) => {
  if (typeof value != 'string') {
    value = JSON.stringify(value)
  }
  AsyncStorage.mergeItem(key, value)
}

/**
* 获得缓存中所有的数据
* @param {*}
*/
export const getAllKeys = async () => {
  let keys;
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch (error) {
    keys = error
  }
  return keys
}
