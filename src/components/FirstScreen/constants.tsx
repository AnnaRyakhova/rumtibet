const selects = [{
    label: 'выберите из списка',
    labelFor: 'location',
    options: [{
        value: 'selectTitle', option: 'Локация для тура'
    }, {
        value: 'Beijing', option: 'Пекин'
    }, {
        value: 'Lhasa', option: 'Лхаса'
    }, {
        value: 'Shanghai', option: 'Шанхай'
    }]
}, {
    label: 'укажите диапазон',
    labelFor: 'date',
    options: [{
        value: 'selectTitle', option: 'Дата похода'
    }, {
        value: 'Beijing', option: 'Пекин'
    }, {
        value: 'Lhasa', option: 'Лхаса'
    }, {
        value: 'Shanghai', option: 'Шанхай'
    }]
}, {
    label: 'минимум 4 человека',
    labelFor: 'members',
    options: [{
        value: 'selectTitle', option: 'Участники'
    }, {
        value: 'Beijing', option: 'Пекин'
    }, {
        value: 'Lhasa', option: 'Лхаса'
    }, {
        value: 'Shanghai', option: 'Шанхай'
    }]
}]

export default selects