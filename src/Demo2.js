import $ from 'jquery'
const V = {
    el: null,
    template: `
      <h1>模块二</h1>
      <button id="add">+1</button>
    `,
    render() {
        this.el.html(this.template)
    }
}
const C = {
    init(container) {
        V.el = container
        V.render()
        C.bindEvent()
    },
    bindEvent() {
        $('#add').on('click', () => {
            eventHub.emit('add')
        })
    }
}
export default C.init