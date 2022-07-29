export const preview = (url: string, fileName: string = '') => {
  const element = document.createElement('a')
  element.download = fileName
  element.style.display = 'none'
  element.href = url
  element.target = '_blank'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const download = (url: string, fileName: string = '') => {
  if (!isAssetTypeInBrowser(url)) {
    return preview(url, fileName)
  }

  const x = new XMLHttpRequest()
  x.open('GET', url, true)
  x.responseType = 'blob'
  x.onload = function (e) {
    const url = window.URL.createObjectURL(x.response)
    preview(url, fileName)
  }
  x.send()
}

export const isAssetTypeInBrowser = (url: string) => {
  const ext = url.slice(url.lastIndexOf('.') + 1)
  return [
    'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'svg',
    'doc', 'docx', 'txt',
    'xlsx', 'xls',
    'eml',
    'pdf', 'ppt', 'pptx', 'pps', 'ppsx',
    'mp3', 'mp4'
  ].indexOf(ext.toLowerCase()) !== -1
}

