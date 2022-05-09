export function nhapSo(event){
    if ( !/^[0-9]{1,11}$/.test(event.key))
    {
      event.preventDefault();
    }
}
export function nhapChu(event) {
    if ( !/[^0-9`~!@#$%^&*-]/.test(event.key) )
    {
        event.preventDefault();
    }
}
