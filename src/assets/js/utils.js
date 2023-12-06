// 屏幕缩放
export function screenSize (editorDom) {
  const screenWidth = document.body.clientWidth || document.documentElement.clientWidth
  const screenHeight = document.body.clientHeight || document.documentElement.clientHeight
  const defWidth = 1920
  const defHeight = 1080
  let xScale = screenWidth / defWidth
  let yScale = screenHeight / defHeight
  editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')'

  $(window).resize(() => {
    const screenWidth = document.body.clientWidth || document.documentElement.clientWidth
    const screenHeight = document.body.clientHeight || document.documentElement.clientHeight
    xScale = screenWidth / defWidth
    yScale = screenHeight / defHeight
    editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')'
  })
}
