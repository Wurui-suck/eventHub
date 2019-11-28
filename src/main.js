import $ from 'jquery'
import './style.css'
import Demo2 from './Demo2'
import Demo1 from './Demo1'

const V = {
    el: null,
    template:
        `<section id="demo1" > 
        </section>
        <section id="demo2">
        </section>      
      `,
    render() {
        $(this.el).html(this.template)
        Demo1($('#demo1'))
        Demo2($('#demo2'))
    }
}
const C = {
    init(container) {
        V.el = container;
        V.render()
    }
}

C.init($('#root'))
