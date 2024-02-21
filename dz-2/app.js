const request = new XMLHttpRequest()
request.open("GET", "persons.json")
request.setRequestHeader("Content-type", "applecation/json")
request.send()

request.onload = () => {
    const data = JSON.parse(request.response)
    console.log(data)
}