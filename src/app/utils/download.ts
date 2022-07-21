export const download = (url: string, fileName: string = '') => {
  const element = document.createElement('a')
  element.download = fileName
  element.style.display = 'none'
  element.href = url
  element.target = '_blank'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const downloadByXHR = (url: string, fileName: string = '') => {
  const x = new XMLHttpRequest()
  x.open('GET', url, true)
  x.responseType = 'blob'
  x.onload = function (e) {
    const url = window.URL.createObjectURL(x.response)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  x.send()
}


