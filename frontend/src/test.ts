export function setStatus(logined:boolean) {
    if(logined){
        console.log('status logined');
        document.body.innerText = `Logined as ${localStorage.getItem('LoginedRole')} Role`;
    }else {
        console.log('status')
        document.body.innerText = 'Not Logined';
    }
}


setStatus(!!localStorage.getItem('SSO_TOKEN'));