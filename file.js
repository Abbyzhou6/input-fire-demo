
var fileInput = document.getElementById('file')
var fileType = ['application/json']

fileInput.addEventListener('change',function () {
  if(fileInput.files.length == 0){
      alert('文件不能为空')
      return 
  }
  
  if(fileInput.files[0].type !== fileType[0]){
    alert('文件格式只能是json格式，请重新选择！')
    return false
  }
  var file = fileInput.files[0]
  var reader = new FileReader()

  reader.onload = function(event){
    var fileText = event.target.result
    // console.log(fileText)
    console.log(JSON.parse(fileText))
  }
  reader.readAsText(file)
})

