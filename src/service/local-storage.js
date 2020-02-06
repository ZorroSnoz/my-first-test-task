export let local = {
    setItem (arr) {
        localStorage.setItem('localItemsData', JSON.stringify(arr));
    },
    getItem () {
        return JSON.parse (localStorage.getItem ('localItemsData'));
    }
};