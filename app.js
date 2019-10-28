document.getElementById('getDataButton').addEventListener('click', getData);

function getData() {
  // Create a XHR object
  const xhr = new XMLHttpRequest();
  // Open
  xhr.open('GET', 'data.txt', true);

  // console.log('ReadyState', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('ReadyState', xhr.readyState);
  };

  xhr.onload = function() {
    console.log('ReadyState', xhr.readyState);

    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  // Old way of doing xhr.onload()
  // xhr.onreadystatechange = function() {
  //   console.log('ReadyState', xhr.readyState);

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log('Request error');
  }

  xhr.send();

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished & response is ready
}