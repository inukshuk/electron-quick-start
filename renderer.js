// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

{
  function report(type) {
    const element = document.createElement('pre')

    document.body.appendChild(element)
    document.addEventListener(type, event => {
      event.preventDefault()

      let num = 0
      let paths = []

      for (let file of event.dataTransfer.files) {
        paths.push(file.path)
        num++
      }

      element.innerHTML =
        `${type} ${num} File(s):\n  ${paths.join('\n  ')}\n`
    })
  }

  report('dragenter')
  report('dragover')
  report('drop')
}
