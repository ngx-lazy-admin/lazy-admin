import { Injectable } from '@angular/core';

export interface formCacheType {
  model: any,
  fields?: any,
  options?: any,
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cache: any = {}
  history: any = {}

  constructor() { }

  // 获取缓存数据
  get (str: string) {
    return this.cache[str]
  }

  // 记录路由缓存数据
  set (url: string, data: formCacheType) {
    this.cache[url] = data
    this.recordHistoryPosition(url)
  }

  // 记录历史位置
  recordHistoryPosition (url: string) {
    this.history[url] = {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    }
  }

  // 恢复历史位置
  recoveryHistoryPosition (url: string) {
    if (this.history[url]) {
      const state = this.history[url]
      // window.scrollTo(state.scrollX, state.scrollY)
      // document.body.scrollTop = state.scrollY
      document.documentElement.scrollTop = state.scrollY
    }
  }
}
