const information = document.getElementById('info');
information.innerText = `This app is using Chrome(v${versions.chrome()})`
console.log('test');

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
};

func();