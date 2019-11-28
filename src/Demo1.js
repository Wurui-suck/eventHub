import $ from 'jquery'
const M = {
    data: { n: parseInt(localStorage.getItem('n')) || 100 }
}
const V = {
    el: null,
    template: `
        <h1>模块一</h1>
        <div>{{n}}</div>
    `,
    render() {
        let newTemplate = this.template.replace('{{n}}', M.data.n)
        $(this.el).html(newTemplate)
    }
}
const C= {
init(container) {
    V.el = container;
    V.render()
    C.bindEventBus()
},
bindEventBus() {
    eventHub.on('add', () => {
        M.data.n += 1
        V.render()
        localStorage.setItem('n', JSON.stringify(M.data.n))
    })
}
}
export default C.init