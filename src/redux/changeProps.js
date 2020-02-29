const changeProps = (list, props, id, value) => {
    if (list instanceof Array){
        return list.map(item => {
            if (item.id === id) {
                return {...item, [props]: value || !item[props]}
            }
            return item
        })
    } else {
        return { ...list, [props]: value || !list[props] }
    }
}

export default changeProps;