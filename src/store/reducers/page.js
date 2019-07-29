const pageNumber = (state = 1, {type, value}) => {
    switch(type) {
        case 'PAGE_UPDATED':
            console.log(type, value);
            return value;
        default: 
            return state;
    }
}

export default pageNumber;