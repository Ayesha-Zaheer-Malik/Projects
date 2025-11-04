function debounce(fn,delay)
{
let timer=0;
return function(...arg){
    clearTimeout(timer);
    timer=setTimeout(()=>{
    fn(...arg)
    },delay)
}
}
const search=(query)=>{
console.log("searching for query...",query);
};
//with debouncing...
const debounceSearch=debounce(search,3000)

debounceSearch('hel');
debounceSearch('hell');
debounceSearch('hello');
// without debouncing...
/*search('he');
search('hel');
debounceSearch('hell');
search('hello');
*/


