export abstract class BaseEnum {
  static getAvailableKeys() {
    return Object.keys(this)
  }

  static getAvailableValues() {
    return Object.values(this)
  }

  static getValue(keyName: string) {
    const found = Object.entries(this).find(([key]) => key == keyName)

    if (!found) return

    return found[1]
  }

  static getKey(value: string | number) {
    const found = Object.entries(this).find(([_, val]) => val == value)

    if (!found) return

    return found[0]
  }

  static getDescription(value: string | number) {
    throw new Error('Not implemented')
  }
}
