export abstract class BaseTranformer<T> {
  abstract mutation(raw: Partial<T>): Promise<any>

  async item(raw: Partial<T>) {
    return raw ? await this.mutation(raw) : undefined
  }

  async collection(raw: Partial<T>[]) {
    return raw ? await Promise.all(raw.map((r) => this.item(r))) : []
  }
}
